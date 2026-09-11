---
layout: post
title: "Getting Started with EMG Signal Processing in Python"
date: 2026-01-10
categories: [tutorial]
tags: [biosignals, python, emg]
excerpt: "Surface electromyography (sEMG) signals provide a window into muscle activation patterns. In this tutorial, we'll explore the fundamentals of processing EMG signals using Python, from raw data acquisition to feature extraction."
reading_time: 5
cover: /assets/img/covers/emg-python.svg
cover_theme: peach
card_title: "Making sense of muscle signals"
card_description: "A practical guide to EMG processing in Python."
---

Surface electromyography (sEMG) signals provide a window into muscle activation patterns. In this tutorial, we'll explore the fundamentals of processing EMG signals using Python, from raw data acquisition to feature extraction.

## What is EMG?

Electromyography (EMG) measures the electrical activity produced by skeletal muscles. Surface EMG (sEMG) uses electrodes placed on the skin to detect these signals non-invasively, making it ideal for applications in rehabilitation, prosthetics control, and human-computer interaction.

## Setting Up Your Environment

First, let's install the necessary Python libraries:

```bash
pip install numpy scipy matplotlib pandas
```

For this tutorial, we'll use NumPy for numerical operations, SciPy for signal processing, and Matplotlib for visualization.

## Loading and Visualizing EMG Data

Let's start by loading a sample EMG signal and visualizing it:

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy import signal

# Load your EMG data (example)
# data = np.loadtxt('emg_data.csv')
# For demo, let's create synthetic data
fs = 1000  # Sampling frequency (Hz)
t = np.linspace(0, 2, 2*fs)
emg_signal = np.random.randn(len(t)) * 0.1

# Plot raw signal
plt.figure(figsize=(12, 4))
plt.plot(t, emg_signal)
plt.xlabel('Time (s)')
plt.ylabel('Amplitude (mV)')
plt.title('Raw EMG Signal')
plt.grid(True)
plt.show()
```

## Signal Preprocessing

Raw EMG signals typically contain noise and artifacts. Here's a standard preprocessing pipeline:

### 1. Band-pass Filtering

Remove low-frequency motion artifacts and high-frequency noise:

```python
# Design bandpass filter (20-450 Hz)
low_cutoff = 20
high_cutoff = 450
order = 4

# Butterworth bandpass filter
b, a = signal.butter(order, [low_cutoff, high_cutoff],
                     btype='band', fs=fs)
filtered_signal = signal.filtfilt(b, a, emg_signal)
```

### 2. Rectification

Take the absolute value to get the signal envelope:

```python
rectified_signal = np.abs(filtered_signal)
```

### 3. Envelope Detection

Apply low-pass filter for smooth envelope:

```python
# Low-pass filter at 10 Hz
envelope_cutoff = 10
b_env, a_env = signal.butter(order, envelope_cutoff,
                             btype='low', fs=fs)
envelope = signal.filtfilt(b_env, a_env, rectified_signal)
```

## Onset Detection

Detecting when muscle activation begins is crucial for many applications. A simple threshold-based approach:

```python
def detect_onset(signal, threshold_factor=3, min_duration=0.05):
    """
    Detect muscle activation onset

    Parameters:
    -----------
    signal : array
        Processed EMG signal
    threshold_factor : float
        Multiplier of baseline standard deviation
    min_duration : float
        Minimum duration (seconds) to be considered onset

    Returns:
    --------
    onsets : array
        Indices of detected onsets
    """
    # Calculate baseline (first 10% of signal)
    baseline = signal[:int(len(signal)*0.1)]
    threshold = np.mean(baseline) + threshold_factor * np.std(baseline)

    # Find points above threshold
    above_threshold = signal > threshold

    # Find onset points (transitions from False to True)
    onsets = np.where(np.diff(above_threshold.astype(int)) == 1)[0]

    return onsets, threshold
```

## Feature Extraction

Common features used for EMG analysis:

```python
def extract_features(signal, window_size=200):
    """Extract time-domain EMG features"""

    # Root Mean Square (RMS)
    rms = np.sqrt(np.mean(signal**2))

    # Mean Absolute Value (MAV)
    mav = np.mean(np.abs(signal))

    # Variance
    var = np.var(signal)

    # Zero Crossings
    zc = np.sum(np.diff(np.sign(signal)) != 0)

    return {
        'RMS': rms,
        'MAV': mav,
        'Variance': var,
        'Zero_Crossings': zc
    }
```

## Practical Applications

This basic pipeline forms the foundation for many EMG applications:

- **Prosthetics Control:** Pattern recognition for controlling robotic limbs
- **Rehabilitation:** Monitoring muscle activation during physical therapy
- **Gesture Recognition:** Human-computer interaction through muscle movements
- **Fatigue Assessment:** Tracking muscle fatigue in sports or workplace ergonomics

## Next Steps

This tutorial covered the basics, but there's much more to explore:

- Advanced filtering techniques (adaptive filters, wavelet denoising)
- Frequency-domain analysis (power spectral density, median frequency)
- Machine learning for pattern classification
- Real-time processing considerations

## Resources

Check out these resources for deeper learning:

- Our open-source EMAHA-DB datasets on GitHub
- SciPy signal processing documentation
- Research papers on EMG classification techniques

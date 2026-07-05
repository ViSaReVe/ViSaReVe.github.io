---
layout: post
title: "Surface EMG in 2026: From Condition-Varied Datasets to Consumer Neural Interfaces"
date: 2026-07-06
categories: [research]
tags: [biosignals, emg, datasets, neural-interface, machine-learning]
excerpt: "The EMAHA sEMG datasets I helped build, what our papers found about measurement conditions, and where EMG is headed in 2026 — Meta's Neural Band, foundation models, dry electrodes, and the open problems."
reading_time: 12
---

> I collected and published the **EMAHA** surface-EMG datasets (DB4–DB7) and co-authored the papers on how
> measurement conditions affect activity classification. This is the long version: what the datasets are, what
> we learned, where the EMG field has moved since (a lot, fast), the problems still unsolved, and where it's
> going. Think of it as a map of the space my research sits in.

## Introduction: why EMG suddenly matters

For decades, surface electromyography (sEMG) — reading the tiny electrical signals your muscles emit when they
contract — lived mostly in research labs, prosthetics clinics, and sports-science studies. In 2025 that changed.
Meta shipped the **Neural Band**, a wrist-worn EMG device that turns subtle finger movements into input for AR
glasses, and Mark Zuckerberg publicly bet that this kind of interface will *surpass the keyboard* by the end of
the decade. EMG went from "niche biosignal" to "the input layer for the next computing platform" in about two
years.

That's the arc this post traces: from the kind of careful, condition-controlled **research datasets** I worked
on (2023–24), to the **consumer neural interfaces and EMG foundation models** of 2025–26 — and the hard,
still-unsolved problems in between. If you're getting into EMG, this is the lay of the land.

## Part 1 — The EMAHA datasets (my corner of it)

**EMAHA** = *ElectroMyography Analysis of Human Activity*: a series of multi-channel sEMG datasets for
classifying **activities of daily living (ADL)** and hand gestures, recorded with **Noraxon Ultium wireless**
sensors. The series began with **[EMAHA-DB1](https://arxiv.org/abs/2301.03325)** (Karnam, Turlapaty, Dubey &
Gokaraju, *IEEE Transactions on Instrumentation and Measurement*, 2023): 25 subjects, **22 ADLs** organized by
the **FAABOS** taxonomy (Functional Arm Activity Behavioral Observation System), five sEMG sensors. DB4–DB7 —
the ones I helped build — extend it.

| Dataset | Theme | Size | Link |
|---------|-------|------|------|
| **EMAHA-DB4** | ADL with **spatial context** (arm-position–aware) | ~1 GB | [db4](https://www.kaggle.com/datasets/anishturlapaty/emaha-db4) |
| **EMAHA-DB5** | Upper-limb / fine ADL | ~2 GB | [db5](https://www.kaggle.com/datasets/anishturlapaty/emaha-db5) |
| **EMAHA-DB6** | Grasp / object-interaction | ~12 GB | [db6](https://www.kaggle.com/datasets/anishturlapaty/emaha-db6) |
| **EMAHA-DB7** | 10 subjects × 10 ADLs at **2 paces × 3 arm positions** | ~1 GB | [db7](https://www.kaggle.com/datasets/anishturlapaty/emaha-db7) |

*(Confirm exact subject counts, channels, and labels on each Kaggle page before citing.)* The defining idea:
most EMG datasets fix one condition; EMAHA **deliberately varies** posture, arm position, pace, and load — so
you can test whether a model survives a change in condition, not just whether it memorized one.

## Part 2 — What our papers found

The datasets answer one question: **how much do measurement conditions change sEMG-based ADL classification?**

- **[Impact of Activity Pace and Arm Position on Classification of ADLs](https://ieeexplore.ieee.org/document/10782913/)**
  (EMBC 2024) — using the DB7 design, we showed pace and arm position are **not nuisance details**: they shift
  the signal and change accuracy. Features spanned time, frequency, wavelet, and eigenvalue domains.
- **Fine-ADL Classification Using sEMG under Varying Measurement Conditions** (BIOSIGNALS 2024) — the same idea
  pushed to *fine-grained* activity distinctions.
- **Impact of Measurement Conditions on ADL Classification Using Surface EMG** (ISPA 2023, Rome) — the earlier
  result establishing the effect.

**The through-line:** if you benchmark on a single condition, you overstate your accuracy. The honest test is
*train on one condition, test on another* — and that gap is where EMG systems actually fail in the world.

## Part 3 — Where the field is in 2026

This is what changed since our papers, and why they matter more now, not less.

**Consumer neural interfaces arrived.** Meta's **[Neural Band](https://vrarwiki.com/wiki/Meta_Neural_Band)**
(announced Meta Connect 2025, released Sep 30 2025; the first product from Meta's 2019 CTRL-Labs acquisition,
bundled with Ray-Ban Display glasses at $799) reads wrist sEMG for text entry and gesture control. The
science behind it — Meta's *Nature* 2025 paper,
**[“A generic non-invasive neuromotor interface for human-computer interaction”](https://www.uploadvr.com/meta-semg-wristband-gestures-nature-paper/)**
— is the headline result: trained on ~200,000 participants, it **generalizes across users with no per-person
calibration**. That "works out of the box for a stranger's arm" property is the holy grail EMG spent decades
chasing.

**EMG is going the "foundation model" route.** Large, multi-user datasets (e.g. Meta's *emg2qwerty* typing
corpus) and models trained on them now show **[robust zero-shot cross-user gesture recognition](https://pmc.ncbi.nlm.nih.gov/articles/PMC11459555/)**,
and tiny on-device foundation models like **[TinyMyo](https://arxiv.org/pdf/2512.15729)** are pushing flexible
EMG processing to the edge. The playbook that transformed NLP — scale + pretraining + transfer — is now being
applied to muscle signals.

**The hardware is getting wearable.** The classic blocker was wet gel electrodes. New
**[dry electrodes](https://onlinelibrary.wiley.com/doi/10.1002/smll.202514966)** — micro-textured soft
composites, textile-based, 3D-printed, and **[high-density dry arrays](https://arxiv.org/pdf/2505.14658)** —
are making all-day, motion-tolerant EMG plausible in a consumer band.

**The company landscape:** Meta/CTRL-Labs (AR input), **[Mudra / Wearable Devices](https://mudra-band.com/pages/inside-the-band)**
(neural wristbands to control phones, even EMG-based weight estimation), **Pison**, **[Delsys](https://delsys.com/)**
and **Noraxon** (research-grade systems), plus new form factors like
**[EMG-to-speech necklaces](https://arxiv.org/pdf/2407.21345)** and **[synthetic EMG generation](https://arxiv.org/pdf/2509.23359)**
to fight data scarcity. Applications now span AR/VR input, prosthetics, silent-speech, robotics
teleoperation, and rehabilitation.

## Part 4 — The hard problems (still open)

Here's the honest part, and it's exactly where datasets like EMAHA connect to the frontier:

1. **Cross-user generalization.** EMG is intensely personal — muscle anatomy, skin conductivity, fat, electrode
   placement all differ. Models trained on one set of users degrade on new ones. Meta's whole achievement was
   *reducing* this; it's far from fully solved.
2. **Electrode shift & placement.** Move the band a centimeter, or let the limb move, and the signal shifts.
   Robustness to this is an active research area (data augmentation, spatial normalization, HD arrays).
3. **Long-term, real-world robustness.** Sweat, hydration, motion artifacts, multi-day wear — the lab-to-life
   gap that even Meta flags as unsolved.
4. **Calibration burden.** Every minute a user spends calibrating is friction; the field is racing toward
   zero-calibration, generic models.
5. **Data diversity.** Big, *condition-diverse* datasets are the bottleneck — hence synthetic data and
   large-scale collection efforts.

**Why EMAHA fits here:** condition-varied datasets are a controlled microcosm of problems (2)–(5). If you want
to *measure* whether a model is robust to pace, arm position, or load before you ship it to a stranger's wrist,
you need exactly the kind of labeled-condition data these datasets provide.

## Part 5 — Where it's heading (future work)

- **EMG foundation models + few-shot personalization** — pretrain on massive multi-user data, adapt to a new
  user in seconds via domain adaptation instead of long calibration.
- **Multimodal fusion** — EMG + IMU + vision, so gesture systems use motion and context, not muscle alone.
- **EMG as an input layer for LLMs/agents** — silent typing, intent, and "neural text entry" feeding
  language models; EMG-to-speech for accessibility.
- **Robotics teleoperation & prosthetics** — richer, continuous control (force, not just discrete gestures;
  note Wearable Devices' weight-estimation work).
- **On-device tiny models** — TinyMyo-style edge inference for latency, privacy, and battery.
- **Robustness benchmarks** — the field needs standard *cross-condition / cross-user* evaluations. This is a
  place where an EMAHA-style, condition-labeled dataset directly contributes.

## Conclusion

In two years EMG went from a specialist research signal to the input layer of a shipping consumer product, and
the research playbook flipped from "hand-tuned features on one condition" to "large models pretrained across
hundreds of thousands of users." But the core problem hasn't changed — it's just gotten a bigger spotlight:
**EMG signals refuse to generalize.** Different bodies, shifting electrodes, sweat, and movement all conspire
against the model.

That's the exact problem the EMAHA datasets were built to probe. Studying how pace, arm position, and load
change the signal isn't a footnote to the Meta era — it's a controlled way to measure the robustness that the
Meta era still hasn't fully won. Whether you're building a prosthetic, an AR wristband, or an EMG foundation
model, the question is the same: *does it still work when the condition changes?* If you build something with
these datasets that helps answer that, I'd love to hear about it.

## Links & references

- **Datasets:** [DB4](https://www.kaggle.com/datasets/anishturlapaty/emaha-db4) ·
  [DB5](https://www.kaggle.com/datasets/anishturlapaty/emaha-db5) ·
  [DB6](https://www.kaggle.com/datasets/anishturlapaty/emaha-db6) ·
  [DB7](https://www.kaggle.com/datasets/anishturlapaty/emaha-db7) ·
  [Lab dataset page](https://sites.google.com/view/bio-signal-analysis/emg-datasets)
- **Foundational paper:** [EMAHA-DB1 (arXiv 2301.03325)](https://arxiv.org/abs/2301.03325)
- **Our conditions paper:** [Pace & Arm Position on ADLs, EMBC 2024](https://ieeexplore.ieee.org/document/10782913/)
- **Meta Neural Band / Nature 2025:** [Neural Band overview](https://vrarwiki.com/wiki/Meta_Neural_Band) ·
  [the generic-interface result](https://www.uploadvr.com/meta-semg-wristband-gestures-nature-paper/)
- **Foundation models / big-data EMG:** [TinyMyo (arXiv)](https://arxiv.org/pdf/2512.15729) ·
  [large multi-user zero-shot](https://pmc.ncbi.nlm.nih.gov/articles/PMC11459555/)
- **Dry electrodes:** [micro-textured soft dry electrode (Wiley Small 2026)](https://onlinelibrary.wiley.com/doi/10.1002/smll.202514966) ·
  [high-density dry array (arXiv)](https://arxiv.org/pdf/2505.14658)
- **Other directions:** [EMG-to-speech necklace](https://arxiv.org/pdf/2407.21345) ·
  [synthetic EMG generation](https://arxiv.org/pdf/2509.23359) ·
  [Mudra / Wearable Devices](https://mudra-band.com/pages/inside-the-band) · [Delsys](https://delsys.com/)

## About

I'm **Vidya Sagar Reddy Venna** — I led data collection for EMAHA-DB4–DB7 during my honours research at the
Human Movement Analysis Lab and co-authored the measurement-conditions papers above. Datasets are published by
Anish Turlapaty et al. on Kaggle.

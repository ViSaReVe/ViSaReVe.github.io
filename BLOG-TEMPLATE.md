# Blog Post Template

Copy only the front matter and post body from the example below when creating a new blog post in `_posts/` folder.

**Filename format:** `YYYY-MM-DD-your-post-title.md`

**Example:** `2026-01-20-intro-to-neural-decoding.md`

---

```markdown
---
layout: post
title: "Your Post Title Here"
date: YYYY-MM-DD
categories: [tutorial, research, career, tools]
tags: [tag1, tag2, tag3]
excerpt: "One-line description of your post (shows on blog listing page)"
reading_time: 5
cover: /assets/img/covers/emg-python.svg
cover_theme: peach
card_title: "Short title for the cover"
card_description: "One sentence that invites a reader in."
---

Your intro paragraph goes here. This should hook the reader and explain what they'll learn from this post.

## Section Heading

Your content here. Write naturally in Markdown.

### Subsection

More detailed content under the subsection.

## Formatting Examples

### Text Formatting

This is **bold text** and this is *italic text*.

You can also use ***bold and italic*** together.

### Lists

Bullet list:
- Point 1
- Point 2
- Point 3

Numbered list:
1. First item
2. Second item
3. Third item

### Links

[Link text here](https://example.com)

Link to another post: [Other Post Title]({% post_url 2026-01-10-getting-started-with-emg-signal-processing %})

### Code Blocks

Inline code: `variable_name` or `function_call()`

Python code block:
```python
import numpy as np

def example_function():
    print("Hello, world!")
    return np.array([1, 2, 3])
```

Bash commands:
```bash
pip install numpy scipy matplotlib
```

### Images (if needed)

![Alt text description](/assets/images/your-image.jpg)

Or from external URL:
![Alt text](https://example.com/image.jpg)

### Quotes

> This is a blockquote. Use for highlighting important text or citing others.

### Tables (optional)

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |

### Horizontal Line

Use three dashes for a horizontal divider:

---

## Common Post Structures

### Tutorial Post Structure

```markdown
## Introduction
Brief overview of what you'll teach

## Prerequisites
What readers need to know beforehand

## Step 1: Setup
Installation instructions

## Step 2: Basic Concepts
Core concepts explained

## Step 3: Implementation
Code examples and explanations

## Step 4: Advanced Topics
Optional deeper dive

## Conclusion
Summary and next steps

## Resources
Links to docs, papers, etc.
```

### Research Summary Post Structure

```markdown
## Background
Problem you're solving

## Motivation
Why this matters

## Approach
How you solved it

## Results
What you found

## Implications
What this means

## Future Work
What's next
```

### Career/Reflection Post Structure

```markdown
## Context
Set the scene

## The Experience
Tell your story

## Lessons Learned
What you discovered

## Advice
Tips for others
```

## Tips for Good Blog Posts

1. **Hook readers early:** First paragraph should grab attention
2. **Use headers:** Break content into scannable sections
3. **Code examples:** Show, don't just tell
4. **Be concise:** Respect reader's time
5. **Add context:** Explain why, not just how
6. **Link resources:** Help readers learn more
7. **Proofread:** Check for typos and clarity
8. **Test code:** Ensure code examples actually work

## Post Ideas

- Tutorial: How to do X in Python/MATLAB/etc.
- Project walkthrough: Deep dive into a project you built
- Paper summary: Explain a research paper in simple terms
- Tool review: Pros/cons of a framework or library
- Career reflection: Lessons from an internship or role
- Problem-solving: How you debugged a tricky issue
- Best practices: Tips for better ML workflows
- Comparison: X vs Y - which to use when?

## Publishing Checklist

Before publishing your post:

- [ ] Frontmatter is complete (title, date, excerpt, tags)
- [ ] Filename follows `YYYY-MM-DD-title.md` format
- [ ] Date in frontmatter matches filename date
- [ ] All code blocks are properly closed (three backticks)
- [ ] Links work (click to verify)
- [ ] Images load (if used)
- [ ] Reading time is accurate (word count / 200 = minutes)
- [ ] Proofread for typos and clarity
- [ ] Preview looks good (if testing locally)

## Example Complete Post

```markdown
---
layout: post
title: "5 Tips for Better sEMG Signal Processing"
date: 2026-02-01
categories: [tutorial, research]
tags: [biosignals, emg, signal-processing, tips]
excerpt: "Five practical tips I wish I knew when starting EMG research, from filtering to feature extraction."
reading_time: 4
---

When I started working with surface EMG signals two years ago, I made every mistake in the book. Here are five tips that would have saved me months of frustration.

## 1. Always Visualize Your Raw Data First

Before applying any filters, plot your raw signal. You'd be surprised how many issues you can spot just by looking:

```python
import matplotlib.pyplot as plt

plt.plot(emg_raw)
plt.title('Raw EMG Signal')
plt.show()
```

Look for:
- Saturation (flat tops/bottoms)
- DC offset (signal not centered at zero)
- Power line interference (50/60 Hz hum)

## 2. Don't Over-Filter

Aggressive filtering removes noise but also destroys signal. Start with gentle filters:

```python
from scipy import signal

# Conservative bandpass filter
b, a = signal.butter(4, [20, 450], btype='band', fs=1000)
filtered = signal.filtfilt(b, a, emg_raw)
```

**Pro tip:** Always use `filtfilt()` instead of `filter()` for zero phase distortion.

## 3. Normalize Within Subjects, Not Across

EMG amplitudes vary wildly between people due to electrode placement, skin properties, etc. Always normalize:

```python
# Within each subject
emg_normalized = (emg - emg.min()) / (emg.max() - emg.min())
```

Never compare raw amplitudes across subjects!

## 4. Extract Features in Sliding Windows

Don't compute features over the entire signal. Use overlapping windows:

```python
window_size = 200  # samples
stride = 50  # overlap

for i in range(0, len(emg) - window_size, stride):
    window = emg[i:i+window_size]
    rms = np.sqrt(np.mean(window**2))
    # Process RMS...
```

## 5. Validate on Real Data, Not Synthetic

Synthetic EMG looks nothing like real signals. Always test on actual recordings before deploying.

## Conclusion

These five tips would have saved me months of debugging. Remember: EMG processing is more art than science - there's no one-size-fits-all solution.

What are your EMG processing tips? [Email me](mailto:vvenna@usc.edu) - I'd love to hear them!
```

---

**Remember:** You can edit this post anytime via GitHub web interface. Just go to the file and click "Edit" (pencil icon).

**Questions?** See the main README.md for more help.
```

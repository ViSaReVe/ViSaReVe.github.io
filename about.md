---
layout: page
title: A little more about me
permalink: /about/
---

I'm a Master's student in Electrical and Computer Engineering at the University of Southern California, specializing in Machine Learning and Data Science. My research sits at the intersection of neurotechnology, biosignal processing, and artificial intelligence.

Currently, I work as a graduate researcher at USC's COOR Lab, where I develop ML tools for clinical biomechanics and biosignal processing. My work focuses on making complex data analysis accessible and practical for real-world applications.

## Education

<div class="publication-entry"><h3>University of Southern California</h3><p>M.S. in Electrical and Computer Engineering (ML/DS Track)<br><em>Aug 2024 - May 2026 (expected) · Los Angeles, CA</em></p></div>

<div class="publication-entry"><h3>Indian Institute of Information Technology Sri City</h3><p>B.Tech (Honours) in Electronics and Communications Engineering<br><em>Aug 2020 - May 2024 · Sri City, India</em></p></div>

## Experience

{% for exp in site.data.experience %}
<section class="experience-entry">
<div class="experience-heading"><img src="{{ exp.logo | relative_url }}" alt="" width="40" height="40" loading="lazy"><div><h3><a href="{{ exp.url }}">{{ exp.organization }}</a></h3><p>{{ exp.role }} · {{ exp.period }}</p></div></div>
<ul>{% for highlight in exp.highlights %}<li>{{ highlight }}</li>{% endfor %}</ul>
</section>
{% endfor %}

## Publications

{% for pub in site.data.publications %}
<div class="publication-entry"><h3>{% if pub.link %}<a href="{{ pub.link }}">{{ pub.title }} ↗</a>{% else %}{{ pub.title }}{% endif %}</h3><p>{{ pub.authors }}<br><em>{{ pub.venue }}{% unless pub.venue contains pub.year %} · {{ pub.year }}{% endunless %}</em></p></div>
{% endfor %}

## Projects

Explore the [project collection]({{ '/#projects' | relative_url }}) for selected work in neural decoding, biosignals, and ML systems.

## Technical Skills

{% for group in site.data.skills %}
**{{ group.group }}:** {{ group.items | join: ', ' }}

{% endfor %}

## Beyond Research

When I'm not working on research, I enjoy exploring new technologies, contributing to open-source projects, and staying active. I'm particularly interested in the potential of AI to transform healthcare and make advanced medical technologies more accessible.

I'm currently seeking **full-time ML / signal-processing roles (2026)**, particularly in sensor ML, neurotechnology, or applied-ML positions.

## Contact

Email: [{{ site.author.email }}](mailto:{{ site.author.email }})
GitHub: [{{ site.author.github }}](https://github.com/{{ site.author.github }})
LinkedIn: [{{ site.author.linkedin }}](https://linkedin.com/in/{{ site.author.linkedin }})
Scholar: [Google Scholar](https://scholar.google.com/citations?user={{ site.author.scholar }})

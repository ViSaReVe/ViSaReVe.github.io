---
layout: page
title: A little more about me
permalink: /about/
---

{% assign photo_exists = false %}
{% for static_file in site.static_files %}
  {% if static_file.path == '/assets/photos/profile-about.webp' or static_file.path == '/assets/photos/profile-about.jpg' or static_file.path == '/assets/photos/profile-about.png' %}
    {% assign photo_exists = true %}
    {% assign photo_path = static_file.path %}
  {% endif %}
{% endfor %}
{% if photo_exists %}
<div class="about-photo">
  <img src="{{ photo_path | relative_url }}" alt="Vidya Sagar Reddy Venna" class="profile-img">
</div>
{% else %}
<!-- Place a photo at assets/photos/profile-about.webp to render it here -->
{% endif %}

I am an ML engineer specializing in neurotechnology, biosignal processing, and artificial intelligence. I build end-to-end systems that transform raw streams, from muscles, brains, and sensors, into actionable, measurable insights.

I graduated with my M.S. in Electrical and Computer Engineering (ML & Data Science) from the University of Southern California in May 2026. I am currently on post-completion OPT, based in Los Angeles, CA, and actively seeking full-time ML, signal-processing, and ML-systems roles.

## Education

<div class="publication-entry"><h3>University of Southern California</h3><p>M.S. in Electrical and Computer Engineering (ML/DS Track)<br><em>Aug 2024 - May 2026 · Los Angeles, CA</em></p></div>

<div class="publication-entry"><h3>Indian Institute of Information Technology Sri City</h3><p>B.Tech (Honours) in Electronics and Communications Engineering<br><em>Aug 2020 - May 2024 · Sri City, India</em></p></div>

## Experience

{% for exp in site.data.experience %}
<section class="experience-entry">
<div class="experience-heading">{% assign logo = exp.logo | append: "" | strip %}{% if logo != "" %}<img src="{{ exp.logo | relative_url }}" alt="" width="40" height="40" loading="lazy">{% endif %}<div><h3>{% assign org_url = exp.url | append: "" | strip %}{% if org_url != "" %}<a href="{{ exp.url }}">{{ exp.organization }}</a>{% else %}{{ exp.organization }}{% endif %}</h3><p>{{ exp.role }} · {{ exp.period }}</p></div></div>
{% assign summary = exp.summary | append: "" | strip %}{% if summary != "" %}<p class="experience-summary">{{ summary }}</p>{% endif %}
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

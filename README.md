# Vi Sa Re Ve — portfolio

A personal portfolio built with Jekyll and hosted on GitHub Pages. The design uses a short introduction, animated signal banner, illustrated project covers, and separate project and writing pages. Everything is generated as static HTML, CSS, and JavaScript.

## Local preview

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4010
```

Open http://127.0.0.1:4010. Changes to content and styles rebuild automatically. Restart the server after editing `_config.yml`.

```sh
bundle exec jekyll build
```

The generated site is in `_site/`, which is ignored by Git. The current local Gemfile uses Jekyll 4.3; templates and collections also use features supported by GitHub Pages' native Jekyll 3.10. No additional build workflow or server backend is required. Keep the repository's existing Pages publishing configuration; merge reviewed changes into its configured publishing branch when ready to publish.

## Content locations

| Content | Location |
| --- | --- |
| Homepage introduction, affiliations, highlights | `index.html` |
| Project metadata and stories | `_projects/*.md` |
| Blog posts | `_posts/YYYY-MM-DD-title.md` |
| Full biography and education | `about.md` |
| Experience, publications, skills | `_data/*.yml` |
| Email and social handles | `_config.yml` |
| Styles and responsive layouts | `assets/css/main.scss` |
| Original cover illustrations | `assets/img/covers/` |
| Banner illustration | `_includes/signal-banner.html` |
| Animation controls | `assets/js/site.js` |

Projects now live in the Jekyll collection, replacing the former `_data/projects.yml` list. Each project produces `/projects/filename/`. Blog URLs stay `/posts/title/`; the writing index is `/posts/`. The `/about.html` and `/posts.html` aliases remain usable.

## Add or edit a project

Create `_projects/your-project.md`:

```yaml
---
layout: project
title: Your full project title
card_title: Short cover title
subtitle: One sentence about what it does.
description: One sentence about what it does.
year: "2026"
period: "2026"
institution: Personal project
category: ML systems
order: 7
wide: true
cover: /assets/img/covers/your-project.webp
cover_alt: A description of the project image.
tags: [Python, PyTorch]
github: https://github.com/your-account/your-project
---

## The project

What you made and why.

## How it works

Explain your approach, with images or clips.

## What I learned

The results, limitations, and decisions worth sharing.
```

`order` controls display order. `wide: true` spans three desktop grid columns; false spans two. Alternate 3/2 then 2/3 for the album layout. Mobile uses one column. The existing illustrations are conceptual artwork, not project screenshots or measured data. Replace them with your own images when available. Each original illustration has a `cover_caption` in its project front matter. Update or remove it when replacing the cover with actual photography/screenshots.

Use a 1200×800 image or similar resolution. Cards crop with `object-fit: cover`, so keep important imagery away from edges and the bottom title label. Prefer compressed WebP/AVIF or JPEG photographs and SVG for diagrams. No need to create a whole new page template.

## Add images and video

Place assets under `assets/img/projects/` or `assets/video/`. Add a `media` list in a project's front matter:

```yaml
media:
  - type: image
    src: /assets/img/projects/my-project/results.webp
    alt: Describe what the image shows.
    width: 1200
    height: 800
    caption: Explain the figure.
  - type: video
    src: /assets/video/my-project-demo.mp4
    poster: /assets/img/projects/my-project/poster.webp
    label: Project demo
    caption: A short demonstration of the system.
    # captions: /assets/video/my-project-captions.vtt
  - type: youtube
    id: YOUR_VIDEO_ID
    label: Project walkthrough
    caption: A longer walkthrough.
```

Local videos use controls, inline playback, and metadata-only preload. Add WebVTT captions when audio conveys information. YouTube uses its privacy-enhanced domain and lazy loading. No remote video is included until you supply its ID. Keep local clips small and compressed; use an embed for longer footage. The initial portfolio includes the animated SVG banner, not fabricated project footage.

For inline placement inside a post or project body:

```liquid
{% include media.html media=page.media[0] %}
```

Project pages also render their entire `media` list after the story; remove that loop from `_layouts/project.html` if choosing inline-only placement.

## Add a blog post

Create `_posts/YYYY-MM-DD-your-title.md` using `BLOG-TEMPLATE.md`. The body is normal Markdown. Include optional `cover`, `cover_theme` (`sage` or `peach`), `card_title`, and `card_description` for the homepage card. Keep existing post filenames/permalinks when editing to preserve incoming links.

## Design and accessibility

- Fraunces headings, Inter body, Space Mono metadata, with system fallbacks.
- Warm paper background, white angled sections, alternating project cover widths.
- Native links, semantic landmarks, keyboard focus, and a skip link.
- Banner pause/play control; reduced-motion preference disables animation and hides the unnecessary control.
- Tables and code scroll within their containers on narrow screens.
- No newsletter backend or placeholder forms. Email, social links, résumé, and RSS are functional.

The live site stays at https://visareve.github.io. Local changes are not published until they reach the repository's configured Pages source.

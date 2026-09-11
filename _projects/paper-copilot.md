---
institution: "Personal Project"
category: "LLM / RAG"
metric: "0.88 Doc-Hit@5"
metric_label: "hybrid RRF, MRR 0.820 — n=59, bootstrap 95% CI"
tags: ["RAG", "Retrieval Eval", "FastAPI", "Python"]
featured: true
layout: "project"
title: "Paper Copilot"
card_title: "Paper Copilot"
subtitle: "A literature-review companion. Entirely offline."
description: "A literature-review companion. Entirely offline."
year: "2026"
period: "2026"
order: 1
wide: true
cover: "/assets/img/covers/paper-copilot.svg"
cover_caption: "Concept illustration · Paper Copilot"
cover_alt: "Illustrated research papers connected by citation paths."
---

## The project

Local literature-review copilot — PDF on the left, chat on the right, every answer carrying (paper, page) citations and refusing when evidence is weak. Runs fully offline: no API keys, no GPU. Evaluated properly on 39 papers and 59 hand-reviewed questions with bootstrap CIs and paired McNemar tests, which showed the retrievers are statistically tied (TF-IDF vs hybrid, p = 1.000) and that LLM query-reformulation actively degraded results at 2x latency — built, measured, and left off by default.

## At a glance

**0.88 Doc-Hit@5** — hybrid RRF, MRR 0.820 — n=59, bootstrap 95% CI.

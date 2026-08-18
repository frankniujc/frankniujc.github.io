---
author: Jingcheng Niu
date: 2026-08-17
title: "Many Circuits, One Mechanism: Input Variation and Evaluation Granularity in Circuit Discovery"
featured: true
draft: false
venue: TMLR 2026
note: Featured Certification
paper: https://arxiv.org/abs/2606.06267
paper_linkname: arXiv

authors:
  - Alireza Bayat Makou
  - Jingcheng Niu
  - Subhabrata Dutta
  - Iryna Gurevych

tags:
  - interpretability
  - circuit discovery
---

## TL;DR

**Structural differences between discovered circuits are not sufficient evidence for distinct mechanisms.** Varying input statistics while holding the task fixed produces circuits with apparent specialization — a pattern we term *phantom specialization* — that does not correspond to functional differences: across 75 circuits extracted from five Pythia models, band-specific edges transfer broadly across frequency bands, a shared core recovers ≥99% of circuit performance, and causal interchange interventions confirm that the internal representations are interchangeable. Discovery algorithms appear to sample from an equivalence class of valid subgraphs rather than recovering a unique mechanism; exposing this requires edge-level evaluation and cross-condition transfer tests.

## How to Cite
```bibtex
@article{makou2026many,
    title={Many Circuits, One Mechanism: Input Variation and Evaluation Granularity in Circuit Discovery},
    author={Alireza Bayat Makou and Jingcheng Niu and Subhabrata Dutta and Iryna Gurevych},
    journal={Transactions on Machine Learning Research},
    issn={2835-8856},
    year={2026},
    url={https://openreview.net/forum?id=Ur42Xx1QPv},
    note={Featured Certification}
}
```

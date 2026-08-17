---
author: Jingcheng Niu
date: 2023-07-01
title: Discourse Information for Document-Level Temporal Dependency Parsing
featured: false
draft: false
venue: CODI 2023 @ ACL
paper: https://aclanthology.org/2023.codi-1.10/
paper_linkname: ACL Anthology
code: https://github.com/frankniujc/tdg-discourse

authors:
  - Jingcheng Niu
  - Victoria Ng
  - Erin E. Rees
  - Simon De Montigny
  - Gerald Penn

tags:
  - temporal dependency parsing
  - discourse
---

## TL;DR

We examine whether discourse information helps document-level temporal dependency parsing. Unexpectedly, **simple sentence-position information — encoded with our novel sentence-position embedding — outperforms high-level discourse profiling features**, perhaps because it does not rely on noisy model-generated inputs, and our system surpasses the previous state-of-the-art TDG parsers. We argue that discourse analysis should inform temporal information extraction more deeply than as just another input feature.

## How to Cite
```bibtex
@inproceedings{niu-etal-2023-discourse,
  title = "Discourse Information for Document-Level Temporal Dependency Parsing",
  author = "Niu, Jingcheng and
   Ng, Victoria and
   Rees, Erin and
   De Montigny, Simon and
   Penn, Gerald",
  booktitle = "Proceedings of the 4th Workshop on Computational Approaches to Discourse (CODI 2023)",
  month = jul,
  year = "2023",
  address = "Toronto, Canada",
  publisher = "Association for Computational Linguistics",
  url = "https://aclanthology.org/2023.codi-1.10/",
  doi = "10.18653/v1/2023.codi-1.10",
  pages = "82--88"
}
```

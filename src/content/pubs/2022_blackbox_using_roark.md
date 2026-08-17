---
author: Jingcheng Niu
date: 2022-12-28
title: Using Roark-Hollingshead Distance to Probe BERT's Syntactic Competence
featured: false
draft: false
venue: BlackboxNLP 2022 @ EMNLP
paper: https://aclanthology.org/2022.blackboxnlp-1.27/
paper_linkname: ACL Anthology
code: https://github.com/frankniujc/rh_prob

authors:
  - Jingcheng Niu
  - Wenjie Lu
  - Eric Corlett
  - Gerald Penn
tags:
  - language model
  - syntax
  - fact
---

## TL;DR

**RH Probe, an encoder–decoder probing architecture built on Roark–Hollingshead distance, finds strong evidence of important syntactic information in BERT — but that information alone appears not to be enough to reproduce syntax in its entirety.** We also prove Roark and Hollingshead's (2008) conjecture that RH distance is a sufficient encoding of unlabelled binary syntactic trees, and show that perturbed masking's advantage over a right-branching baseline is too inconclusive to settle whether BERT "knows" syntax.

## How to Cite
```bibtex
@inproceedings{niu-etal-2022-using,
  title = "Using {Roark}-{Hollingshead} Distance to Probe {BERT}'s Syntactic Competence",
  author = "Niu, Jingcheng and
   Lu, Wenjie and
   Corlett, Eric and
   Penn, Gerald",
  booktitle = "Proceedings of the Fifth BlackboxNLP Workshop on Analyzing and Interpreting Neural Networks for NLP",
  month = dec,
  year = "2022",
  address = "Abu Dhabi, United Arab Emirates",
  publisher = "Association for Computational Linguistics"
}
```

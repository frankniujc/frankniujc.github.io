---
author: Jingcheng Niu
date: 2026-09-25
title: "Farther the Shift, Sparser the Representation: Analyzing OOD Mechanisms in LLMs"
featured: false
draft: false
venue: NeurIPS 2026
paper: https://arxiv.org/abs/2603.03415
paper_linkname: arXiv
code: https://github.com/MingyuJ666/sparsityLLM

authors:
  - Mingyu Jin
  - Yutong Yin
  - Jingcheng Niu
  - Qingcheng Zeng
  - Wujiang Xu
  - Mengnan Du
  - Wei Cheng
  - Zhaoran Wang
  - Tianlong Chen
  - Dimitris N. Metaxas

tags:
  - interpretability
  - out-of-distribution
  - representation sparsity
  - in-context learning
---

## TL;DR

**The farther the input shifts out of distribution, the sparser the LLM's last hidden states become.** This sparsity–difficulty relation holds whether difficulty comes from harder reasoning questions, longer contexts, or more answer choices, and across diverse models and domains. Controlled analyses and a learning-dynamics explanation show the sparsity is an adaptive mechanism for stabilising reasoning under OOD, not an accident. Building on this, Sparsity-Guided Curriculum ICL (SG-ICL) uses representation sparsity to schedule few-shot demonstrations, yielding considerable gains.

## How to Cite
```bibtex
@inproceedings{jin2026farther,
  title     = {Farther the Shift, Sparser the Representation: Analyzing {OOD} Mechanisms in {LLM}s},
  author    = {Jin, Mingyu and Yin, Yutong and Niu, Jingcheng and Zeng, Qingcheng and Xu, Wujiang and Du, Mengnan and Cheng, Wei and Wang, Zhaoran and Chen, Tianlong and Metaxas, Dimitris N.},
  booktitle = {Advances in Neural Information Processing Systems (NeurIPS)},
  year      = {2026},
}
```

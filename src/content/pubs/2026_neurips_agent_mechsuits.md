---
author: Jingcheng Niu
date: 2026-09-25
title: "Agent MechSuits: Mechanistic Subspace Safety Steering for Multi-Turn CLI Agents"
featured: false
draft: false
venue: NeurIPS 2026
paper: https://arxiv.org/abs/2606.22673
paper_linkname: arXiv

authors:
  - Weidi Luo
  - Qiming Zhang
  - Yihao Quan
  - Mingyu Jin
  - Jie Cai
  - Chaowei Xiao
  - Jingcheng Niu
  - Zhen Xiang

tags:
  - AI safety
  - LLM agents
  - representation steering
  - mechanistic interpretability
---

## TL;DR

**Agent MechSuits is a white-box defense that detects and mitigates unsafe behaviour of CLI agents at runtime, directly in the model's representation space.** Rather than relying on external guardrails, it intervenes within a low-dimensional (10-d) safety subspace during multi-turn execution. We also introduce the Mechanistic Agent Safety benchmark: annotated multi-turn trajectories across 194 tasks and three model families. MechSuits achieves strong detection performance and substantially reduces harmful agent actions.

## How to Cite
```bibtex
@inproceedings{luo2026mechsuits,
  title     = {Agent MechSuits: Mechanistic Subspace Safety Steering for Multi-Turn {CLI} Agents},
  author    = {Luo, Weidi and Zhang, Qiming and Quan, Yihao and Jin, Mingyu and Cai, Jie and Xiao, Chaowei and Niu, Jingcheng and Xiang, Zhen},
  booktitle = {Advances in Neural Information Processing Systems (NeurIPS)},
  year      = {2026},
}
```

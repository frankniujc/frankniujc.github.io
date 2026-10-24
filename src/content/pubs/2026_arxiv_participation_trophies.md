---
author: Jingcheng Niu
date: 2026-10-01
title: "Probe with Participation Trophies: Random-Reward RL as a Probe of LLM Capability"
featured: false
draft: false
venue: arXiv preprint
paper: https://arxiv.org/abs/2610.01066
paper_linkname: arXiv

authors:
  - Yu Mao
  - Lei Yu
  - Zining Zhu
  - Yusheng Zheng
  - Haohang Li
  - Freda Shi
  - Yutong Yin
  - Zhaoran Wang
  - Jingcheng Niu

tags:
  - reinforcement learning
  - probing
  - language model
---

## TL;DR

**Spurious-reward RL probes a model's reachability: what further training can attain from its current state.** Rather than attributing random-reward gains to specific RL mechanisms or data contamination, we connect the spurious-reward paradox to reachability and propose random-reward RL as a probing tool. Across OLMo checkpoints, two models with the same 3.5% baseline reach 8.5% and 55% under correct-answer rewards, and training splits into three phases: early pre-training with minimal RL gains, later pre-training where correct rewards work, and mid-training where even random rewards bring substantial improvements. Because the reward carries no information, this sidesteps the long-standing probing question of whether success reflects what the model knows or what the probe learns.

## How to Cite
```bibtex
@article{mao2026participation,
  title   = {Probe with Participation Trophies: Random-Reward {RL} as a Probe of {LLM} Capability},
  author  = {Mao, Yu and Yu, Lei and Zhu, Zining and Zheng, Yusheng and Li, Haohang and Shi, Freda and Yin, Yutong and Wang, Zhaoran and Niu, Jingcheng},
  journal = {arXiv preprint arXiv:2610.01066},
  year    = {2026},
}
```

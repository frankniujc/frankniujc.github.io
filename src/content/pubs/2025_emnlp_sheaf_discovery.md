---
author: Jingcheng Niu
date: 2025-09-02
title: "Sheaf Discovery with Joint Computation Graph Pruning and Flexible Granularity"
featured: false
draft: false
venue: EMNLP 2025
paper: https://aclanthology.org/2025.emnlp-main.446/
paper_linkname: ACL Anthology

authors:
  - Lei Yu*
  - Jingcheng Niu*
  - Zining Zhu
  - Xi Chen
  - Gerald Penn

tags:
  - language model
  - circuit discovery
---

## TL;DR

**DiscoGP extracts *sheaves*: self-contained modular units of a language model that extend circuits by pruning not only the edges of the computation graph but also the weight parameters themselves.** Across a range of linguistic and reasoning tasks, the discovered sheaves preserve 93–100% of the model's task performance while comprising only 1–7% of the original weights and connections, and they exhibit better modularity and functional fidelity than previously identified circuits.

## How to Cite
```bibtex
@inproceedings{yu-etal-2025-sheaf,
    title = "Sheaf Discovery with Joint Computation Graph Pruning and Flexible Granularity",
    author = "Yu, Lei  and
      Niu, Jingcheng  and
      Zhu, Zining  and
      Chen, Xi  and
      Penn, Gerald",
    editor = "Christodoulopoulos, Christos  and
      Chakraborty, Tanmoy  and
      Rose, Carolyn  and
      Peng, Violet",
    booktitle = "Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing",
    month = nov,
    year = "2025",
    address = "Suzhou, China",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2025.emnlp-main.446/"
}
```

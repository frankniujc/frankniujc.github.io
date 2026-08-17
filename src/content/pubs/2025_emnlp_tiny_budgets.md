---
author: Jingcheng Niu
date: 2025-09-02
title: "Tiny Budgets, Big Gains: Parameter Placement Strategy in Parameter Super-Efficient Fine-Tuning"
featured: false
draft: false
venue: EMNLP 2025
paper: https://aclanthology.org/2025.emnlp-main.321/
paper_linkname: ACL Anthology

authors:
  - Jinman Zhao
  - Xueyan Zhang
  - Jiaru Li
  - Jingcheng Niu
  - Yulan Hu
  - Erxue Min
  - Gerald Penn

tags:
  - parameter-efficient fine-tuning
  - language model
---

## TL;DR

**FoRA-UA achieves state-of-the-art performance using only 1–5% of standard LoRA's parameters.** Two insights make this possible: fix-sized sparse frequency representations approximate small matrices more accurately, and inserting a smaller intermediate representation lowers the construction error of approximating larger matrices. We validate FoRA-UA across natural language understanding, generation, instruction tuning, and image classification, demonstrating strong generalisation and robustness under extreme compression.

## How to Cite
```bibtex
@inproceedings{zhao-etal-2025-tiny,
    title = "Tiny Budgets, Big Gains: Parameter Placement Strategy in Parameter Super-Efficient Fine-Tuning",
    author = "Zhao, Jinman  and
      Zhang, Xueyan  and
      Li, Jiaru  and
      Niu, Jingcheng  and
      Hu, Yulan  and
      Min, Erxue  and
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
    url = "https://aclanthology.org/2025.emnlp-main.321/",
    doi = "10.18653/v1/2025.emnlp-main.321"
}
```

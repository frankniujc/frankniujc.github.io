---
author: Jingcheng Niu
date: 2022-05-01
title: Does BERT Rediscover a Classical NLP Pipeline?
featured: false
draft: false
venue: "COLING 2022"
note: "oral"
paper: https://aclanthology.org/2022.coling-1.278/
paper_linkname: ACL Anthology
code: https://github.com/frankniujc/gridloc_probe

authors:
  - Jingcheng Niu
  - Wenjie Lu
  - Gerald Penn

tags:
  - language model
  - syntax
  - fact
---

## TL;DR

Does BERT store surface knowledge in its bottom layers, syntactic knowledge in its middle layers, and semantic knowledge in its upper layers? **Re-examining Jawahar et al. (2019) and Tenney et al.'s (2019) probes, we find that this pipeline-like separation lacks conclusive empirical support.** BERT's structure is linguistically grounded, but in a way more nuanced than layers alone can explain: our novel probe, GridLoc, also takes into account token positions, training rounds, and random seeds, and detects other, stronger regularities suggesting that layer depth may not be the preferred mode of explanation for BERT's inner workings.

![](/research/coling2022/architecture.png)

## How to Cite
```bibtex
@inproceedings{niu-etal-2022-bert,
    title = "Does {BERT} Rediscover a Classical {NLP} Pipeline?",
    author = "Niu, Jingcheng  and
      Lu, Wenjie  and
      Penn, Gerald",
    booktitle = "Proceedings of the 29th International Conference on Computational Linguistics",
    month = oct,
    year = "2022",
    address = "Gyeongju, Republic of Korea",
    publisher = "International Committee on Computational Linguistics"
}

```

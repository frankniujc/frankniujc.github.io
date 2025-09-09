---
author: Jingcheng Niu
date: 2022-05-01
title: Does BERT Rediscover a Classical NLP Pipeline?
slug: coling2022
featured: true
draft: false
venue: "COLING 2022"
note: "oral"
paper: https://aclanthology.org/2022.coling-1.278/
paper_linkname: ACL Anthology
code: https://github.com/frankniujc/gridloc_probe
poster: papers/blackbox2022/niu2022rh_poster.pdf

authors:
  - Jingcheng Niu
  - Wenjie Lu
  - Gerald Penn

tags:
  - language model
  - syntax
  - fact
---

**Abstract**: Does BERT store surface knowledge in its bottom layers, syntactic knowledge in its middle layers, and semantic knowledge in its upper layers? In re-examining Jawahar et al. (2019) and Tenney et al.'s (2019) probes into the structure of BERT, we have found that the pipeline-like separation that they were seeking lacks conclusive empirical support. BERT's structure is, however, linguistically grounded, although perhaps in a way that is more nuanced than can be explained by layers alone. We introduce a novel probe, called GridLoc, through which we can also take into account token positions, training rounds, and random seeds. Using GridLoc, we are able to detect other, stronger regularities that suggest that pseudo-cognitive appeals to layer depth may not be the preferred mode of explanation for BERT's inner workings.

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
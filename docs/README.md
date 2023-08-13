---
pageClass: home-page
# some data for the components

name: Weihuang Wen (温伟煌)
profile: /dinosaur.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/bertrandwen
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com/in/weihuang-wen-58134b141/
  - title: instagram
    icon: "/icons/instagram-mono.svg"
    link: https://www.instagram.com/mark2xwen/

bio: A programmer for the fun of it.
email: wenwh32@gmail.com
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I am now a research assistant in [The Chinese University of Hong Kong, Shenzhen](https://www.cuhk.edu.cn/) with [Prof.Yu](https://mypage.cuhk.edu.cn/academics/yutianshu/).
Before this, I worked as an engineer in [Shenzhen Health Development Research and Data Management Center](http://wjw.sz.gov.cn/jyzx/).

## Interests

- Machine Learning for Boolean Satisfiability Problem (SAT)
- Machine Learning for graph
- AI for Solver

## Education & Experiences

- [**The Chinese University of Hong Kong, Shenzhen**](https://www.cuhk.edu.cn/), research assistant with [Prof.Yu](https://mypage.cuhk.edu.cn/academics/yutianshu/)<br/>
Apr. 2022 - Now
- [**Shenzhen Health Development Research and Data Management Center**](http://wjw.sz.gov.cn/jyzx/), engineer<br/>
Dec. 2021 - Apr. 2022
- [**Southen University of Science and Technology**](https://sustech.edu.cn/), research assistant with [Prof.Wang](https://cse.sustech.edu.cn/faculty/~wangqi/)<br/>
Mar. 2021 - Nov. 2021
- [**Yimian Network Technology**](https://www.yimian.com.cn/), algorithm engineer<br/>
July 2020 - Feb. 2021
- [**Harbin Institute of Technology (Joint Master Program with SUSTech)**](https://www.hit.edu.cn/), MEng under [Prof.Wang](https://cse.sustech.edu.cn/faculty/~wangqi/)<br/>
Sept. 2018 - July 2020
- [**Southen University of Science and Technology**](https://sustech.edu.cn/), BEng<br/>
Sept. 2014 - July 2018

## Selected Projects

[→ Full list](/projects/)

<ProjectCard hideBorder=true>

  **1. A steganography scheme based on adversarial examples (master thesis)**

  In this work, we regard the adversarial nature of the adversarial
  examples itself as information, which can be decoded by the specific model only.

  [[demo](https://youtu.be/tQftH1gJRzA)]

</ProjectCard>

<ProjectCard hideBorder=true>

  **2. Multi-task Learning for Aspect-based Sentiment Analysis (bachelor thesis)**

  This work proposes a deep multi-task learning framework for aspect term extraction (ATE). Furthermore, it presents a novel way to combines aspect term extraction and aspect sentiment classification into an individual task, which can avoid the error propagation from the pipeline approach.

  [[demo](https://youtu.be/Ei56KQ2As-8)]

</ProjectCard>

<ProjectCard hideBorder=true>

  **3. ServingAgent**

  ServingAgent is designed as a middleware for model serving between web server and model server to help the server improve the GPU utilization then speedup online inference. 
  
  [[code](https://github.com/HughWen/ServingAgent)]

</ProjectCard>

<ProjectCard hideBorder=true>

  **4. ServingTemplate**
  
  ServingTemplate is a tool to auto gereate the model serving project template.

  [[code](https://github.com/HughWen/ServingTemplate)]

</ProjectCard>

<ProjectCard hideBorder=true>

  **5. MagicComment**
  
  MagicComment is a Visual Studio Code extension, which will comment the uncomment part and uncomment the comment part when the selection content contains both of them.

  [[code](https://github.com/HughWen/magic-comment)]

</ProjectCard>

## Awards & Honors

### Scholarship

- **University Scholarship**, SUSTech 2018 – 2019
- **College Student Start-up Scholarship**, SUSTech 2014 – 2017

## Skills

- **Language**: Python, Javascript, Go, Java, C/C++
- **Tool**: Git, Docker, Kubernetes, etc.

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>

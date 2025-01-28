(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{358:function(e,t,r){},392:function(e,t,r){"use strict";r(358)},408:function(e,t,r){"use strict";r.r(t);r(392);var n=r(54),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("ProfileSection",{attrs:{frontmatter:e.$page.frontmatter}}),e._v(" "),r("h2",{attrs:{id:"about-me"}},[e._v("About Me")]),e._v(" "),r("p",[e._v("I am now a second-year phd candidate in "),r("a",{attrs:{href:"https://www.cuhk.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Chinese University of Hong Kong, Shenzhen (CUHKSZ)"),r("OutboundLink")],1),e._v(", advised by "),r("a",{attrs:{href:"https://mypage.cuhk.edu.cn/academics/yutianshu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prof.Tianshu Yu"),r("OutboundLink")],1),e._v(". Before that, I received my BEng and MEng in Computer Science from the "),r("a",{attrs:{href:"https://sustech.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Southern University of Science and Technology (SUSTech)"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://www.hit.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Harbin Institute of Technology (Joint Master Program with SUSTech)")]),r("OutboundLink")],1),e._v(", advised by "),r("a",{attrs:{href:"https://cse.sustech.edu.cn/faculty/~wangqi/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prof.Qi Wang"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"interests"}},[e._v("Interests")]),e._v(" "),r("ul",[r("li",[e._v("Machine Learning for Boolean Satisfiability Problem (SAT)\n"),r("ul",[r("li",[e._v("Industrial SAT instance generation")]),e._v(" "),r("li",[e._v("Learning-aided SAT solver")])])]),e._v(" "),r("li",[e._v("Machine Learning for Combinatorial Optimization")])]),e._v(" "),r("h2",{attrs:{id:"publications"}},[e._v("Publications")]),e._v(" "),r("ProjectCard",{attrs:{hideBorder:"true"}},[r("p",[r("strong",[e._v("HyperPLR: Hypergraph Generation through Projection, Learning, and Reconstruction")])]),e._v(" "),r("p",[r("em",[e._v("ICLR 2025")])]),e._v(" "),r("p",[e._v("Hypergraphs are essential in modeling higher-order complex networks, excelling in representing group interactions within real-world contexts. This is particularly evident in collaboration networks, where they facilitate the capture of groupwise polyadic patterns, extending beyond traditional pairwise dyadic interactions. The use of hypergraph generators, or generative models, is a crucial method for promoting and validating our understanding of these structures. If such generators accurately replicate observed hypergraph patterns, it reinforces the validity of our interpretations. In this context, we introduce a novel hypergraph generative paradigm, "),r("strong",[e._v("HyperPLR")]),e._v(", encompassing three phases: Projection, Learning, and Reconstruction. Initially, the hypergraph is projected onto a weighted graph. Subsequently, the model learns this graph's structure within a latent space, while simultaneously computing a distribution between the hyperedge and the projected graph. Finally, leveraging the learned model and distribution, HyperPLR generates new weighted graphs and samples cliques from them. These cliques are then used to reconstruct new hypergraphs by solving a specific clique cover problem. We have evaluated HyperPLR on existing real-world hypergraph datasets, which consistently demonstrate superior performance and validate the effectiveness of our approach.")]),e._v(" "),r("p",[e._v("["),r("a",{attrs:{href:"https://openreview.net/forum?id=TYnne6Pa35",target:"_blank",rel:"noopener noreferrer"}},[e._v("paper"),r("OutboundLink")],1),e._v("]")])]),e._v(" "),r("ProjectCard",{attrs:{hideBorder:"true"}},[r("p",[r("strong",[e._v("SAT-LLL: Lovász Local Lemma for SAT")])]),e._v(" "),r("p",[r("em",[e._v("(preprint)")])]),e._v(" "),r("p",[e._v("In this paper, we introduce "),r("strong",[e._v("SAT-LLL")]),e._v(", a tool that applies LLL to the Boolean Satisfiability (SAT) problem.\nThe SAT-LLL consists of an instance generator that produces formulas under the LLL condition (in the local lemma regime), an algorithm that decides if a given SAT instance is in the local lemma regime, and a solver that can search for solutions or uniformly sample solutions in the local lemma regime.\nOverall, SAT-LLL is a valuable tool bridging the Lovász Local Lemma and the SAT problem by simplifying the simulation and experimentation of future research. Being a valuable tool for researchers and practitioners, SAT-LLL offers a novel approach to studying SAT problems from an LLL perspective.")]),e._v(" "),r("p",[e._v("["),r("a",{attrs:{href:"https://github.com/opensat/SATLLL",target:"_blank",rel:"noopener noreferrer"}},[e._v("code"),r("OutboundLink")],1),e._v("]")])]),e._v(" "),r("h2",{attrs:{id:"selected-projects"}},[e._v("Selected Projects")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/projects/"}},[e._v("→ Full list")])],1),e._v(" "),r("ProjectCard",{attrs:{hideBorder:"true"}},[r("p",[r("strong",[e._v("1. A steganography scheme based on adversarial examples (master thesis)")])]),e._v(" "),r("p",[e._v("In this work, we propose a friendly application constructed by adversarial examples: a steganography scheme based on adversarial examples.\nIn this scheme, we regard the adversarial nature of the adversarial examples itself as information, which can be decoded by the specific model only.")]),e._v(" "),r("p",[e._v("["),r("a",{attrs:{href:"https://youtu.be/tQftH1gJRzA",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo"),r("OutboundLink")],1),e._v("]")])]),e._v(" "),r("ProjectCard",{attrs:{hideBorder:"true"}},[r("p",[r("strong",[e._v("2. Multi-task Learning for Aspect-based Sentiment Analysis (bachelor thesis)")])]),e._v(" "),r("p",[e._v("This work proposes a deep multi-task learning framework for aspect term extraction (ATE).\nFurthermore, it presents a novel way to combines aspect term extraction and aspect sentiment classification into an individual task, which can avoid the error propagation from the pipeline approach.")]),e._v(" "),r("p",[e._v("["),r("a",{attrs:{href:"https://youtu.be/Ei56KQ2As-8",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo"),r("OutboundLink")],1),e._v("]")])]),e._v(" "),r("ProjectCard",{attrs:{hideBorder:"true"}},[r("p",[r("strong",[e._v("3. ServingAgent")])]),e._v(" "),r("p",[e._v("ServingAgent is designed as a middleware for model serving between web server and model server to help the server improve the GPU utilization then speedup online inference.")]),e._v(" "),r("p",[e._v("["),r("a",{attrs:{href:"https://github.com/markwwen/ServingAgent",target:"_blank",rel:"noopener noreferrer"}},[e._v("code"),r("OutboundLink")],1),e._v("]")])]),e._v(" "),r("ProjectCard",{attrs:{hideBorder:"true"}},[r("p",[r("strong",[e._v("4. ServingTemplate")])]),e._v(" "),r("p",[e._v("ServingTemplate is a tool to auto gereate the model serving project template.")]),e._v(" "),r("p",[e._v("["),r("a",{attrs:{href:"https://github.com/markwwen/ServingTemplate",target:"_blank",rel:"noopener noreferrer"}},[e._v("code"),r("OutboundLink")],1),e._v("]")])]),e._v(" "),r("h2",{attrs:{id:"awards-honors"}},[e._v("Awards & Honors")]),e._v(" "),r("h3",{attrs:{id:"scholarship"}},[e._v("Scholarship")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("University Scholarship")]),e._v(", SUSTech 2018 – 2019")]),e._v(" "),r("li",[r("strong",[e._v("College Student Start-up Scholarship")]),e._v(", SUSTech 2014 – 2017")])]),e._v(" "),r("h2",{attrs:{id:"skills"}},[e._v("Skills")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Language")]),e._v(": Python, Javascript, Go, Java, C/C++")]),e._v(" "),r("li",[r("strong",[e._v("Tool")]),e._v(": Git, Docker, Kubernetes, etc.")])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);
---
description: "AlphaMapleSAT (AMS): an MCTS-based cube-and-conquer SAT solver with deductive feedback that outperforms March on hard Kochen–Specker instances"
---

# AlphaMapleSAT: An MCTS-based Cube-and-Conquer SAT Solver for Hard Combinatorial Problems

<style>
  /* subtle animations and nicer buttons just for this page */
  @keyframes floatY { 0%{transform: translateY(0)} 50%{transform: translateY(-6px)} 100%{transform: translateY(0)} }
  @keyframes fadeUp { from{opacity:0; transform: translateY(8px)} to{opacity:1; transform: translateY(0)} }
  .fade-up { opacity:0; animation: fadeUp 600ms ease-out 60ms both; }
  .float { animation: floatY 6s ease-in-out infinite; }
  .img-card { transition: transform .25s ease, box-shadow .25s ease; border-radius:8px; }
  .img-card:hover { transform: translateY(-3px) scale(1.01); box-shadow: 0 10px 28px rgba(0,0,0,.15); }
  .btn-row a { display:inline-block; padding:10px 14px; border-radius:8px; text-decoration:none; font-size:.95rem; color:#fff; }
  .btn-github { background: linear-gradient(135deg,#24292e,#2f363d); }
  .btn-arxiv { background: linear-gradient(135deg,#cc0000,#e03131); }
  .btn-secondary { background: linear-gradient(135deg,#1b6ec2,#2176d2); }
  .btn-row a:hover { filter: brightness(1.05); transform: translateY(-2px); }
</style>

<div class="fade-up" style="display:flex;justify-content:center;align-items:center;margin: 10px 0 24px 0; gap:20px; flex-wrap:wrap;">
  <img class="float img-card" alt="AlphaMapleSAT logo" src="{{site.baseurl}}/assets/img/ams/logo.png" width="200" style="max-width: 50vw; height: auto;">
  <img class="img-card" alt="Reasoning to Learning" src="{{site.baseurl}}/assets/img/ams/reasoning-learning.png" style="max-width: 460px; width: 50%; height:auto;">
  </div>

<!-- Author/links card -->
<div class="paper-card" style="display:flex; flex-direction:column; gap:12px; margin: 10px 0 26px 0; border:1px solid #e5e5e5; border-radius:12px; padding:16px 18px; background:#fafbfc;">
  <div>
    <h2 style="margin: 0 0 8px 0;">AlphaMapleSAT</h2>
    <p style="margin: 0; font-size: 0.95rem;"><strong>Authors:</strong>
      <a href="https://piyush-j.github.io/" target="_blank">Piyush Jha</a><sup>†,1</sup>,
      <a href="https://404briannotfound.tech/" target="_blank">Zhengyu Li</a><sup>†,1</sup>,
      <a href="https://johnlyu2.github.io/" target="_blank">Zhengyang (John) Lu</a><sup>2</sup>,
      <a href="https://cs.curtisbright.com/" target="_blank">Curtis Bright</a><sup>3</sup>,
      <a href="https://vganesh1.github.io/" target="_blank">Vijay Ganesh</a><sup>1</sup>
    </p>
    <p style="margin: 0; font-size: 0.9rem;"><strong>Affiliations:</strong>
      <sup>1</sup>Georgia Institute of Technology, USA &nbsp;|&nbsp;
      <sup>2</sup>University of Waterloo, Canada &nbsp;|&nbsp;
      <sup>3</sup>University of Windsor, Canada
    </p>
    <p style="margin: 6px 0 0 0; color:#6a737d; font-size:0.9rem;"><sup>†</sup> Equal contributions</p>
  </div>
  <div class="btn-row" style="display:flex; gap:10px; flex-wrap:wrap; margin-top:6px;">
    <a class="btn-arxiv" href="https://arxiv.org/abs/2401.13770" target="_blank">
      <i class="fa fa-file-text-o" style="margin-right:6px"></i> arXiv
    </a>
    <a class="btn-github" href="https://github.com/piyush-J/AlphaMapleSAT" target="_blank">
      <i class="fa fa-github" style="margin-right:6px"></i> Code: AlphaMapleSAT
    </a>
    <a class="btn-github" href="https://github.com/BrianLi009/AlphaMapleSAT-CnC" target="_blank">
      <i class="fa fa-github" style="margin-right:6px"></i> Code: Parallel CnC Runner
    </a>
  </div>
</div>

## TL;DR
AlphaMapleSAT (AMS) is a Monte Carlo Tree Search (MCTS) driven cube-and-conquer SAT solver for very hard combinatorial instances. AMS uses MCTS to explore the space of cubes (partial assignments) and a CDCL worker solver to conquer each subproblem. Deductive feedback from the worker solver informs the search policy so AMS focuses on the most promising branches. On Kochen–Specker benchmarks, AMS outperforms the state-of-the-art lookahead-based splitter March, achieving up to an 8× end-to-end speedup while solving more instances within the time limit.

## Key ideas at a glance
- MCTS-guided cube generation with principled exploration–exploitation trade-offs.
- Deductive feedback from the CDCL worker to steer future expansions.
- Lightweight simplification and incremental solving to minimize overhead.
- A practical, easy-to-integrate splitter for modern CDCL solvers (MapleSAT backend in our experiments).

## AMS pipeline
The figure below summarizes AMS’s end-to-end workflow from instance generation to verdict:

<div class="fade-up" style="display:flex; justify-content:center; margin: 8px 0 6px 0;">
  <img class="img-card" alt="AMS pipeline" src="{{site.baseurl}}/assets/img/ams/flow.png" style="max-width: 100%; height:auto;">
  </div>

1. A simplified (or parameterized) instance is generated.
2. AMS explores the cube space using MCTS and emits promising cubes.
3. Cubes are merged with the base formula and simplified.
4. A CDCL worker (MapleSAT in our implementation) conquers the resulting subproblems.

## Results snapshot
AMS consistently reduces total elapsed time compared to March on Kochen–Specker instances.

<div class="fade-up" style="display:flex; flex-direction:column; align-items:center; gap:14px;">
  <img class="img-card" alt="Total elapsed real time by instance and method" src="{{site.baseurl}}/assets/img/ams/bar_chart.png" style="max-width: 100%;">
  <img class="img-card" alt="Key takeaways" src="{{site.baseurl}}/assets/img/ams/takeaway.png" width="560" style="max-width: 90%; height:auto;">
</div>

---

<p style="text-align:center; color:#6a737d; margin-top: 18px;">Questions or collaboration ideas? Reach out to the authors above.</p>

---
description: "AlphaMapleSAT (AMS): an MCTS-based cube-and-conquer SAT solver with deductive feedback that outperforms March on hard Kochen–Specker instances"
---

# AlphaMapleSAT

<style>
  /* Scoped styling to better match site defaults (Open Sans, site's blue, subtle shadows) */
  .ams-page { font-family: 'Open Sans', Arial, sans-serif; color: #17202a; }
  @keyframes floatY { 0%{transform: translateY(0)} 50%{transform: translateY(-3px)} 100%{transform: translateY(0)} }
  @keyframes fadeUp { from{opacity:0; transform: translateY(6px)} to{opacity:1; transform: translateY(0)} }
  .fade-up { opacity:0; animation: fadeUp 560ms ease-out 60ms both; }
  .float { animation: floatY 8s ease-in-out infinite; }
  .img-card { transition: transform .22s ease, box-shadow .22s ease; border-radius:10px; }
  .img-card:hover { transform: translateY(-4px); box-shadow: 0 12px 26px rgba(17,24,39,0.08); }
  .btn-row a { display:inline-block; padding:10px 14px; border-radius:8px; text-decoration:none; font-size:.95rem; color:#fff; box-shadow: none; }
  .btn-github { background: #24292e; }
  .btn-arxiv { background: #cc0000; }
  .btn-secondary { background: #1b6ec2; }
  .btn-row a:hover { filter: brightness(1.03); transform: translateY(-1px); }
  /* paper-card adjustments to match other pages */
  .paper-card { border-radius:10px; box-shadow: 0 6px 18px rgba(17,24,39,0.03); }
  /* responsive image handling */
  .ams-hero { display:flex; justify-content:center; align-items:center; gap:20px; flex-wrap:wrap; margin: 10px 0 24px 0; }
  .ams-hero img { max-width: 100%; height: auto; }
</style>

<div class="fade-up ams-page ams-hero">
  <img class="float img-card" alt="AlphaMapleSAT logo" src="{{site.baseurl}}/assets/img/ams/logo.png" width="200" style="max-width: 50vw; height: auto;">
  <img class="img-card" alt="Reasoning to Learning" src="{{site.baseurl}}/assets/img/ams/reasoning-learning.png" style="max-width: 460px; width: 50%; height:auto;">
</div>

<!-- Author/links card -->
<div class="paper-card ams-page" style="display:flex; flex-direction:column; gap:12px; margin: 10px 0 26px 0; border:1px solid #e9eef6; padding:16px 18px; background:#ffffff;">
  <div>
    <h2 style="margin: 0 0 8px 0;">Overview</h2>
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
AMS integrates Monte Carlo Tree Search (MCTS) with deductive feedback—using propagation rate via unit propagation—in the Cube-and-Conquer paradigm to guide cubing. By focusing exploration on promising cubes it reduces wasted work and achieves up to an 8× wall-clock speedup versus March on the hardest Kochen–Specker and Ramsey instances.

## Key ideas
- MCTS-guided cubing with deductive rewards (propagation rate via unit propagation) to prioritize promising branches.
- PUCT-based selection without neural nets; priors from BCP counts.
- Boolean Constraint propagation (BCP) feedback from deeper exploration improves partition quality.
- Keeps cubing costs low with lightweight simplification and incremental solving.

## Pipeline (summary)
<div style="display:flex; justify-content:center; margin: 8px 0 6px 0;">
  <img class="img-card" alt="AMS pipeline" src="{{site.baseurl}}/assets/img/ams/flow.png" style="max-width: 100%; height:auto;">
</div>
- Input: CNF formula
- Cubing: MCTS + deductive rewards to generate cubes
- Conquer: solve cubes in parallel with CDCL workers
- Output: SAT / UNSAT

## Results snapshot
We evaluated AMS on challenging benchmarks such as the Kochen–Specker and Ramsey problems. The bar chart above shows total elapsed wall-clock time per instance (AMS in pink, March in orange) — AMS achieves up to an 8× end-to-end speedup on the hardest instances.

<div class="fade-up ams-page" style="display:flex; flex-direction:column; align-items:center; gap:14px;">
  <img class="img-card" alt="Total elapsed real time by instance and method" src="{{site.baseurl}}/assets/img/ams/bar_chart.png" style="max-width: 100%;">
  <div style="max-width:640px; width:100%;">
    <h3 style="margin:12px 0 6px 0; text-align:center; color:#0f3b66;">Key takeaways</h3>
    <img class="img-card" alt="Key takeaways" src="{{site.baseurl}}/assets/img/ams/takeaway.png" width="560" style="display:block; margin: 0 auto; max-width: 100%; height:auto;">
    <ul style="margin: 10px 18px; padding-left: 18px;">
      <li>Deductive reward is propagation rate (via unit propagation), used during MCTS selection/rollout to steer towards better cubes.</li>
      <li>Up to 8× end-to-end speedups on the hardest Kochen–Specker and Ramsey instances</li>
      <li>Integrates with MathCheck’s parallel CnC pipeline (CDCL workers); cubing stays cheap and scales.</li>
    </ul>
  </div>
</div>

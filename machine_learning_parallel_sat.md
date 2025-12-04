---
description: "Machine Learning-based parallel SAT solving via symbolic feedback and cube-and-conquer enhancements"
---

# ⚙️ Machine Learning based Parallel SAT

This page highlights ongoing and past research efforts connecting AI, symbolic systems, and scientific discovery at the <a href="https://vganesh1.github.io/group.html" target="_blank">reasoning and learning research group @ Georgia Tech led by Professor Vijay Ganesh</a>.

<!-- Top Navigation -->
<div style="margin-bottom: 30px; display: flex; gap: 20px; align-items: center;">
  <!-- Prof. Vijay Ganesh -->
  <a href="https://vganesh1.github.io/" target="_blank" 
     style="background-color: #1b6ec2; color: white; padding: 8px 16px; border-radius: 5px; text-decoration: none; font-size: 1rem;">
    Vijay Ganesh's Homepage
  </a>

  <!-- Neuro-Symbolic / Logic for ML Projects Dropdown -->
  <div class="dropdown" style="position: relative; display: inline-block;">
    <button style="background-color: #1b6ec2; color: white; padding: 8px 16px; font-size: 1rem; border: none; border-radius: 5px; cursor: pointer;">
      Other NeuroSymbolic AI Projects
    </button>
  <div class="dropdown-content" style="position: absolute; background-color: white; min-width: 240px; box-shadow: 0px 8px 16px rgba(0,0,0,0.2); border-radius: 5px; z-index: 1;">
      <a href="{{ site.baseurl }}/math.html" style="color: black; padding: 10px 16px; display: block; text-decoration: none;">Neurosymbolic AI for Mathematics</a>
      <a href="{{ site.baseurl }}/neurosymbolic.html" style="color: black; padding: 10px 16px; display: block; text-decoration: none;">NeuroSymbolic AI for Software Engineering</a>
      <a href="{{ site.baseurl }}/scientific_discovery.html" style="color: black; padding: 10px 16px; display: block; text-decoration: none;">AI for Scientific Discovery</a>
    </div>
  </div>
</div>

<script>
  const dropdown = document.querySelector('.dropdown');
  const content = dropdown.querySelector('.dropdown-content');
  dropdown.querySelector('button').addEventListener('click', (e) => {
    e.stopPropagation();
    content.classList.toggle('open');
  });
  window.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      content.classList.remove('open');
    }
  });
</script>

---

<div class="paper-card" style="display: flex; flex-direction: column; align-items: flex-start; gap: 15px; margin-bottom: 30px; border: 1px solid #ddd; border-radius: 10px; padding: 15px;">
  <div>
    <h2>
      <a href="{{ site.baseurl }}/alphamaplesat.html" target="_blank">
        AlphaMapleSAT: Machine Learning Guided Parallel SAT Solving
      </a>
    </h2>
    <p style="margin: 0; font-size: 0.9rem;"><strong>Authors:</strong>
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
    <p style="margin: 4px 0 0 0; color:#6a737d; font-size:0.85rem;"><sup>†</sup> Equal contributions</p>
    <div style="height: 150px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
  <img loading="lazy" src="{{ site.baseurl }}/assets/img/ams/flow.png" alt="AlphaMapleSAT" 
           style="max-height: 140px; width: auto; object-fit: contain; border-radius: 10px;">
    </div>
    <p><strong>TL;DR:</strong> AlphaMapleSAT integrates Monte Carlo Tree Search-guided cubing with symbolic deductive feedback—leveraging Boolean constraint propagation—to focus cube-and-conquer exploration on promising branches. This reduces wasted work on hard combinatorial SAT benchmarks and achieves up to 8× wall-clock speedups over state-of-the-art baselines.</p>
    <p>
      <a href="{{ site.baseurl }}/alphamaplesat.html" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         Project Page
      </a>
    </p>
  </div>
</div>

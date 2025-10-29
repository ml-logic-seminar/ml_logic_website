---
description: "Neurosymbolic AI for scientific discovery via combinations of LLMs, symbolic engines, solvers, and domain tools"
---

# 🔬 AI for Scientific Discovery

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
    <div class="dropdown-content" style="display: none; position: absolute; background-color: white; min-width: 240px; box-shadow: 0px 8px 16px rgba(0,0,0,0.2); border-radius: 5px; z-index: 1;">
      <a href="{{ site.baseurl }}/math.html" style="color: black; padding: 10px 16px; display: block; text-decoration: none;">Neurosymbolic AI for Mathematics</a>
      <a href="{{ site.baseurl }}/neurosymbolic.html" style="color: black; padding: 10px 16px; display: block; text-decoration: none;">NeuroSymbolic AI for Software Engineering</a>
    </div>
  </div>
</div>

<script>
  const dropdown = document.querySelector('.dropdown');
  const content = dropdown.querySelector('.dropdown-content');
  dropdown.querySelector('button').addEventListener('click', () => {
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
  window.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      content.style.display = 'none';
    }
  });
</script>

---

<div class="paper-card" style="display: flex; flex-direction: column; align-items: flex-start; gap: 15px; margin-bottom: 30px; border: 1px solid #ddd; border-radius: 10px; padding: 15px;">
  <div>
    <h2>
      <a href="https://rlsf-llm.github.io/" target="_blank">
        Reinforcement Learning via Symbolic Feedback (RLSF) – Chemistry
      </a>
    </h2>
    <p style="margin: 0; font-size: 0.9rem;"><strong>Authors:</strong>
      <a href="https://piyush-j.github.io/" target="_blank">Piyush Jha</a><sup>1</sup>, 
      <a href="https://sites.google.com/site/jprithwish" target="_blank">Prithwish Jana</a><sup>1</sup>, 
      <a href="https://www.linkedin.com/in/pranavkrishnasuresh/" target="_blank">Pranavkrishna Suresh</a><sup>1</sup>, 
      <a href="https://www.linkedin.com/in/arnav-arora-8762171b4/" target="_blank">Arnav Arora</a><sup>1</sup>, 
      <a href="https://www.cc.gatech.edu/people/vijay-ganesh" target="_blank">Vijay Ganesh</a><sup>1</sup>
    </p>
    <p style="margin: 0; font-size: 0.9rem;"><strong>Affiliations:</strong>
      <sup>1</sup>Georgia Institute of Technology, USA
    </p>
    <div style="height: 150px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/rlsf_chem.png" alt="RLSF Chemistry" 
           style="max-height: 140px; width: auto; object-fit: contain; border-radius: 10px;">
    </div>
    <p><strong>TL;DR:</strong> RLSF introduces a new way to fine-tune LLMs for molecular design and synthesis by combining reinforcement learning with token-level symbolic feedback from cheminformatics tools such as RDKit. Fine-grained chemical error signals (e.g., valence violations, missing functional groups) drive a PPO loop to iteratively improve the LLM; the approach extends to materials science and physics discovery.</p>
    <p>
      <a href="https://rlsf-llm.github.io/" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         Project Page
      </a>
    </p>
  </div>
</div>

---

<div class="paper-card" style="display: flex; flex-direction: column; align-items: flex-start; gap: 15px; margin-bottom: 30px; border: 1px solid #ddd; border-radius: 10px; padding: 15px;">
  <div>
    <h2>
      <a href="https://creatixchu.github.io/symbolic-density-estimation/" target="_blank">
        Symbolic Density Estimation Through Symbolic Regression: A Decompositional Approach
      </a>
    </h2>
    <p style="margin: 0; font-size: 0.9rem;"><strong>Authors:</strong>
      <a href="https://www.linkedin.com/in/angelorajendram" target="_blank">Angelo Arvind Rajendram</a><sup>1</sup>, 
      <a href="https://www.linkedin.com/in/creatixchu/" target="_blank">Xieting Chu</a><sup>2</sup>, 
      <a href="https://physics.gatech.edu/user/aishik-ghosh" target="_blank">Aishik Ghosh</a><sup>2</sup>,
      <a href="https://inspirehep.net/authors/1926153" target="_blank">Max Fieg</a><sup>3</sup>, 
      <a href="https://www.cc.gatech.edu/people/vijay-ganesh" target="_blank">Vijay Ganesh</a><sup>2</sup>
    </p>
    <p style="margin: 0; font-size: 0.9rem;"><strong>Affiliations:</strong>
      <sup>1</sup>University of Waterloo, Canada &nbsp;|&nbsp;
      <sup>2</sup>Georgia Institute of Technology, USA &nbsp;|&nbsp;
      <sup>3</sup>University of California, Irvine, USA
    </p>
    <div style="height: 150px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/symbolic_regression.png" alt="Symbolic Density Estimation" 
           style="max-height: 140px; width: auto; object-fit: contain; border-radius: 10px;">
    </div>
    <p><strong>TL;DR:</strong> The AI-Kolmogorov Framework decomposes high-dimensional density estimation via clustering and structure learning, then applies symbolic regression to marginal and conditional distributions to recover interpretable analytic models and rediscover underlying distributions.</p>
    <p>
      <a href="https://creatixchu.github.io/symbolic-density-estimation/" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         Project Page
      </a>
    </p>
  </div>
</div>

---

<div class="paper-card" style="display: flex; flex-direction: column; align-items: flex-start; gap: 15px; margin-bottom: 30px; border: 1px solid #ddd; border-radius: 10px; padding: 15px;">
  <div>
    <h2>
      <a href="{{ site.baseurl }}/siamese.html" target="_blank">
        Discovering Laws of Physics via Interpretable Siamese Neural Networks
      </a>
    </h2>
    <p style="margin: 0; font-size: 0.9rem;"><strong>Authors:</strong>
      <a href="https://ca.linkedin.com/in/sebastian-johann-wetzel-b786b9173" target="_blank">Sebastian J. Wetzel</a><sup>1</sup>, 
      <a href="https://uwaterloo.ca/physics-astronomy/profile/rgmelko" target="_blank">Roger G. Melko</a><sup>1,2</sup>, 
      <a href="https://www.linkedin.com/in/joseph-scott-ai/" target="_blank">Joseph Scott</a><sup>2</sup>,
      <a href="https://maysumpanju.com/" target="_blank">Maysum Panju</a><sup>2</sup>, 
      <a href="https://www.cc.gatech.edu/people/vijay-ganesh" target="_blank">Vijay Ganesh</a><sup>2</sup>
    </p>
    <p style="margin: 0; font-size: 0.9rem;"><strong>Affiliations:</strong>
      <sup>1</sup>Perimeter Institute for Theoretical Physics, Canada &nbsp;|&nbsp;
      <sup>2</sup>University of Waterloo, Canada
    </p>
    <div style="height: 150px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/siamese.png" alt="Siamese Networks for Physics" 
           style="max-height: 140px; width: auto; object-fit: contain; border-radius: 10px;">
    </div>
    <p><strong>TL;DR:</strong> Interpretable Siamese Neural Networks learn to identify symmetry invariants and conserved quantities by clustering similar physics events—without prior domain knowledge—across settings like special relativity and electromagnetic field transformations.</p>
    <p>
      <a href="{{ site.baseurl }}/siamese.html" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         Project Page
      </a>
    </p>
  </div>
</div>

---

<div class="paper-card" style="display: flex; flex-direction: column; align-items: flex-start; gap: 15px; margin-bottom: 30px; border: 1px solid #ddd; border-radius: 10px; padding: 15px;">
  <div>
    <h2>
      <a href="https://dhananjayashok.github.io/LGGA/" target="_blank">
        Logic Guided Genetic Algorithms (LGGA)
      </a>
    </h2>
    <p style="margin: 0; font-size: 0.9rem;"><strong>Authors:</strong>
      <a href="https://dhananjayashok.github.io/" target="_blank">Dhananjay Ashok</a><sup>1</sup>, 
      <a href="https://www.linkedin.com/in/joseph-scott-ai/" target="_blank">Joseph Scott</a><sup>2</sup>, 
      <a href="https://ca.linkedin.com/in/sebastian-johann-wetzel-b786b9173" target="_blank">Sebastian J. Wetzel</a><sup>3</sup>,
      <a href="https://maysumpanju.com/" target="_blank">Maysum Panju</a><sup>2</sup>, 
      <a href="https://www.cc.gatech.edu/people/vijay-ganesh" target="_blank">Vijay Ganesh</a><sup>2</sup>
    </p>
    <p style="margin: 0; font-size: 0.9rem;"><strong>Affiliations:</strong>
      <sup>1</sup>University of Toronto, Canada &nbsp;|&nbsp;
      <sup>2</sup>University of Waterloo, Canada &nbsp;|&nbsp;
      <sup>3</sup>Perimeter Institute for Theoretical Physics, Canada
    </p>
    <div style="height: 150px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/lgga.png" alt="LGGA" 
           style="max-height: 140px; width: auto; object-fit: contain; border-radius: 10px;">
    </div>
    <p><strong>TL;DR:</strong> LGGA augments symbolic regression with auxiliary truths (known domain facts) in both scoring and data augmentation to dramatically improve data efficiency in equation discovery.</p>
    <p>
      <a href="https://dhananjayashok.github.io/LGGA/" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         Project Page
      </a>
    </p>
  </div>
</div>

---

<div class="paper-card" style="display: flex; flex-direction: column; align-items: flex-start; gap: 15px; margin-bottom: 30px; border: 1px solid #ddd; border-radius: 10px; padding: 15px;">
  <div>
    <h2>
      <a href="{{ site.baseurl }}/lgml.html" target="_blank">
        Logic Guided Machine Learning (LGML)
      </a>
    </h2>
    <p style="margin: 0; font-size: 0.9rem;"><strong>Authors:</strong>
      <a href="https://www.linkedin.com/in/joseph-scott-ai/" target="_blank">Joseph Scott</a><sup>1</sup>, 
      <a href="https://maysumpanju.com/" target="_blank">Maysum Panju</a><sup>1</sup>, 
      <a href="https://www.cc.gatech.edu/people/vijay-ganesh" target="_blank">Vijay Ganesh</a><sup>1</sup>
    </p>
    <p style="margin: 0; font-size: 0.9rem;"><strong>Affiliations:</strong>
      <sup>1</sup>University of Waterloo, Canada
    </p>
    <div style="height: 150px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/lgml.png" alt="LGML" 
           style="max-height: 140px; width: auto; object-fit: contain; border-radius: 10px;">
    </div>
    <p><strong>TL;DR:</strong> LGML combines a learning model that proposes symbolic expressions from data with a logic solver that checks consistency against auxiliary truths, returning counterexamples to guide a feedback loop and yield highly data-efficient learning of core expressions.</p>
    <p>
      <a href="{{ site.baseurl }}/lgml.html" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         Project Page
      </a>
    </p>
  </div>
</div>

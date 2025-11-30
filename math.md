---
description: "Neurosymbolic AI for mathematics via combinations of LLMs, provers, solvers, and computer algebra systems"
---

# 🧮 AI for Mathematics

This page highlights ongoing and past research efforts connecting **AI, formal methods, and mathematical reasoning** at the **<a href="https://vganesh1.github.io/group.html" target="_blank">reasoning and learning research group @ Georgia Tech led by Professor Vijay Ganesh</a>**.

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
      <a href="{{ site.baseurl }}/scientific_discovery.html" style="color: black; padding: 10px 16px; display: block; text-decoration: none;">Neurosymbolic AI for Scientific Discovery</a>
      <a href="{{ site.baseurl }}/neurosymbolic.html" style="color: black; padding: 10px 16px; display: block; text-decoration: none;">NeuroSymbolic AI for Software Engineering</a>
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
      <a href="https://arxiv.org/pdf/2510.15681" target="_blank">
        ProofBridge: Auto-Formalization of Natural Language Proofs in Lean via Joint Embeddings
      </a> 
      (2025)
    </h2>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Authors:</strong>
      <a href="https://sites.google.com/site/jprithwish/" target="_blank">Prithwish Jana</a><sup>1</sup>, 
      <a href="https://www.linkedin.com/in/kaan-kale-209843164/" target="_blank">Kaan Kale</a><sup>1</sup>, 
      <a href="https://scholar.google.com/citations?user=o_XZ4pEAAAAJ&hl=en" target="_blank">Ahmet Ege Tanriverdi</a><sup>2</sup>, 
      <a href="https://cruisesong7.github.io/" target="_blank">Cruise Song</a><sup>1</sup>, 
      <a href="https://ece.gatech.edu/directory/sriram-vishwanath" target="_blank">Sriram Vishwanath</a><sup>1</sup>, 
      <a href="https://vganesh1.github.io/" target="_blank">Vijay Ganesh</a><sup>1</sup>
    </p>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Affiliations:</strong>
      <sup>1</sup>Georgia Institute of Technology, USA &nbsp;|&nbsp;
      <sup>2</sup>Bogazici University, Turkiye
    </p>
    <div style="height: 150px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/proofbridge_pipeline.png" alt="ProofBridge"
           style="max-height: 140px; width: auto; object-fit: contain; border-radius: 10px;">
    </div>
    <p><strong>TL;DR:</strong> ProofBridge is a unified framework that translates natural language theorems and proofs into Lean 4 using joint embeddings, cross-modal retrieval-augmented fine-tuning, and iterative proof repair, achieving strong semantic and type correctness gains.</p>
    <p>
      <a href="https://arxiv.org/abs/2510.15681" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         arXiv
      </a>
    </p>
  </div>
</div>

---

<div class="paper-card" style="display: flex; flex-direction: column; align-items: flex-start; gap: 15px; margin-bottom: 30px; border: 1px solid #ddd; border-radius: 10px; padding: 15px;">
  <div>
    <h2>
      <a href="https://provables.org/sequencelib/" target="_blank">
        Sequencelib: A Platform for Formalizing Sequences from The On-Line Encyclopedia of Integer Sequences (OEIS)
      </a> 
      (2025)
    </h2>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Authors:</strong>
      <a href="https://github.com/waltermoreira" target="_blank">Walter Moreira</a><sup>1</sup>, 
      <a href="https://tacc.utexas.edu/about/staff-directory/joe-stubbs/" target="_blank">Joe Stubbs</a><sup>1</sup>, 
      <a href="https://vganesh1.github.io/" target="_blank">Vijay Ganesh</a><sup>2</sup>
    </p>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Affiliations:</strong>
      <sup>1</sup>TACC, University of Texas at Austin, USA &nbsp;|&nbsp;
      <sup>2</sup>Georgia Institute of Technology, USA
    </p>
    <div style="height: 150px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/sequencelib_pipeline.png" alt="SequenceLib"
           style="max-height: 140px; width: auto; object-fit: contain; border-radius: 10px;">
    </div>
    <p><strong>TL;DR:</strong> SequenceLib is a formal library in Lean 4 that encodes thousands of integer sequences from the OEIS catalog and millions of theorems about them, along with metaprogramming tools to index sequences, compute values, and relate equivalent sequences.</p>
    <p>
      <a href="https://provables.org/sequencelib/" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         Website
      </a>
    </p>
  </div>
</div>

---

<div class="paper-card" style="display: flex; flex-direction: column; align-items: flex-start; gap: 15px; margin-bottom: 30px; border: 1px solid #ddd; border-radius: 10px; padding: 15px;">
  <div>
    <h2>
      <a href="https://arxiv.org/pdf/2510.12350" target="_blank">
        O-Forge: An LLM + Computer Algebra Framework for Asymptotic Analysis
      </a> 
      (2025)
    </h2>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Authors:</strong>
      <a href="https://ayushkhaitanrutgers.github.io/" target="_blank">Ayush Khaitan</a><sup>1</sup>, 
      <a href="https://vganesh1.github.io/" target="_blank">Vijay Ganesh</a><sup>2</sup>
    </p>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Affiliations:</strong>
      <sup>1</sup>Rutgers University, USA &nbsp;|&nbsp;
      <sup>2</sup>Georgia Institute of Technology, USA
    </p>
    <div style="height: 150px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/oforge_pipeline.png" alt="O-Forge"
           style="max-height: 140px; width: auto; object-fit: contain; border-radius: 10px;">
    </div>
    <p><strong>TL;DR:</strong> An LLM-CAS framework to quickly obtain full proofs of asymptotic estimates that are commonly and laboriously calculated in research mathematics.</p>
    <p>
      <a href="https://arxiv.org/abs/2510.12350" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         arXiv
      </a>
      <a href="https://o-forge.com/" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         Demo Website
      </a>
    </p>
  </div>
</div>

---

<div class="paper-card" style="display: flex; flex-direction: column; align-items: flex-start; gap: 15px; margin-bottom: 30px; border: 1px solid #ddd; border-radius: 10px; padding: 15px;">
  <div>
    <h2>
      <a href="https://cs.uwaterloo.ca/~cbright/reports/synasc-mathcheck2.pdf" target="_blank">
        MathCheck2: A SAT+CAS Verifier for Combinatorial Conjectures
      </a> 
      (2016)
    </h2>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Authors:</strong>
      <a href="https://www.curtisbright.com/" target="_blank">Curtis Bright</a><sup>1</sup>, 
      <a href="https://www.linkedin.com/in/albertheinle/" target="_blank">Albert Heinle</a><sup>1</sup>, 
      <a href="https://web.wlu.ca/science/physcomp/ikotsireas/" target="_blank">Ilias Kotsireas</a><sup>2</sup>,
      <a href="https://saeednj.github.io/" target="_blank">Saeed Nejati</a><sup>1</sup>, 
      <a href="https://uwaterloo.ca/electrical-computer-engineering/profile/k2czarne" target="_blank">Krzysztof Czarnecki</a><sup>1</sup>,
      <a href="https://vganesh1.github.io/" target="_blank">Vijay Ganesh</a><sup>1</sup>
    </p>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Affiliations:</strong>
      <sup>1</sup>University of Waterloo, Canada &nbsp;|&nbsp;
      <sup>2</sup>Wilfred Laurier University, Canada
    </p>
    <div style="height: 150px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/mathcheck2_pipeline.png" alt="MathCheck2"
           style="max-height: 140px; width: auto; object-fit: contain; border-radius: 10px;">
    </div>
    <p><strong>TL;DR:</strong> MathCheck applies Boolean satisfiability (SAT) solvers and computer algebra systems (CASs) to efficiently search for mathematical objects and automatically generate computer-assisted proofs of combinatorial conjectures. It often solves problems thousands of times faster than either a SAT solver or a CAS.</p>
    <p>
      <a href="https://link.springer.com/chapter/10.1007/978-3-319-45641-6_9" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         Published in CASC-2016
      </a>
      <a href="https://uwaterloo.ca/mathcheck/" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         Project Page
      </a>
    </p>
  </div>
</div>

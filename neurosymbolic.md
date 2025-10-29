# 💻 AI for Code

This page highlights ongoing and past research efforts connecting **AI, formal methods, programming languages and software engineering** at the **<a href="https://vganesh1.github.io/group.html" target="_blank">reasoning and learning research group @ Georgia Tech led by Professor Vijay Ganesh</a>**.

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
      <a href="https://ml-logic-seminar.github.io/ml_logic_website/scientific_discovery.html" style="color: black; padding: 10px 16px; display: block; text-decoration: none;">Neurosymbolic AI for Scientific Discovery</a>
      <a href="https://ml-logic-seminar.github.io/ml_logic_website/math.html" style="color: black; padding: 10px 16px; display: block; text-decoration: none;">NeuroSymbolic AI for Math</a>
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
      <a href="https://arxiv.org/pdf/2405.16661" target="_blank">
        RLSF: Fine-tuning LLMs via Symbolic Feedback
      </a> 
      (2025)
    </h2>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Authors:</strong>
      <a href="https://piyush-j.github.io/" target="_blank">Piyush Jha</a><sup>1</sup>, 
      <a href="https://sites.google.com/site/jprithwish/" target="_blank">Prithwish Jana</a><sup>1</sup>, 
      <a href="https://www.linkedin.com/in/pranavkrishnasuresh/" target="_blank">Pranavkrishna Suresh</a><sup>1</sup>, 
      <a href="https://www.linkedin.com/in/arnav-arora-8762171b4/" target="_blank">Arnav Arora</a><sup>1</sup>, 
      <a href="https://vganesh1.github.io/" target="_blank">Vijay Ganesh</a><sup>1</sup>
    </p>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Affiliation:</strong>
      <sup>1</sup>Georgia Institute of Technology, USA
    </p>
    <div style="height: 200px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/rlsfcode_pipeline.png" alt="RLSF"
           style="max-height: 190px; width: auto; object-fit: contain; border-radius: 10px;">
    </div>
    <p><strong>TL;DR:</strong> A novel fine-tuning paradigm where symbolic reasoning tools (e.g., solvers, provers, RDKit) provide token-level feedback to LLMs, achieving large accuracy gains on code synthesis, chemistry, and math tasks while remaining far smaller than closed-source models.</p>
    <p>
      <a href="https://ebooks.iospress.nl/volumearticle/75932" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         Published in ECAI-2025
      </a>
      <a href="https://arxiv.org/abs/2405.16661" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         arXiv
      </a>
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
      <a href="https://arxiv.org/pdf/2306.06755" target="_blank">
        CoTran: An LLM-based Code Translator using Reinforcement Learning with Feedback from Compiler and Symbolic Execution
      </a> 
      (2024)
    </h2>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Authors:</strong>
      <a href="https://sites.google.com/site/jprithwish/" target="_blank">Prithwish Jana</a><sup>1</sup>, 
      <a href="https://piyush-j.github.io/" target="_blank">Piyush Jha</a><sup>1</sup>, 
      <a href="https://ca.linkedin.com/in/george-ju" target="_blank">Haoyang Ju</a><sup>2</sup>, 
      <a href="https://www.linkedin.com/in/gauthk6" target="_blank">Gautham Kishore</a><sup>3</sup>, 
      <a href="https://www.linkedin.com/in/aryanma/" target="_blank">Aryan Mahajan</a><sup>4</sup>, 
      <a href="https://vganesh1.github.io/" target="_blank">Vijay Ganesh</a><sup>1</sup>
    </p>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Affiliations:</strong>
      <sup>1</sup>Georgia Institute of Technology, USA &nbsp;|&nbsp;
      <sup>2</sup>University of Toronto, Canada &nbsp;|&nbsp;
      <sup>3</sup>UC San Diego, USA &nbsp;|&nbsp;
      <sup>4</sup>Columbia University, USA
    </p>
    <div style="height: 200px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/cotran_pipeline.png" alt="CoTran"
           style="max-height: 190px; width: auto; object-fit: contain; border-radius: 10px;">
    </div>
    <p><strong>TL;DR:</strong> Fine-tunes LLMs for end-to-end code translation using compiler and symbolic-execution feedback to improve compilability and functional equivalence.</p>
    <p>
      <a href="https://ebooks.iospress.nl/doi/10.3233/FAIA240968" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         Published in ECAI-2024
      </a>
      <a href="https://arxiv.org/abs/2306.06755" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         arXiv
      </a>
      <a href="https://github.com/PrithwishJana/CoTran" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         GitHub
      </a>
    </p>
  </div>
</div>

---

<div class="paper-card" style="display: flex; flex-direction: column; align-items: flex-start; gap: 15px; margin-bottom: 30px; border: 1px solid #ddd; border-radius: 10px; padding: 15px;">
  <div>
    <h2>
      <a href="https://proceedings.neurips.cc/paper_files/paper/2023/file/47167991e38c65a72914763c11cd8d23-Paper-Conference.pdf" target="_blank">
        Grounding Neural Inference with Satisfiability Modulo Theories
      </a> 
      (2023)
    </h2>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Authors:</strong>
      <a href="https://zifanw.net/" target="_blank">Zifan Wang</a><sup>1</sup>, 
      <a href="https://svijayakumar2.github.io/" target="_blank">Saranya Vijayakumar</a><sup>2</sup>, 
      <a href="https://scholar.google.com/citations?user=oYfmaR4AAAAJ&hl=en" target="_blank">Kaiji Lu</a><sup>3</sup>, 
      <a href="https://vganesh1.github.io/" target="_blank">Vijay Ganesh</a><sup>4</sup>,
      <a href="https://pages.cs.wisc.edu/~jha/" target="_blank">Somesh Jha</a><sup>5</sup>, 
      <a href="https://mattfredrikson.com/" target="_blank">Matt Fredriskon</a><sup>2</sup>
    </p>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Affiliations:</strong>
      <sup>1</sup>Center for AI Safety &nbsp;|&nbsp;
      <sup>2</sup>Carnegie Mellon University, USA &nbsp;|&nbsp;
      <sup>3</sup>Pinterest Inc. &nbsp;|&nbsp;
      <sup>4</sup>Georgia Institute of Technology, USA &nbsp;|&nbsp;
      <sup>5</sup>University of Wisconsin, Madison, USA &nbsp;|&nbsp;
    </p>
    <div style="height: 150px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/smtlayer_pipeline.png" alt="CoTran"
           style="max-height: 140px; width: auto; object-fit: contain; border-radius: 10px;">
    </div>
    <p><strong>TL;DR:</strong> Introduces SMTLayer, enabling neural networks to enforce logical constraints directly during both forward and backward passes without requiring the solver to be differentiable.</p>
    <p>
      <a href="https://proceedings.neurips.cc/paper_files/paper/2023/hash/47167991e38c65a72914763c11cd8d23-Abstract-Conference.html" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         Published in NeurIPS-2023
      </a>
      <a href="https://github.com/cmu-transparency/smt-layer" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         GitHub
      </a>
    </p>
  </div>
</div>

---

## [CGDTest](https://arxiv.org/abs/2304.01826){:target="_blank"} ([Talk](https://simons.berkeley.edu/talks/constrained-gradient-descent-algorithm-testing-neural-networks){:target="_blank"})

**TL;DR:**  
Applies constrained gradient descent to systematically test deep networks, uncovering adversarial robustness and fairness issues more effectively than existing testing tools.

---

## [Solver + Gradient Descent Training of Deep Neural Networks](https://dhananjayashok.github.io/Hybrid-Solver-NN-Training/){:target="_blank"}

**TL;DR:**  
Combines **gradient descent with MILP solver steps** to escape poor local minima and accelerate convergence on classification and regression tasks.

---

## [Amnesiac Machine Learning](https://ml-logic-seminar.github.io/ml_logic_website/amnesiac.html){:target="_blank"}

**TL;DR:**  
Develops unlearning techniques that remove the influence of specific training data to satisfy privacy laws like GDPR while maintaining model performance.

---

## [xAI-GAN: Enhancing Generative Adversarial Networks via Explainable AI Systems](https://ml-logic-seminar.github.io/ml_logic_website/xAIGAN.html){:target="_blank"}

**TL;DR:**  
Leverages explainability to guide GAN training, improving both the interpretability and quality of generated outputs.

---
description: "Advancing SMT with effective, adaptive, and interpretable heuristics powered by ML, RL, and LLMs"
---

# ⚙️ Machine Learning for SMT

This page highlights ongoing and past research efforts applying machine learning to improve SMT and related solvers at the **<a href="https://vganesh1.github.io/group.html" target="_blank">reasoning and learning research group @ Georgia Tech led by Professor Vijay Ganesh</a>**.

<!-- Top Navigation -->
<div style="margin-bottom: 30px; display: flex; gap: 20px; align-items: center;">
  <!-- Prof. Vijay Ganesh -->
  <a href="https://vganesh1.github.io/" target="_blank" 
     style="background-color: #1b6ec2; color: white; padding: 8px 16px; border-radius: 5px; text-decoration: none; font-size: 1rem;">
    Vijay Ganesh's Homepage
  </a>
</div>

---

<div class="paper-card" style="display: flex; flex-direction: column; align-items: flex-start; gap: 15px; margin-bottom: 30px; border: 1px solid #ddd; border-radius: 10px; padding: 15px;">
  <div>
    <h2>
      <a href="https://github.com/JohnLyu2/z3alpha" target="_blank">
        Z3alpha: Layered and Staged Monte Carlo Tree Search for SMT Strategy Synthesis
      </a> 
      (2024)
    </h2>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Authors:</strong>
      John Zhengyang Lu<sup>1</sup>, 
      Joel Day<sup>2</sup>, 
      Piyush Jha<sup>3</sup>, 
      Paul Sarnighausen-Cahn<sup>4</sup>, 
      Stefan Siemer<sup>4</sup>, 
      Florin Manea<sup>4</sup>, 
      Vijay Ganesh<sup>3</sup>
    </p>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Affiliations:</strong>
      <sup>1</sup>University of Waterloo &nbsp;|&nbsp;
      <sup>2</sup>Loughborough University &nbsp;|&nbsp;
      <sup>3</sup>Georgia Institute of Technology &nbsp;|&nbsp;
      <sup>4</sup>University of Göttingen
    </p>
    <div style="height: 250px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/z3alpha.jpg" alt="Z3alpha"
           style="max-height: 240px; width: auto; object-fit: contain; border-radius: 10px;">
    </div>
    <p><strong>TL;DR:</strong> Z3alpha applies novel Monte Carlo Tree Search (MCTS) methods to automatically synthesize effective and interpretable solving strategies for SMT solvers. Built on top of Z3, it achieved state-of-the-art performance, winning multiple first prizes at SMT-COMP in both 2024 and 2025, including in challenging logics such as QF_NIA and QF_NRA. </p>
    <p>
      <a href="https://dl.acm.org/doi/10.24963/ijcai.2024/211" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem; margin-right: 8px;">
         IJCAI'24
      </a>
      <a href="https://link.springer.com/article/10.1007/s00236-025-00495-x" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem; margin-right: 8px;">
         Acta Informatica (extended version)
      </a>
      <a href="https://github.com/JohnLyu2/z3alpha" target="_blank" 
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
      <a href="https://gitlab.com/sosy-lab/software/btor2-select" target="_blank">
        Btor2-Select: Machine Learning Based Algorithm Selection for Hardware Model Checking
      </a> 
      (2025)
    </h2>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Authors:</strong>
      John Zhengyang Lu<sup>1</sup>, 
      Po-Chun Chien<sup>2</sup>, 
      Nian-Ze Lee<sup>2,3</sup>, 
      Arie Gurfinkel<sup>1</sup>, 
      Vijay Ganesh<sup>4</sup>
    </p>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Affiliations:</strong>
      <sup>1</sup>University of Waterloo &nbsp;|&nbsp;
      <sup>2</sup>LMU Munich &nbsp;|&nbsp;
      <sup>3</sup>National Taiwan University &nbsp;|&nbsp;
      <sup>4</sup>Georgia Institute of Technology
    </p>
    <div style="height: 300px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/btor2select.png" alt="Btor2-Select"
           style="max-height: 290px; width: auto; object-fit: contain; border-radius: 10px;">
    </div>
    <p><strong>TL;DR:</strong> Btor2-Select is a machine-learning-based algorithm-selection framework for hardware verifiers. Using a simple and effective design supported by a graph-based circuit representation, Btor2-Select significantly improves the performance of single verifiers and delivers strong generalization across diverse hardware benchmarks.</p>
    <p>
      <a href="https://link.springer.com/chapter/10.1007/978-3-031-98668-0_15" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem; margin-right: 8px;">
         CAV'25
      </a>
      <a href="https://gitlab.com/sosy-lab/software/btor2-select" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         GitLab
      </a>
    </p>
  </div>
</div>

---

<div class="paper-card" style="display: flex; flex-direction: column; align-items: flex-start; gap: 15px; margin-bottom: 30px; border: 1px solid #ddd; border-radius: 10px; padding: 15px;">
  <div>
    <h2>
      <a href="https://ceur-ws.org/Vol-3185/extended678.pdf" target="_blank">
        Goose: A Meta-Solver for Deep Neural Network Verification
      </a> 
      (2022)
    </h2>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Authors:</strong>
      Joseph Scott<sup>1</sup>, 
      Guanting Pan<sup>1</sup>, 
      Elias B. Khalil<sup>2</sup>, 
      Vijay Ganesh<sup>1</sup>
    </p>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Affiliations:</strong>
      <sup>1</sup>University of Waterloo &nbsp;|&nbsp;
      <sup>2</sup>University of Toronto
    </p>
    <div style="height: 350px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/goose.png" alt="Goose"
           style="max-height: 340px; width: auto; object-fit: contain; border-radius: 10px;">
    </div>
    <p><strong>TL;DR:</strong> Goose is a meta-solver for deep neural network verification. Its architecture supports a wide variety of complete and incomplete solvers and leverages three key meta-solving techniques to improve efficiency: algorithm selection, probabilistic satisfiability inference, and time iterative deepening. Goose achieves a 47.3% improvement in PAR-2 score across over 800 benchmarks and 13 solvers from VNN-COMP '21.</p>
    <p>
      <a href="https://ceur-ws.org/Vol-3185/extended678.pdf" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         SMT'22
      </a>
    </p>
  </div>
</div>

---

<div class="paper-card" style="display: flex; flex-direction: column; align-items: flex-start; gap: 15px; margin-bottom: 30px; border: 1px solid #ddd; border-radius: 10px; padding: 15px;">
  <div>
    <h2>
      <a href="https://machsmt.github.io/" target="_blank">
        MachSMT: Algorithm Selection for SMT
      </a> 
      (2021)
    </h2>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Authors:</strong>
      Joseph Scott<sup>1</sup>, 
      Aina Niemetz<sup>2</sup>, 
      Mathias Preiner<sup>2</sup>, 
      Saeed Nejati<sup>1</sup>, 
      Vijay Ganesh<sup>1</sup>
    </p>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Affiliations:</strong>
      <sup>1</sup>University of Waterloo &nbsp;|&nbsp;
      <sup>2</sup>Stanford University
    </p>
    <div style="height: 250px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/machsmt.png" alt="MachSMT"
           style="max-height: 240px; width: auto; object-fit: contain; border-radius: 10px;">
    </div>
    <p><strong>TL;DR:</strong> MachSMT is an algorithm selection tool for SMT solvers that supports the full SMT-LIB language. It uses machine learning to build empirical hardness models and pairwise ranking comparators, allowing it to predict solver performance and rank solvers for any given formula. Extensively evaluated on data from SMT-COMP 2019 and 2020, MachSMT frequently improves on the competition winners.</p>
    <p>
      <a href="https://doi.org/10.1007/978-3-030-72013-1_16" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         TACAS'21
      </a>
    </p>
  </div>
</div>

---

<div class="paper-card" style="display: flex; flex-direction: column; align-items: flex-start; gap: 15px; margin-bottom: 30px; border: 1px solid #ddd; border-radius: 10px; padding: 15px;">
  <div>
    <h2>
      <a href="https://link.springer.com/chapter/10.1007/978-3-030-90870-6_6" target="_blank">
        BanditFuzz: Fuzzing SMT Solvers with Multi-agent Reinforcement Learning
      </a> 
      (2021)
    </h2>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Authors:</strong>
      Joseph Scott<sup>1</sup>, 
      Trishal Sudula<sup>1</sup>, 
      Hammad Rehman<sup>1</sup>, 
      Federico Mora<sup>2</sup>, 
      Vijay Ganesh<sup>1</sup>
    </p>
    <p style="margin: 0; font-size: 0.9rem;">
      <strong>Affiliations:</strong>
      <sup>1</sup>University of Waterloo &nbsp;|&nbsp;
      <sup>2</sup>University of California, Berkeley
    </p>
    <div style="height: 350px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/banditfuzz.png" alt="BanditFuzz"
           style="max-height: 340px; width: auto; object-fit: contain; border-radius: 10px;">
    </div>
    <p><strong>TL;DR:</strong> BanditFuzz is a multi-agent reinforcement learning fuzzer that automatically generates inputs exposing performance bottlenecks in SMT solvers. It supports all SMT-LIB theories, lets users control input size, and significantly outperforms random and single-agent fuzzing, achieving up to an 82.6% gain in PAR-2 margins. Tested across 52 logics in SMT-COMP 2020, BanditFuzz uncovered surprising performance issues in major solvers including CVC4, Z3, and Bitwuzla..</p>
    <p>
      <a href="https://link.springer.com/chapter/10.1007/978-3-030-90870-6_6" target="_blank" 
         style="display: inline-block; padding: 6px 12px; background-color: #1b6ec2; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9rem;">
         FM'21
      </a>
    </p>
  </div>
</div>


# AI for scientific discovery

## [Reinforcement Learning via Symbolic Feedback (RLSF) – Chemistry](https://rlsf-llm.github.io/){:target="_blank"}

**TL;DR:**  
RLSF introduces a new way to fine-tune Large Language Models (LLMs) for **molecular design and synthesis** by combining reinforcement learning with **token-level symbolic feedback** from cheminformatics tools such as **RDKit**
Instead of a single success/failure score, RDKit provides **fine-grained chemical error signals** (e.g., valence violations, missing functional groups, or conservation-law breaks) for every token in a generated SMILES string. These signals drive a Proximal Policy Optimization (PPO) loop to iteratively improve the LLM.

**Key Chemistry Tasks and Gains**:
* **Molecule generation:** +8 – 14 % exact match and up to +58 % validity over supervised fine-tuning; outperforms GPT-4 despite using ≈1000× fewer parameters.  
* **Forward synthesis:** +12 % exact match and higher product validity by enforcing conservation of atoms and correct reaction syntax.  
* **Retrosynthesis:** +12 - 34 % exact match improvements by leveraging RDKit to back-check precursors and penalize chemically impossible suggestions.

**Scientific Impact and Next Steps**  
RLSF demonstrates that *symbolically guided reinforcement learning* can dramatically boost the **accuracy and chemical validity** of small open-source models.  
The project team is **extending these techniques to material science and discovering physics theories**, using domain-specific symbolic engines to drive discovery in crystal design, band-gap prediction, and neutrino mass theories.

---

## [Symbolic Density Estimation Through Symbolic Regression: A Decompositional Approach](https://creatixchu.github.io/symbolic-density-estimation/){:target="_blank"}

**TL;DR:**  
We propose the **AI-Kolmogorov Framework**, a decompositional approach that leverages symbolic regression for symbolic density estimation. This method aims to discover interpretable density functions from data, bridging symbolic regression with density estimation for scientific discovery. Our four-stage pipeline decomposes high-dimensional problems through clustering and structure learning, then applies symbolic regression to marginal and conditional distributions. We demonstrate the framework's effectiveness on synthetic mixture models and multivariate distributions, showing it can rediscover underlying distributions while producing interpretable analytic models.

---

## [Discovering Laws of Physics via Interpretable Siamese Neural Networks](https://ml-logic-seminar.github.io/ml_logic_website/siamese.html){:target="_blank"}

**TL;DR:**  
They develop **interpretable Siamese Neural Networks** that detect similarity among data points in theoretical physics (e.g. events in special relativity, electromagnetic field transformations, particle motion in central potentials). In training to cluster similar instances, the model *also* learns symmetry invariants and conserved quantities *without prior domain knowledge*. 

---

## [Logic Guided Genetic Algorithms (LGGA)](https://dhananjayashok.github.io/LGGA/){:target="_blank"}

**TL;DR:**  
LGGA augments symbolic regression (SR) with *auxiliary truths* (domain‐specific known facts) to guide equation discovery. It integrates these truths into scoring (loss) functions and data augmentation to make SR more data efficient. Compared to standard SR tools, LGGA can improve data efficiency by up to ~62% in experiments. 

---

## [Logic Guided Machine Learning (LGML)](https://ml-logic-seminar.github.io/ml_logic_website/lgml.html){:target="_blank"}

**TL;DR:**  
LGML is a two‐phase framework combining a learning model (to propose symbolic expressions from data) and a logic solver (to verify consistency of these expressions against known auxiliary truths). When the logic phase finds inconsistencies, it provides counterexamples back to the learning phase, in a feedback loop. It can learn expressions for things like the Pythagorean theorem and sine function, with many orders of magnitude better data efficiency than standard neural network approaches. 

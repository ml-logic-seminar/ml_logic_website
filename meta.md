# Meta-solving

0. [Goose](https://goosesolver.github.io/){:target="_blank"}  
**TL;DR:** Goose implements three meta-solving techniques. First, ML-driven algorithm selection based on empirical hardness models for runtime prediction. Second, probabilistic satisfiability inference – an ML approach to determine which subproblems are most likely satisfiable. Finally, time iterative deepening an exponentially increasing wallclock timeout of the ML constructed sequential portfolio.

0. [MachSMT](https://machsmt.github.io/){:target="_blank"}  
**TL;DR:** MachSMT is a tool that uses machine learning to predict the run time of SMT solvers for a given formula, enabling efficient solver selection. Extensive evaluations show it frequently outperforms competition winners and improves solver configurations like cvc5.

0. [AlphaSMT](https://arxiv.org/pdf/2401.17159.pdf){:target="_blank"}  
**TL;DR:** Customizable SMT solvers like Z3 boost performance but crafting effective strategies is tough. Our paper introduces Z3alpha, which leverages Monte Carlo Tree Search (MCTS) to automate strategy synthesis, exploring the space efficiently for better performance at lower costs.

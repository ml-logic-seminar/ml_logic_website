# Logic Guided Machine Learning


## Overview
Logic Guided Machine Learning (LGML) is a new approach that combines an ML model (the learning-phase) with a logic solver (the logic-phase) in a corrective feedback loop from the logic-phase to the learning-phase (see Figure below). LGML consists of two phases, namely a learning-phase and a logic-phase with a corrective feedback loop, such that, the learning-phase learns symbolic expressions from input data, and the logic-phase cross  verifies  the  consistency of the learned expression with known auxiliary truths. If inconsistent, the logic-phase feeds back ”counterexamples” tothe learning-phase. This process is repeated until the learned expression is consistent with auxiliary truth. Using LGML, we  were  able  to  learn  expressions  that  correspond  to  the Pythagorean theorem and the sine function, with several orders of magnitude improvements in data efficiency compared to an approach based on an out-of-the-box multi-layered perceptron.


## More Information
1. [Publication](https://cs.uwaterloo.ca/~j29scott/pdfs/aaai20.pdf){:target="_blank"}
2. [Slides](https://drive.google.com/file/d/1ZAYQ_aW3GeN4cgBzookLmx-9wgasvEbv/view){:target="_blank"}
3. [Code](https://github.com/j29scott/LGML-Public){:target="_blank"}

<img alt="LGML" src="{{site.baseurl}}/assets/img/lgml.png">

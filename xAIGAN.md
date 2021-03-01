# xAI-GAN: Enhancing Generative Adversarial Networks via Explainable AI Systems


## Overview
Generative Adversarial Networks (GANs) are a revolutionary class of Deep Neural Networks (DNNs) that have been successfully used to generate realistic images, music, text, and other data. However, GAN training presents many challenges, notably it can be very resource-intensive. A potential weakness in GANs is that it requires a lot of data for successful training and data collection can be an expensive process. Typically, the corrective feedback from discriminator DNNs to generator DNNs (namely, the discriminator's assessment of the generated example) is calculated using only one real-numbered value (loss). By contrast, we propose a new class of GAN we refer to as xAIGAN that leverages recent advances in explainable AI (xAI) systems to provide a "richer" form of corrective feedback from discriminators to generators. Specifically, we modify the gradient descent process using xAI systems that specify the reason as to why the discriminator made the classification it did, thus providing the "richer" corrective feedback that helps the generator to better fool the discriminator. Using our approach, we observe xAIGANs provide an improvement of up to 23.18\% in the quality of generated images on both MNIST and FMNIST datasets over standard GANs as measured by Fréchet Inception Distance. Finally, we argue that xAIGAN enables users greater control over how models learn than standard GANs.


## More Information
1. [Publication](https://arxiv.org/abs/2002.10438){:target="_blank"}
2. [Slides](https://docs.google.com/presentation/d/1JOq9JgHxVA6aa2LVUtXaLrRE9i22HUVRGMpzA9JDixs/edit#slide=id.g82ec8bce15_0_177){:target="_blank"}
3. [Code](https://github.com/vin-nag/XAI_GAN){:target="_blank"}

<img alt="xAIGAN" src="{{site.baseurl}}/assets/img/xAI.png">

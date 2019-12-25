---
title: 3D print a Desktop Cluster
categories: ["Project", "Build", "Instruction"]
tag: ["desktop cluster", "raspberry pi", "rock64", "3d printing"]
type: blog
description: Publishing of the building plan for the first fully 3D printable desktop cluster model
# next: /tutorials/github-pages-blog
# prev: /tutorials/automated-deployments
date: 2019-07-31
author: mvrahden
authorAvatar: hugo-logo.png
image: images/build/desktop-cluster/cluster-1.jpg
lastmod: 2019-09-20
nomenu:
  main:
    parent: build-plans
parallax: >
  <div class="mb-4" style="width: 100%; max-height:170px; height: 30vh; overflow: hidden;">
    <link href="../../css/custom.parallax.css" rel="stylesheet">
    <div class="parallax" style="background-image: url('../../images/build/desktop-cluster/cluster-1.jpg');"></div>
  </div>
---

The first ever fully 3D printable Desktop Cluster chassis 3D-model has been published today.
It is a model, that supports the stacking of <b>up to eight</b> Raspberry Pis, Asus Tinker Board, Rock64 or similar credit-card-sized single board computer (SBC).
This allows you to build a very portable desktop cluster for your home lab, makers space, science or personal projects.
A list of supported devices is provided at the end of this article.
The following graphic shows a front view on the cluster.

<div class="d-block text-center mb-4">
{{< figure src="../../images/build/desktop-cluster/cluster-2.jpg" caption="Figure 1: Front View of the Cluster" >}}
</div>

### What are the components?

The model consists of three towers, each serving its specific purpose.
The <b>front tower</b> holds the SBCs in place, with slides, in which the SBC can be hooked in or out by a 45° angle (see figure 1).
This slide mechanism is by now the most compact 3D-printable way of stacking SBCs and allows for an easier maintenance of the individual devices.<br>
The lifted handle allows accessing the SD-card slots of most devices, making it easy to swap SD-cards without the need of releasing the SBC from the Slide.
The pads at the front of the slide support the SBCs at the location of the front drill holes (according to Raspberry Pi form factor).<br>
Derivatives of the slide could allow the support of further SBC models.
The only restrictions to the facilitation of other than [the mentioned SBC models](#supported-devices) are:
- the location of the Ethernet Plug must be front facing,
- surface mounted components cannot be too far overhanging on the sides,
- the maximum width of the board is the width of a Raspberry Pi.
This means, that this chassis would easily allow boards of Dimensions of the Raspberry Pi 1 Model A+ or similar.
Please be invited to contribute those slide designs.

<div class="d-block text-center mb-4">
  <figure class="container figure text-center">
    <img src="../../images/build/desktop-cluster/slide-1.jpg" alt="Slide" class="img-fluid">
    <img src="../../images/build/desktop-cluster/slide-2.jpg" alt="Slide" class="img-fluid">
    <figcaption class="figure-caption text-center">Figure 1: Slide with Lock mechanism illustration.</figcaption>
  </figure>
</div>

The <b>middle tower</b> has vertical slides with adapter elements that keep the ventilation units in place.
This ensures that the SBCs are continuously cooled, thus won't get damaged through heat emission.
In my own testing, the devices heated up quickly to >80 °C, which is not what we are looking for.
Thanks to the continuous cooling, the boards stay in Temperatures &leq;45 °C.
The slide-design in the middle tower is beneficial in terms of adapter customization for various ventilation products of different sizes and layouts.
The current adapter supports most cooling fans with a 40mm length and width and 10mm thickness.

The <b>back tower</b> holds a power supply and a power distribution mechanism, so that all devices are supplied with their required power.
It also has an IEC 60320 C14 connector with an integrated fused rocker switch on the back.
So the full device is supplied with sufficient power, while being secured from over-voltage and it can be switched on and off on demand (see figure 2).

<div class="d-block text-center mb-4">
<figure class="container figure text-center">
  <img src="../../images/build/desktop-cluster/
rocker-switch.jpg" alt="Slide" class="img-fluid" 
style="max-width: 250px;">
  <figcaption class="figure-caption 
text-center">Figure 2: Fused IEC 60320 C14 
connector with rocker switch.</figcaption>
</figure>
</div>

### What further resources are required?

- Power Supply Unit (PSU) with the right voltage (normally 5V) and enough current<br>(min. 8x3A+1A=25A) resulting in min. 125W.
  - The easiest thing to do is to take a 5V power supply and get 5V compatible cooling fans, such as the ones recommended.
  - This is the recommended one: <a href="https://www.amazon.com/dp/B017YEOAPA/">PSU 5V 60A (300W), actively cooled</a>
  - If you are using a 12V PSU, you want to make use of a capable buck converter to convert down (step-down) the 12V DC to 5V DC for the SBCs.
- Fused IEC 60320 C14 connector with an integrated rocker switch
- Cables of different wire gauges:
  - AWG 16: hot, neutral and ground phase (<a href="https://www.amazon.com/dp/B00TG1TRL2">link</a>)
  - AWG 18: hot and neutral phase (<a href="https://www.amazon.com/dp/B01AQOI36M">link</a>)
  - AWG 22: hot and neutral phase (<a href="https://www.amazon.com/dp/B0746HG158">link</a>)
- Various Crimp connectors and Crimp tools
  - Dupont connectors and pins; male and female (<a href="https://www.amazon.com/dp/B07DZB8NDW">link</a>)
  - Crimp terminals; Male fork spade and female spade insulated (<a href="https://www.amazon.com/dp/B01B1753K2">link</a> and <a href="https://www.amazon.com/dp/B01N0M6PP1">link</a>) <!--  (<a href="">link</a>) -->
- Shrink tubes and cable sleeves
- Solder equipment, such as a solder iron, solder paste and tin
- Power distribution mechanism (DIY or buy)
  - Distribute 5v and ~24A to up to eight devices
  - Distribute 5v and max ~1A to ventilation
  - DIY: Etch your own PCB (please follow online instructions)
  - buy: e.g. terminal blocks/bus bars for power distribution (<a href="https://www.amazon.com/dp/B01DY73N2C">link</a>)
- 4* 40x10mm silent fans, recommended Noctua 4010 PWM (<a href="https://www.amazon.com/dp/B07DXS86G7">link</a>)
- 8 Single Board Computer
  - Raspberry Pi
  - Rock64
  - Asus Tinker Board or alike

### How to mount it?

Starting at the last tower, you mount the PSU bracket to the PSU.
Assemble the cables according to the circuit diagram (see figure 3) and plug them onto the fused C14 connector.
Make sure that the three phases to the PSU are long enough, so you have some flexibility.
Mount the C14 connector to the cable pool part and connect the three phases to the power supply accordingly.
Prepare the phases between PSU and the power distribution mechanism (as it depends on your mechanism, details won't be covered here) and connect them to the PSU.
Mount the power distribution mechanism into the cable pool and slide all elements into the tower.
Mount the top part and this particular tower is complete, continue with the next tower.

<div class="d-block text-center mb-4">
<figure class="container figure text-center">
  <img src="../../images/build/desktop-cluster/c14-circuit-map.png" alt="Slide" class="img-fluid" style="max-width: 350px;">
  <figcaption class="figure-caption text-center">Figure 3: Circuit map for fused IEC 60320 C14 connector with rocker switch.</figcaption>
</figure>
</div>

The middle tower can be assembled very easily.
Use the adapter elements marked with the number "1" and slide them to the bottom.
Insert the first fan and slide the elements marked with number "2" and make sure the fan is set properly with the flow
of air pointing towards the first tower.
You also want to make sure that the cables of the fans are all aligned on the same side.
Continue with the other fans accordingly.
The last adapter elements should end more or less seamless with the top of the tower – no overhanging parts.
Plug the top and this tower is assembled.

The front tower has eight horizontal slides for eight boards.
Hook each board with a 45° angle into the slots of the slides.
The SBCs will be powered through the 40pin header.
The Raspberry Pi GPIO Specification foresees under pin 4 a 5v Power input (red) and under pin 6 a GND connection (black).
This is where the Dupont crimp connectors play an important role, to connect with the GPIO pin headers power supply.
Please make sure that your SBCs specification is aligned to the Raspberry Pi GPIO spec – else you'll need to power your devices accordingly.
Also make sure not to mix up 5v Power and GND, this can hurt your SBC drastically, as most of the devices don't have any power regulation over GPIO inputs and are therefore vulnerable.

Prepare the power supply cables and pack them into cable sleeves nicely with the endings covered by a shrink tube; 2
pairs of three cables and one pair of 2 cables seems to be a good solution.
Guide the cables nicely along the fans and connect them to the power distribution mechanism and to the SBC.
Sliding the SBCs into the tower has to be done a bit with care, as the SBCs are really close to each other.
You don't want to hurt any cables in this process, since they might scratch slightly under the top of the upper slide,
pull them down carefully.
Mount the top and this tower is completed.
Now all three towers can be clipped together with a satisfying "click"-sound.
Assemble the top brackets ("rally stripes") and you are done with the assembly process.

Now you need up to eight network cables and one IEC 60320 C13 cable.
Connect the network cables to your switch and the C13 into the C14 connector and you are all set to start your new toy.
Have fun and <a href="../../provisionings/kubernetes-for-debian">install some Kubernetes</a>!

## Supported Devices

The current slide design for the first Tower – holding the SBC in place – supports all credit-card-sized SBC with the same form factor as the Raspberry Pi in respect of board size and drill holes.
This means concrete that the following devices are certainly supported:

- Raspberry Pi 2, 3B, 3B+ and the new Raspberry Pi 4
- Pine H64 and Rock64 (from Pine64)
- Asus Tinker Board
- Odriod C1, C1+, C2

Other devices, such as Banana Pi or Orange Pi need to be tried out first, as the drill hole positions differ from the Raspberry Pi Specification.
Further Devices with different dimensions are suspect to customization of the design, in particular the slides.

## Support this project and get support

If you like the outline of this project and want to see it grow, show some love and join our facebook group and star the GitHub project.
<div class="row text-center">
  <a href="https://www.facebook.com/groups/openclusters" class="offset-2 offset-sm-3 col-4 col-sm-3"
    target="_blank" rel="noopener noreferrer"><img src="../../images/logo-fb.svg" alt="Image"
      class="img-fluid mb-0 rounded"></a>
  <a href="https://github.com/mvrahden/openclusters" class="col-4 col-sm-3 " target="_blank"
    rel="noopener noreferrer"><img src="../../images/logo-github.svg" alt="Image" class="img-fluid mb-0 rounded"></a>
</div>
---
title: Provisioning Kubernetes (k8s) on Debian-based Systems with Ansible
type: blog
categories: ["Project", "Source Code"]
tag: ["kubernetes", "debian", "raspberry pi", "rock64"]
image: images/provisionings/kubernetes-for-debian/kubernetes-logo.svg
description: presenting a simple solution of how to setup a Kubernetes on multiple nodes using a tool called Ansible
# next: /tutorials/github-pages-blog
# prev: /tutorials/automated-deployments
author: mvrahden
authorAvatar: hugo-logo.png
date: 2019-07-31
lastmod: 2019-09-30
nomenu:
  main:
    parent: provisionings
---

Here I'll present to you a simple solution of how to setup a Kubernetes on multiple Debian-based nodes using a tool called Ansible.

<div class="text-center d-block">
{{< figure src="../../images/provisionings/kubernetes-for-debian/kubernetes-logo.svg" caption="Kubernetes Logo" width="300px" >}}
</div>

## What are the requirements?

You ideally have a bunch of Debian-based systems (they can be virtual machines alternatively to bare metal hosts).
You also have a modern IDE, such as Visual Studio Code, Ansible and git command line tools installed on your machine.
That's it.

## What is Ansible?

Ansible is an auto-provisioning tool.
It helps to bring remote hosts into a desired state.
This means that it does all the setup and configuration on a lot of machines for you – given you have network access to them.
It is great, because it makes use of reusable components (called roles), which are shared through an online repository
with various quality metrics.
Each role describes routines to serve a specific purpose, such as configuring your network interfaces or creating a new user account.
You can also define your own components.
An Ansible role has to be indempotent.
This means, that you can execute (or play) the role as many times as you want, without it varying in its result.

## Kubernetes through a Playbook

But enough of praising Ansible, let's have a look at the actual provisioning work.
Provisioning is done via a collection of roles (called playbook).
With the ansible command line interface tool you can play playbooks, after configuring them according to your needs.
The playbook to provision Kubernetes onto e.g. the 3D-printable [Desktop Cluster]({{< relref "../../build-plans/desktop-cluster.md" >}}) can be found on <a href="https://github.com/mvrahden/ansible-project-kubernetes" target="_blank" rel="noopener noreferrer">GitHub</a>.
The project contains a README.md file which contains all the steps on how to proceed, what to configure and what to prepare.
Please clone the Ansible playbook <a href="https://github.com/mvrahden/ansible-project-kubernetes" target="_blank" rel="noopener noreferrer">mvrahden/ansible-project-kubernetes</a> from GitHub to your local machine.

```shell
git clone https://github.com/mvrahden/ansible-project-kubernetes.git
```

## Homogenize your machines prior to setup

Before running the actual Kubernetes playbook, you are well advised to homogenize your hosts and strengthen the security of your devices to make them less vulnerable to foreign undesired access whilst guaranteeing accessibility and discoverability.
For that, there's a further playbook, which does exactly this homogenization of your devices.
Please have a look at the Ansible playbook <a href="https://github.com/mvrahden/ansible-project-debian-base-setup" target="_blank" rel="noopener noreferrer">mvrahden/ansible-project-debian-base</a> from GitHub.
Also this project contains a README.md file with all the necessary steps.
It's easier than you might think and you'll have things up and running in no time.

```shell
git clone https://github.com/mvrahden/ansible-project-debian-base-setup.git
```

Please don't forget to join the dedicated <a href="https://www.facebook.com/groups/openclusters" target="_blank" rel="noopener noreferrer">Facebook group</a> for further information, to leave feedback and to receive help!

I hope this is an interesting project to you.
Please feel motivated to share it as well.
If you feel frenzy to share your own resources or projects here, please feel welcome to do so as well.

---
institution: "USC - EE 579"
category: "Robotics"
github: "https://github.com/ViSaReVe/timed-vibration-granular-locomotion"
tags: ["Embedded C++", "Robotics", "Firmware"]
featured: false
layout: "project"
title: "Timed-Vibration Quadruped Locomotion"
card_title: "Walking on Shifting Ground"
subtitle: "A quadruped, loose terrain, and timed vibration."
description: "A quadruped, loose terrain, and timed vibration."
year: "2025"
period: "2025"
order: 6
wide: false
cover: "/assets/img/quadruped/chassis-topdown.jpg"
cover_caption: "Chassis top-down · Dynamixel servos, controller, Li-ion pack"
cover_alt: "Top-down photo of the quadruped robot chassis with servos, control board, and battery."
media:
  - type: video
    src: "/assets/vid/quadruped/granular-walk.mp4"
    poster: "/assets/img/quadruped/granular-walk-poster.jpg"
    label: "Full locomotion run on the granular testbed"
    caption: "Full test run on the granular medium — the timed-vibration gait carrying the quadruped across the bead bed."
  - src: "/assets/img/quadruped/chassis-wide.jpg"
    alt: "Quadruped chassis on the work mat"
    caption: "Full chassis on the bench — four Dynamixel XL-320 servos, Arduino-compatible controller, Li-ion pack."
  - src: "/assets/img/quadruped/leg-detail.jpg"
    alt: "Side view of leg linkages and servo mounts"
    caption: "Leg detail — 3D-printed servo mounts driving the linkages, one DOF per leg."
  - src: "/assets/img/quadruped/team-testbed.jpg"
    alt: "Team with the robot and the granular testbed"
    caption: "The team with the robot and the granular testbed — a wooden box of beads standing in for loose terrain."
  - src: "/assets/img/quadruped/team-robot.jpg"
    alt: "Team holding the finished quadruped"
    caption: "Final build, in hand."
---

## The project

Embedded C++ firmware for a quadruped robot walking on granular terrain. I implemented a Buehler-clock gait and drove DRV2605L haptic actuators for timed vibration during leg swing phases — studying how vibration timing affects locomotion on loose substrate.

## Hardware

- 4x Dynamixel XL-320 servos (one DOF per leg)
- 2x DRV2605L haptic motor drivers (front / rear pairs)
- Arduino-compatible microcontroller, Li-ion battery pack
- 3D-printed servo mounts and leg linkages

## What I built

- Buehler-clock gait generator with configurable phase offsets
- Haptic actuation synchronized to the swing phase of each leg
- Multiple gait modes (trot, walk, bound) selectable at runtime
- Real-time power-consumption monitoring over serial debug

## Testbed

A wooden box filled with beads as a repeatable granular substrate — the robot walked the box while we varied vibration timing and gait, watching which combinations kept it moving instead of digging in.

---
title: Revisiting Tacotown
description: Using MagicaVoxel, SpriteStack and Aseprite to bring new life to my old idea to make a mobile restaurant simulator.
date: '2021-07-17'
image: '/img/hotdog.gif'
tags:
---

>

## Tacotown

A number of years ago I got playing with [Ink](https://github.com/inkle/ink) making narrative driven games.

One of the ideas I had was to make a game where you buy a food truck, leave your old life behind to start anew. Beginning your life as a mobile restaurant vendor on the road.

You can play the opening to the game (2 mins) that I made 5 years ago here...

<iframe style="height:400px; background-color:white;" src="https://foopod.github.io/tacotown/"></iframe>

I called this demo Tacotown, I figured that the story could revolve around moving to a city known for being dominated largely by taco trucks. You would have to work your way up the ladder to become top dog of the food truck community in the town.

## Hotdog

A year ago I revisited this game in my stint with Pico8. I want to try to make a hotdog builder. It had different ingredients and customers that would ask for their dog their way (even horrible ideas like a plain dog in a bun, no sauce!).

<img src="/img/hotdog.gif" class="pixelated"/>

This idea though, was just a passing curiousity. I didn't even really finish it, I got distracted and didn't go back.

## Until Now

This time I was inspired by another tool that I had just got my hands on [spritestack.io](https://spritestack.io) and wanted to test it out by making something fairly small and simple.

I was quite excited to use the sprite stacking editor to build up a 3d model out of 2d pixel art. I'm not sure if it was me being impatient, but I quickly swapped over to using MagicaVoxel to do the modelling part (spritestack supports a number of different input files).

![](/img/MagicaVoxel.png)

Then I can use spritestack to render the model at different angles to make spritesheets. You can also tweak a lot of different things, like angle of rotation (if you want to do top down, side on or isometric), lighting, dither, resolution, etc. Tons of options.

![](/img/spritestack.png)

And with this I can export a 64 tile spritesheet in seconds. 

Below is what it looks like on gba after I have done some minor clean up (on some frames there are orphan pixels that I remove). This is the lowest res version, with lighting and dithering effects applied.

<img src="/img/van_3d.gif" class="pixelated"/>

At this point I was amazed. This only took me a few hours (including programming the demo). Now this is a workflow I can get behind.

## The future of Tacotown

This all happened yesterday. Today I decided that I am going to go ahead and try to make this into an actual game. Like a fully functioning one.

I spent half my day on a quick menu screen and the other writing a design doc.

<img src="/img/van-intro.gif" class="pixelated"/>

> Credit goes to Evan Bowman for the excellent font from his GBAJam21 entry [Skyland](https://github.com/evanbowman/skyland).

I am still trying to decide on a bunch of things. But I want to spend the next month or so working on a demo. I will post more here as I get stuck into it.



## Bonus stuff

I will leave you with a 1-bit version of the sprite I also managed to get looking quite nice...

<img src="/img/van_bw.gif" class="pixelated"/>

This was done by rendering it out as full colour and using Aseprite to remap the palette down to black, white and middle grey. Then I replaced the grey with a simple 1-bit dither. 

---
title: Starting another GBA Jam
description: How I got from my last gamejam entry LRO to where we are now. GBAJAM2022!
date: '2022-08-31'
image: '/img/jam_cart.gif'
tags:
  - gamejam
  - gbagamejam2022
---

### The past ~7 months since LRO

My plan after LRO was to keep working on it and eventually release a paid edition with a lot more content and airport themed games. That didn't happen. Instead I got distracted. Life got in they way.

However over all this time inspiration did strike a number of times.

### LRO, but now a full BLOWN RPG!

I downloaded a ton of stock assets from itch.io and started messing around with the idea of creating a game based in an airport to follow on as a sequel from Luggage Retrieval Officer. The idea is that you have been hired by the airports HR team to create training documentation for all the different roles.

In this way you would be able to fully explore the airport, meet everyone and build relationships. But at the same time you would be playing minigames (each persons job) to build up your training material. The idea that once you are good at something yourself then you can train someone else to do it.

Since the game was going to be pretty text heavy, think visual novel + minigames, I decided to write my own dialog engine in python. This meant that I could write dialog like this...

```
@Pene
Hey There!
Welcome to the office.
I'm Pene.
And you must be the new HR Goon.
@me
...
@Pene
Haha, I am joking, relax.
We are all HR Goons around here.
I will let you get settled in for now.
Do you have any questions? [My Desk?] [Coffee?] [I'm Good]

[My Desk?] Oh
Of course.
Yours is the one over there by the window.
Any other questions? [Coffee?] [I'm Good]

[Coffee?] The coffee machine is actually pretty good here.
It is over in the break room.
I can show you where a bit later.
Any other questions? [My Desk?] [I'm Good]

[I'm Good] Great!
I will let you meet everyone.
And when you are ready come find me.
We can grab a coffee and I can tell..
you more about what we do here.
```

And it would end up in the game like this...

![](/img/fairport.gif)

I also got collision maps working when exported from Tiled which is cool. This was a great experience learning how to integrate external tooling in to my GBA game development process (which was actually super easy with the Butano make file).

### Uridium Clone

Having seen the Uridium on C64 a few months earlier I was obsessed with how the spaceship moved and how great it would feel to play a game like this. Could I get a C64 emulator running? No. But still video footage is very cool.

<iframe width="1080" height="400" src="https://www.youtube.com/embed/wU2NYljlnJo?t=50" title="Uridium Longplay (C64) [50 FPS]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I also had a few ideas on how I could make it my own.

- Making the most of the left/right movement, most shmups (Shoot 'em ups) use a single direction or infinite scroll. I was thinking of making the player an interstellar pizza delivery driver, they would have to get in and out safely without letting their ship get damaged or the other pizzas get cold.
- Using Game Design lessons I have learned over the last few months/years. This is a game I could really juice up with screen shake, hitstop, and in general putting as much life into this game as I could without the overbearing need for content.

I got as far as downloading some sample 3d models, rendering sprites in blender and putting together a small demo of flying the ship.

![](/img/uridium_sample.gif)

And boy is it fun seeing that little ship do it's little flip into a barrel roll to turn around.

### Probe Life

I was also inspired seeing a game called In Other Waters, where you explore the oceans using a very only a UI with Topographical maps and controls. As soon as I saw this I thought wow, that would be a cool way to make the most of the GBA's limited screen size.

With the GBA I tend to avoid classical UI elements (health bars, score, etc.), they tend to take away from the game and can be hard to see. But I wouldn't have the problem if the game was all UI?!?!

So I took the time to map out what this could look like. And came up with something I was pretty happy with.

The ideas is that Earth is nearing its final days and most humans are employed in jobs trying to find suitable planets for humanity to populate. You control a life probe, a drone on another planet with the goal of finding signs of life.

![](/img/ui_2.png)

Some of the functionality is already thought out (left to right, top to bottom)

1. **Clock** - so you know the time or maybe just a countdown to next sunset/sunrise
2. **Navbar** - a lot of information can scroll across the top to be read
3. **Buttons** - Observe, Weather, Status - reads out info across the navbar
4. **State** - Battery, Signal (to transmit back home), Sol (qty of solar energy incoming)
5. **Map** - Topographical map of surrounding area
6. **det** - Self-destruct button
7. **Scan** - Scan surroundings to detect objects/terrain/lifeforms'
8. **Torch** - At night you may need a torch?
9. **Controls** - To move choose direction and trajectory, then press green button
10. **Delve** - Onboard systems with AI for analysis of objects found.

The idea would be that everything uses energy, so manage it carefully and do as much exploring as you can each day.

Fun fact - I even wrote a small optimizer using MSE to reduce the number of tiles in my topographical maps.

I made a tiny demo for this game too.

![](/img/probe_life.gif)

Some mock ups of what the delve system would look like for a creature...

![](/img/probe_life_delve_example.jpg)

### Trivia Party

Lastly, about once a week I hang out with friends or family and play boardgames. Lately there has been a bit of a trend towards playing trivia games on something like Jackbox or some other app that runs on the TV and everyone answers on their phones.

Honestly, I hate trivia. It's a nightmare, who decided that taking random tests at home and comparing results was fun?

My plan was to make a game that appeased everyone with trivia questions, but also had other minigames hidden within it.

You start up the game, put in everyone's names and choose how many rounds you want to play. Then...

1. The GBA asks to be passed to someone.
2. They read out the type of minigame, e.g. trivia, charades, etc (button to explain if people haven't played before)
3. They read out the prompt
4. Once done they can give points to the players how they see fit.

This simple format can actually fit a wide variety of games.

- **Trivia** - straightforward, buzz in, first to buzz and correctly answer gets the point
- **Charades** - the holder of the GBA acts out a word. Scoring is a little different, if someone gets it then the holder also gets a point.
- **Imitate** - everyone gets a turn to make a sound imitating the prompt. Prompts could be anything ranging from easy ones like 'chicken', medium ones like 'a french accent' and hard ones like 'my car won't start'. Best imitation gets the point.
- **Rock paper scissors** - self explanatory, winner of the group gets the point
- **Spelling Bee** - buzz in, first to correctly spell out loud gets the point
- **Never have I ever** - holder finishes the sentence and everyone that has done the thing loses a point
- **Entropy** - holder chooses a person to get no points this round, that person can choose someone else, continue until there is one person that hasn't been chosen. That person gets a point this round.

Please bare with me for this horribly rudimentary example.

![](/img/trivia.gif)

### GBAJAM 2022

So. Now we come to yet another jam (YES, I know we are already a month in) and I have yet to decide whether any of these prototypes is worth taking another look at or if I should try something else.

I plan to start posting more often though, so hopefully I can decide in the next few days.

Oh yeah, this year I am judging and I got to help out making the GBAJAM2022 demo cart.

![](/img/jam_cart.gif)

You can check that our [here](https://github.com/gbajam22/gbajam22.github.io).

Also now you can comment on my posts below.

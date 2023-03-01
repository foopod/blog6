---
title: Nuclear Love
description: A last minute entry to GBAJam2022
date: '2022-11-11'
image: '/img/nuclear-love.gif'
tags:
  - gamejam
  - gbajam2022
---

You can look at my last couple of posts for my grand desires to compete in GBA Jam 2022. But the best laid plans and all that.

I ended up not actually starting any sort of entry until the 28th of October. 3 days till the jam ends.

So I sit down with my brother for coffee and we get chatting. It would be cool to do a Halloween themed game since the game ends on October 31st. We spitball some ideas and end up talking about doing a post apocalyptic dating game.

Introducing...

![](/img/banner.png)

We jam on the idea and come up with a few characters...

- Blob (A mutated mass of flesh and skin)
- A zombie with a scottish accent
- Linda the lobster lady
- A sentient trash compactor
- Ted (a normal guy, wears a sweater)
- Mom (look there aren't a lot of options)
- Unwilling Participant (some guy in a cage that just doesn't want to be there)
- Jack (a jackhammer brought to life)
- DJ Mike (deaf, but surprisingly strong musical skills)
- Eleanor (machetes for hands)
- A pigeon
- A Skeleton Man

Here is the first pass of Blob (lol, also the last pass?)

![](/img/blob.png)

In a past post I mentioned a dialog system I had been working on. I took inspiration from there, but it really needed an overhaul to work for this purpose. So I set to work fixing that up to handle characters with different emotions, much longer conversations, scenes.

But once that was working we just started pumping out a ton of artwork and dialog to fill in the gaps.

I really wanted to fit in as many characters as possible, but once we started writing we realised that it would be too much work for 3 days. Instead we chose to focus on just four and turn it into a dating show.

We landed on Blob, Duncan (a scottish trashcan robot), Linda (the lobster lady) and Skully (a skeleton man).

Luckily in a bunch of past games I have done a lot of dialog. So reusing bits and pieces of code from around the place we were able to put together a scene with some branching dialog.

This is an example of how the branching dialog works, an excerpt from our date with Duncan...s

```
@me
A foodtruck ay...
Do you come here often?
@Trash
You cud say thart.
@me
Hmmmm...
So you come here to? [Work] [Sleep] [Hangout]

@me
[Work] So you work here?
@Trash
This is mah foodtruck. ->foodtruck
```

With the help of modern tools like Stable Diffusion and Aseprite we were able to churn out the background images super quickly. And sticking to a limited palette for everything made the sprites simpler to draw too.

Although everything does look a little... rustic?

![](/img/skeleton_bg.png)

After all that we did manage to get the game in at the last moment.

However we were informed of a major bug a few hours later. Apparently I overlooked some minor code that let you choose your final date. So no matter how everything went you always ended up with Blob. Yeah. Not great.

We eventually released a fix, but left the original there for posterity and to be judged for the jam.

Check it out on [itch.io](https://foopod.itch.io/nuclear-love)
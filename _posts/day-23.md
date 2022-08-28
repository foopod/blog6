---
title: Will this be a game?
description: Game Design - How to turn this from a tech demo to an actual game?
date: '2021-05-02'
image: '/img/dungeon.gif'
tags:
    - gamejam
    - gbagamejam2021
---

>
## GBAGameJam - Days 20-23

### Lets talk game design

Okay. We are at the point where I need to try to figure out if this is going to be a real game or not. So I came up with a game design pitch, another level, a world map, abilities, collectables and more.

### Pitch

You arrive home to find your place in ruins, your wife and children are missing. Find out what happened and save them by unlocking the secrets of the past hidden under the island you have lived your whole life.

Simple and to the point. The main character is going to have to find all the kittens and eventually his cat wife. Collect scroll pieces to uncover the past of the island and unlock abilities used to explore the island.

### A World Map (or the beginnings of one)

The plan is for the game to take place on an Island. You start at the top of the mountain that this small village of cats have made their home. You can eventually explore the mass of tunnels in the mountain, the cliff face, the forest to the left and the beach to the right.

This is the mock up, with plenty of room for extras...

![](/img/worldmap.png)

I want the world to be as open as possible at the beginning so that the player can explore most biomes immediately and then later unlock certain parts of them, or for example eventually go deeper into the tunnels.

### A New Level

I did a pixel_dailies a few weeks ago, of which I am very proud. This piece was the inspiration for a new level for the game.

![](/img/superboss.png)

I really like the way the tiles for the platforms melt into the background. So I created a new tileset...

![](/img/tilemap_dungeon.bmp)

And created a new level.

![](/img/dungeon.gif)

The idea was that this would be the caves directly below where the character lives. I also took the time to redo some of the collisions and how I import the colliders for the maps too.

I now have 3 separate list of floor, wall and ceiling tiles that are populated when a map is loaded. The first row of the map data has the tiles separated by empty tiles. This makes map making a lot faster as I only need to set up the collisions for each tile once, then I can just focus on the map.

So my new class `Level` has a constructor that looks like this...

``` cpp
Level::Level(bn::affine_bg_ptr bg)
{
    bool processed_map = false;
    int index = 0;
    int empties = 0;
    _floor_tiles = {};
    _wall_tiles = {};
    _ceil_tiles = {};
    bn::span<const bn::affine_bg_map_cell> cells = bg.map().cells_ref().value();
    
    while (!processed_map)
    {
        if(bg.map().cells_ref().value().at(index) == 0){
            ++empties;
            if(empties > 2){
                processed_map = true;
            }
        } else {
            if(empties == 0){
                _floor_tiles.push_back(cells.at(index));
            } else if(empties == 1){
                _wall_tiles.push_back(cells.at(index));
            } else if(empties == 2){
                _ceil_tiles.push_back(cells.at(index));
            }
        }
        ++index;
    }
}
```

### Rewards

In each level the player will have to rescue one of their kittens. My plan is to also leave pieces of parchment dotted around the map. Some will have story dialog, others together will form a spell to unlock a new ability.

I am still not sure about health or other "stat" collectables. I think it would be good to in fact make it impossible for the player to die, perhaps instead simply being knocked back by enemies. Since this is for a gamejam I want the game to be fun and open to all, not just hardcore platformer people.

I also want to add totems and other characters to the maps, some with dialog and perhaps even allow player to choose dialog paths. I want to encourage the player to explore, so the more fun and diverse rewards we can hand out the better.

Here are some sprites I had fun making..

![](/img/other_things.gif)

### Abilities

I was struggling to come up with abilities before. But now that I have some semblance of a storyline and a good excuse for weird abilities (aka mysterious ruins) I can be a lot more creative.

#### Yarn Ball

I am still really keen for the yarn ball idea, purely because of the mechanics behind it and being able to use collisions to make it bounce around the level when used. It is also cutesy and kind of funny.

#### Psychic Abilities

If I haven't already mentioned I am using the Pico8 palette for all my sprites so far, I really dig the purple, but haven't had much of a chance to use it yet. Queue psychic or ghost energy, not entirely sure exactly what this means, but I think there is a lot of potential. It could be a blast of energy for taking out enemies, maybe an ability to move objects around inside a level or even a movement ability like being able to float or hover in air for a few seconds to reach somewhere new.

#### Is Dash out the window?

Yes.

[tag for day-23](https://github.com/foopod/gbaGamejam2021/releases/tag/day-23) [.gba](https://github.com/foopod/gbaGamejam2021/releases/download/day-23/feline-day23.gba)

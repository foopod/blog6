---
title: Another Level, Dialogue and NPC's
description: Thanks to Butano's excellent Docs, I am still making progress even without internet
date: '2021-05-06'
image: '/img/loading.gif'
tags:
    - gamejam
    - gbagamejam2021
---

>
## GBAGameJam - Days 24-27

### Off the Grid

The last 3 nights I have been staying in a campsite with no cell reception. But thanks to the awesome docs bundled with Butano, I haven't really hit any major snags.

And without the distractions of the internet I have made a lot of progress in the last few days.

### New Level

Our story has to start somewhere, and the idea being that the bad guy broke in and kidnapped our hero's family. We should start there. At home.

![](/img/home.gif)

Am I super happy with this level? No. But I am adding scope faster than I am finishing things, so this will have to do for now. You may have already seen a sneak peek at the next thing that is coming.

### NPCs and Dialogue

This game will have NPCs and enemies, I definitely don't want a dialogue heavy game. But a little in the right places is enough to further the story and create depth.

This wasn't as much work as I thought it would be either. I am trying to keep the code light in these updates as the source is linked and you can dig if you are interested. But I will still share a little.

``` cpp

namespace fe
{
    class NPC
    {
        private:
            NPC_TYPE _type;
            bn::fixed_point _pos;
            bn::camera_ptr _camera;
            bn::optional<bn::sprite_ptr> _sprite;
            bn::optional<bn::sprite_animate_action<2>> _action;
            bool _is_talking = false;

            bn::span<bn::string_view> _lines;
            int _currentLine = 0;
            int _currentChar = 0;
            bn::string_view _currentString = "";

        public:
            NPC(bn::fixed_point pos, bn::camera_ptr camera, NPC_TYPE type);
            void update();
            bn::fixed_point pos();
            bool near_player(bn::fixed_point player_pos);
            bool is_talking();
            void talk();
    };
}
```

The constructor takes an `NPC_TYPE` enum and sets the sprite and `_lines` text that the charater will say. Then I can just call `update()` every frame, `talk()` when `near_player(player_pos)` and they choose to interact.

`_current_line` and `_current_char` are used as indexes for where the conversation is up to, each frame a new char is added to the screen to get the cool text appearing animation.

It ends up looking pretty good imo...

![](/img/npc.gif)

### Minor things...

I am going through the process of trying to improve my sprite work. Some of this has involved adding more detail to the existing dungeon map from last week.

Layering backgrounds to add a parallax effect.

![](/img/dungeon_layers.gif)

I also took some time to have a go animating the cat sprite again at a higher resolution. At the moment everything is at a 2x scale, so I figure I might as well try to make it look nicer.

Sprite on the right is the original.

![](/img/cat-sprite-v2.gif)

Okay, chonky leg boy. I know what you need...

![](/img/cat-sprite-v3.gif)

Better. But cats have 4 legs, not 2.

![](/img/cat-sprite-v4.gif)

Worse. Much worse. Okay, maybe time to give up on this and come back later when I have reference pictures.

The last minor thing I added was a loading screen and the ability to transition between levels. Actually the only reason for the loading screen is because the transition between levels was too quick without it, it ended up being a pretty jolting experience without it.

![](/img/loading.gif)

Yeah, it is hella cute.

And this is where I have spent the last few days...

![](/img/tofu_pureora.jpg)


> Also note below I am also now including playable copies of the .gba each time I make an update.

[tag for day-27](https://github.com/foopod/gbaGamejam2021/releases/tag/day-27) [.gba](https://github.com/foopod/gbaGamejam2021/releases/download/day-27/feline-day27.gba)

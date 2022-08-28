---
title: Let's draw a sprite!
description: Drawing a sprite in Butano for GBA
date: '2021-04-12'
image: '/img/day-2.png'
tags:
    - gamejam
    - gbagamejam2021
---

>
## GBAGameJam - Day 2

Okay lets do this. Lets try to get as far as I can doing this with assets from an old game.

This is the Butano Sprite Example..

``` cpp
/*
 * Copyright (c) 2020-2021 Gustavo Valiente gustavo.valiente@protonmail.com
 * zlib License, see LICENSE file.
 */
void sprites_visibility_scene(bn::sprite_text_generator& text_generator)
    {
        constexpr const bn::string_view info_text_lines[] = {
            "A: hide/show sprite",
            "",
            "START: go to next scene",
        };

        info info("Sprites visibility", info_text_lines, text_generator);

        bn::sprite_ptr red_sprite = bn::sprite_items::red_sprite.create_sprite(0, 0);

        while(! bn::keypad::start_pressed())
        {
            if(bn::keypad::a_pressed())
            {
                red_sprite.set_visible(! red_sprite.visible());
            }

            info.update();
            bn::core::update();
        }
    }
```

But really the only thing we need is `bn::sprite_ptr red_sprite = bn::sprite_items::red_sprite.create_sprite(0, 0);`

Also have a look at [how to do imports](https://gvaliente.github.io/butano/import.html) to get your image files into Butano.

So lets draw something to the screen...

![](/img/day-2.png)

Check out the tag [day-2](https://github.com/foopod/gbaGamejam2021/releases/tag/day-2) on this repo to see the code in this state.

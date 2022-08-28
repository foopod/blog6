---
title: Detecting Map Tiles
description: Detecting where on the map our character is
date: '2021-04-21'
image: '/img/day-12.gif'
tags:
    - gamejam
    - gbagamejam2021
---

>
## GBAGameJam - Day 12

Okay. I did it!

I figured out how to get map data so I can start using tile data to figure out collisions.

So as before. We have our bg that we made..

`bn::affine_bg_ptr map_bg = bn::affine_bg_items::map.create_bg(256, 256);`

And I finally found out that you can call `map_bg.map().cells_ref()` to get the pointer to the cells of the map. You can then call `.value()` on it to get the actual data in a [span](https://gvaliente.github.io/butano/classbn_1_1span.html) (kind of like an array?).

So we can use `map_bg.map().cells_ref().value()` to get the cells and `at(x)` to get the cell at x. The map cells are a 1d array organised like this...

``` cpp
1 2 3
4 5 6
7 8 9
```

So I made a helper method to get the cell number of an x and y co-ord. Which ends up being something like this..

``` cpp
bn::fixed get_map_index(bn::fixed tile_x, bn::fixed tile_y, bn::fixed columns)
{
    return (tile_y * columns) + tile_x;
}
```

IMPORTANT NOTE : My actual code is not this pretty.

So now I am just logging the tile at my sprites co-ordinates, which works surprisingly well considering it isn't optimized at all and I have no idea what I am doing.

This will be the basis of collisions and I have a little hacky plan for making it easier for myself, but I will share it later.

I also took the time to add some text to show the current tile my player is over. The [examples](https://gvaliente.github.io/butano/examples.html) are really good for this.

For this I needed all of these..

``` cpp
#include "bn_string_view.h"
#include "bn_vector.h"
#include "bn_sprite_text_generator.h"
```

Plus the sprite font from the example... `variable_8x16_sprite_font`

And then the following..

``` cpp
// make a text generator using the font supplied, you can use your own images for your own font if you want
bn::sprite_text_generator text_generator(variable_8x16_sprite_font);

// sets the text horizontally in the centre
text_generator.set_center_alignment();

// make a vector to store pointers to the sprites we are using
bn::vector<bn::sprite_ptr, 32> text_sprites;

// and then in our loop..

while (true)
{
    // clear the previous frames text
    text_sprites.clear();

    // generate the new text
    text_generator.generate(0, -40, currentCell, text_sprites);

    bn::core::update();
}

```

Pretty happy with what I have acheived today. Can rest easy tonight.

![](/img/day-12.gif)

Oh. Also todays tag -> [day-12](https://github.com/foopod/gbaGamejam2021/releases/tag/day-12)

OMG. Almost forgot the most important thing. I learned how to cast integers to strings.

``` cpp
bn::to_string<32>(my_integer);
```

And tonight I have homework reading the following about pointers...

+ [https://www.geeksforgeeks.org/auto_ptr-unique_ptr-shared_ptr-weak_ptr-2/](https://www.geeksforgeeks.org/auto_ptr-unique_ptr-shared_ptr-weak_ptr-2/)
+ [https://docs.microsoft.com/en-us/cpp/cpp/how-to-create-and-use-shared-ptr-instances?view=msvc-160](https://docs.microsoft.com/en-us/cpp/cpp/how-to-create-and-use-shared-ptr-instances?view=msvc-160)

---
title: Attacking Animations and Enemies
description: Jono gets stuck for a bit trying to figure out points, we add player attacks, enemies to attack, along with their animations and funky physics
date: '2021-05-17'
image: '/img/enemy-logic.gif'
tags:
    - gamejam
    - gbagamejam2021
---

>
## GBAGameJam2021 | Making a game for the Gameboy Advance

### Day 40

Okay, so in a lot of projects there comes a part where a lot of work is needed for little reward. I always struggle to find motivation  in these parts. Queue a week of procrastinating.

But this week I...

+ Refactored the player class so that an instance of Player lasts for the whole game.
+ Added enemy class and an enemy list in the Player class.
+ Adding attacking hitboxes.
+ Struggled with the below problem for a whole day!

ARHGH!! Okay. So I got stuck on this for ages and it really did my head in. I am trying to use pointers for the first time, so no wonder this kind of thing went wrong.

When I spawn my character into a level I call its spawn method and pass in the list of enemies...

``` cpp
// player.h
private:
    bn::vector<Enemy,32>* _enemies;

public:
    void spawn(bn::vector<Enemy,32>& enemies);
            

//player.cpp
void Player::spawn(bn::vector<Enemy,32>& enemies)
{
    _enemies = &enemies;
}

_enemies->at(0).position(); //returns original position

//scene.cpp
player.spawn(enemies);
enemies.at(0).position(); //returns current posiiton
```

Getting the enemies location in my scene works fine, but the _enemies vector (list for us newbies) in the player class doesn't get updated.

After much frustration and some help from the amazing people on the gbadev discord I got this fixed.

I was creating the vector like this...

``` cpp
bn::vector<Enemy, 32> enemies = {};
Enemy bat = Enemy(200, 952, camera, map, ENEMY_TYPE::BAT, 1);
enemies.push_back(bat);
Enemy slime = Enemy(112, 952, camera, map, ENEMY_TYPE::SLIME, 2);
enemies.push_back(slime);
```

Not knowing that the `push_back()` function copies the items into the array :|.

Now it looks like this...

``` cpp
bn::vector<Enemy, 32> enemies = {};
enemies.push_back(Enemy(200, 952, camera, map, ENEMY_TYPE::BAT, 1));
enemies.push_back(Enemy(112, 952, camera, map, ENEMY_TYPE::SLIME, 2));
Enemy& bat = enemies[0];
Enemy& slime = enemies[1];
```

Okay. Done. That is it for the boring stuff. Now on to the cool stuff.

But first, a thank you to [GValiente](https://github.com/GValiente), the author of [Butano](https://github.com/GValiente/butano) (the engine I am using). Without Butano I would have struggled a lot with C and would have been bogged down doing the really boring stuff. Thankfully with Butano I can actually develop games for the Gameboy Advance (GBA).

### Animations

I added some animations for the cat's attack..

![moving image of a cat swiping its paw](/img/attack-animation.gif)

Later in the game I want our main character to unlock some super awesome abilities, but right now he needs some sort of default attack that can get him through at least a couple of slimes and a bat.

### Enemies

I started with a couple of really simple enemy animations (2 frames for movement, 2 frames for death)...

![moving image of a slime enemy and a bat enemy bouncing up and down, then they fade](/img/enemies.gif)

One of the games on GBA that I love the most was Castlevania:Aria of Sorrow. This game had [over a hundred different types of enemies](https://castlevania.fandom.com/wiki/Aria_of_Sorrow_Bestiary) and huge variation in combat style and movement. We are talking walking, crawling, flying, bouncing up and down, shooting projectiles, stabbing, breathing smoke that turns you to stone. Hell there is a skeleton that throws bones at you and when he is out, he throws his own skull.

I know I can't do all of this, especially in a time boxed gamejam, but my inspiration is to create a world that feels rich like the world of Castlevania.

To acheive this I want to make each enemy feel organic and a bit special.

Lets start with our slime. When I initially coded him he just went back and forth between two chosen positions and wasn't really impacted by our characters attack.

To liven him up I implemented similar physics that our main character uses. So now he can be placed anywhere on the map and avoid running into walls or falling off ledges.

![moving image of a slime going to the edge of a platform and then turning before it falls off](/img/enemy-logic.gif)

I wanted to take this a bit further. The slime will be a fairly basic early game enemy (maybe like the zombie in Castlevania). My take on this is that slimes don't have brains, they probably just wander around looking for a food source not really taking in their surroundings. They probably don't even care when they are attacked.

Queue slime bounce...

![each time the cat swipes at the slime it gets thrown into the air and knocked about](/img/slime-bounce.gif)

A very simple enemy to get the player used to the handling of the game and attacking. This one has a little more health than usual to show off throwing him around.

I am still working on the bats though, hopefully I can show you them a bit more in the next update. 

Also coming up next is the player getting damaged by enemies and maybe some form of UI? 

However in other games I have made I have tried to avoid UI's, I tend to lean towards inluding as much in game as possible. I really like the way this is done in games like Celeste, using the characters hair colour to show how many more dashes the character can do before touching the ground. Or in racing games using visual defects or smoke to show how damaged the vehicle is.

So yes. Expect something weird, but hopefully still intuitive to display health. Hit me up on [Twitter](https://twitter.com/foocodes) or Discord (Jono#0378) if you have any ideas.


[tag for day-40](https://github.com/foopod/gbaGamejam2021/releases/tag/day-40) [.gba](https://github.com/foopod/gbaGamejam2021/releases/download/day-40/feline-day40.gba)


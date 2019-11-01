# Design-a-Game
Planning for a game
 
Ninja Fighting Game:
  Game is a static screen side view
  randomly generated platforms set the stage per level
  GUI at bottom of the screen displays player health
      design choice to not show enemy health, goes with the mysterious ninja aesthetic
      upgrades only displayed in shop
      
Bonus Experimental Feature:
player can use ingenuity to distract 2nd player and activate console to edit own stats
  encouraged by game

Singleplayer mode:
Computer sends waves of fodder enemies that slowly get stronger and more numerous
See how far player can get
Score mechanic: 1 point per enemy, scaling with each level (+1)
each enemy gets a stat boost each advance in level (+sqrt(level))

Enemies:
the player ninja model but different color

Multiplayer Modes:

Waves:
P2 can join in on the wave fighting, but enemies are slightly stronger (scaling +sqrt(level+0.2) stats per level)

PVP:
Each chooses a character in a series of rounds, picking upgrades from the shop after each round and counter picking
Can pick best of 1, 3, 5, etc

Upgrade shop:
Players buy special move upgrades to counter other characters, has an upgrade tree so player has to pick between upgrade options
Can also use upgrade points to increase attack, defense, hp

Default P1 Controls:
W- jump
A- move left
S- crouch
D- move right
E- normal move
R- special move
WASD + E - directional normal move
WASD + R - directional special move
*Controls must be changeable by player


Characters:

Ninja - has katana
Moves
E - slash (separate animation when pressed twice in succession)
S+E - leg sweep
A/D+E - sword thrust
W+E - shuriken throw at a diagonal direction down
R
Left Upgrade Tree - projectile deflect in random direction
Projectiles are now reflected back at opponent
Reflected projectiles faster and stronger
Right Upgrade Tree - Unlock katana dash
Dash inflicts a Damage over Time effect
Dash goes further and does more damage


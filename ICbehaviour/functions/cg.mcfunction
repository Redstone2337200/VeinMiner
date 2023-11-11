function cg_ore

function cg_log

function ct_fw

#execute as @e[type=snowball] at @s run scoreboard players add @p 菜单 1

#execute as @e[type=snowball] at @s run give @p snowball

#execute as @e[type=snowball] at @s run kill @s

#scoreboard players reset @a[scores={菜单=3..}] 菜单

#execute as @a[scores={磁铁=1}] at @s run tp @e[type=item,r=15] @s

#execute as @a[scores={磁铁=0}] at @s run scoreboard players reset @s 磁铁

#title @a[scores={菜单=1}] actionbar 磁铁模式:§l§a开启

#title @a[scores={菜单=2}] actionbar 磁铁模式:§l§c关闭

#execute as @a[scores={菜单=1}] at @s run scoreboard players set @s 磁铁 1

#execute as @a[scores={菜单=2}] at @s run scoreboard players set @s 磁铁 0
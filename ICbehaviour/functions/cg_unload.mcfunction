#移除

tellraw @a {"rawtext":[{"text":"§e[§aM§bV§dP§6+§e]§f连锁采集19>>§5正在移除组件"}]}
gamerule commandblockoutput true
gamerule sendcommandfeedback true

#移除记分板

scoreboard objectives remove a  
scoreboard objectives remove b  
scoreboard objectives remove c  
scoreboard objectives remove d  
scoreboard objectives remove e  
scoreboard objectives remove f  
scoreboard objectives remove g  
scoreboard objectives remove h  
scoreboard objectives remove i  
scoreboard objectives remove j  
scoreboard objectives remove k  
scoreboard objectives remove l  
scoreboard objectives remove m  
scoreboard objectives remove n  
scoreboard objectives remove o  
scoreboard objectives remove p  
scoreboard objectives remove q  
scoreboard objectives remove r  
scoreboard objectives remove s  
scoreboard objectives remove t
scoreboard objectives remove u
scoreboard objectives remove v
scoreboard objectives remove gilded
#scoreboard objectives remove 菜单  
scoreboard objectives remove 磁铁  

tellraw @a {"rawtext":[{"text":"§e[§aM§bV§dP§6+§e]§f连锁采集19>>§5移除完成"}]}

tellraw @a {"rawtext":[{"text":"§e[§aM§bV§dP§6+§e]§f连锁采集19>>§5可再次输入/function cg_reload或者/function cg_help即可再次启动本组件"}]}

tellraw @a {"rawtext":[{"text":"§e[§aM§bV§dP§6+§e]§f连锁采集19>>§5还可以通过在聊天中发送 #cg-help 来启动本组件"}]}
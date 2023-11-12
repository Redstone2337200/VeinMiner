tellraw @a {"rawtext":[{"text":"§e[§aM§bV§dP§6+§e]§f连锁采集19>>§5正在加载插件数据"}]}

gamerule commandblockoutput false
gamerule sendcommandfeedback false

#创建计分板

scoreboard objectives add a dummy
scoreboard objectives add b dummy
scoreboard objectives add c dummy
scoreboard objectives add d dummy
scoreboard objectives add e dummy
scoreboard objectives add f dummy
scoreboard objectives add g dummy
scoreboard objectives add h dummy
scoreboard objectives add i dummy
scoreboard objectives add j dummy
scoreboard objectives add k dummy
scoreboard objectives add l dummy
scoreboard objectives add m dummy
scoreboard objectives add n dummy
scoreboard objectives add o dummy
scoreboard objectives add p dummy
scoreboard objectives add q dummy
scoreboard objectives add r dummy
scoreboard objectives add s dummy
scoreboard objectives add t dummy
scoreboard objectives add u dummy
scoreboard objectives add v dummy
scoreboard objectives add gilded dummy
#scoreboard objectives add 菜单 dummy
scoreboard objectives add 磁铁 dummy
scoreboard objectives add 范围 dummy

#设置初始值
#六种矿石
scoreboard players set @p a 1
scoreboard players set @p b 1
scoreboard players set @p c 1
scoreboard players set @p d 1
scoreboard players set @p e 1
scoreboard players set @p f 1
#四种木头
scoreboard players set @p m 1
scoreboard players set @p n 1
scoreboard players set @p o 1
scoreboard players set @p p 1
#磁体范围初始值
scoreboard players set @p 范围 5

tag @p add play

give @p clock 1 1

tickingarea add circle ^ ^ ^ 4 reload

tellraw @a {"rawtext":[{"text":"§e[§aM§bV§dP§6+§e]§f连锁采集19>>§5加载完成"}]}

tellraw @a {"rawtext":[{"text":"§e[§aM§bV§dP§6+§e]§f连锁采集19>>§5系统自动开启6种矿石的连锁和4种木头的连锁"}]}
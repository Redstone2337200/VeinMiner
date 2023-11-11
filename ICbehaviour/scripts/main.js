
import { world, system } from "@minecraft/server"
import { ActionFormData, MessageFormData, ModalFormData } from "@minecraft/server-ui"
import { runCmd } from './command'

//插件菜单
function TestActionUI(player){
    const menu = new ActionFormData()
        .title("连锁采集20.2")
        .body("欢迎使用§a连锁采集20.2§e-全新的连锁采集模组")
        .button("关于插件","textures/icons/icon.png")
        .button("配置界面","textures/icons/cg.png")
        .button("测试表单","textures/items/clock_item.png")
        .button("礼包代码","textures/items/paper.png")
        .button("随机数字","textures/icons/random.png")
    menu.show(player).then((menu)=>{
        if(menu.selection == 0){
            AboutMassageUI(player)
            runCmd.overworld(`say 关于插件被按下`)
        }
        if(menu.selection == 1){
            ConfigActionUI(player)
            runCmd.overworld(`say 配置界面被按下`)
        }
        if(menu.selection == 2){
            QuestionModalUI(player)
            runCmd.overworld(`say 测试表单被按下`)
        }
        if(menu.selection == 3){
            GiftModalUI(player)
            runCmd.overworld(`say 礼品代码被按下`)
        }
        if(menu.selection == 4){
            runCmd.overworld(`scoreboard players random @p random 1 10`)
            runCmd.overworld(`tellraw @p {"rawtext":[{"text":"§l§a本次的随机数为："},{"score":{"name":"@p","objective":"random"}}]}`)
            runCmd.overworld(`tellraw @p {"rawtext":[{"text":"§l§a随机数生成成功！"}]}`)
        }
    })    
}

//信息窗口
function AboutMassageUI(player){
    const about = new MessageFormData()
        .title("关于插件")
        .body("这是利用全新的游戏测试API-UI而写的一个§b连锁采集9.0系列的升级版，减少了部分繁琐代码，缩小插件使用的大小，同时还有一些新的功能，§e当前版本：0.0.2")
        .button1("确定")
        .button2("取消")
    about.show(player).then((about)=>{
        if(about.selection == 0){
            runCmd.overworld(`say 取消被按下`)
        }else{
            runCmd.overworld(`say 确定被按下`)
        }
    })    
}

//配置界面
function ConfigActionUI(player){
    const config = new ActionFormData()
        .title("配置界面")
        .body("这里用于配置你的连锁采集部分，但大部分都用函数指令完成")
        .button("加载连锁","textures/icons/reset.png")
        .button("移除连锁","textures/icons/close.png")
        .button("连锁配置","textures/items/compass_item.png")
    config.show(player).then((config)=>{
        if(config.selection == 0){
            runCmd.overworld(`function cg_reload`)
            runCmd.overworld(`say 加载连锁被按下`)
        }
        if(config.selection == 1){
            runCmd.overworld(`function cg_unload`)
            runCmd.overworld(`say 移除连锁被按下`)
        }
        if(config.selection == 2){
            VeinminerActionUI(player)
            runCmd.overworld(`say 连锁配置被选中`)
        }
    })    
}

//连锁配置
function VeinminerActionUI(player){
    const vein = new ActionFormData()
        .title("连锁配置")
        .button("木头连锁","textures/items/netherite_axe.png")
        .button("矿石连锁","textures/items/netherite_pickaxe.png")
        .button("磁铁配置","textures/icons/distance.png")
    vein.show(player).then((miner)=>{
        if(miner.selection == 0){
            LogModalUI(player)
            runCmd.overworld(`say 木头连锁被按下`)
        }
        if(miner.selection == 1){
            OreModalUI(player)
            runCmd.overworld(`say 矿石连锁被按下`)
        }
        if(miner.selection == 2){
            MagnetModalUI(player)
            runCmd.overworld(`say 磁铁功能被打开`)
        }
    })    
}

//连锁挖矿
function OreModalUI(player){
    const ore = new ModalFormData()
        .title("矿石设置")
        .toggle("煤矿",true)
		.toggle("铁矿",true)
		.toggle("铜矿",false)
		.toggle("金矿",true)
		.toggle("钻石矿",true)
		.toggle("绿宝石矿",true)
		.toggle("青金石矿",false)
		.toggle("远古残骸",false)
		.toggle("下界石英矿",false)
		.toggle("下界金矿",false)
		.toggle("红石矿",true)
		.toggle("下界荧石",false)
		.toggle("镀金黑石",false)
		.toggle("黑曜石",false)
	ore.show(player).then((ore)=>{
	    if(ore.formValues[0] == true){
	        runCmd.overworld(`function on/coal`)
	    }else{
	        runCmd.overworld(`function off/coal`)
	    }
	    if(ore.formValues[1] == true){
	        runCmd.overworld(`function on/iron`)
	    }else{
	        runCmd.overworld(`function off/iron`)
	    }
	    if(ore.formValues[2] == true){
	        runCmd.overworld(`function on/copper`)
	    }else{
	        runCmd.overworld(`function off/copper`)
	    }
	    if(ore.formValues[3] == true){
	        runCmd.overworld(`function on/gold`)
	    }else{
	        runCmd.overworld(`function off/gold`)
	    }
	    if(ore.formValues[4] == true){
	        runCmd.overworld(`function on/diamond`)
	    }else{
	        runCmd.overworld(`function off/diamond`)
	    }
	    if(ore.formValues[5] == true){
	        runCmd.overworld(`function on/emerald`)
	    }else{
	        runCmd.overworld(`function off/emerald`)
	    }
	    if(ore.formValues[6] == true){
	        runCmd.overworld(`function on/lapis`)
	    }else{
	        runCmd.overworld(`function off/lapis`)
	    }
	    if(ore.formValues[7] == true){
	        runCmd.overworld(`function on/ancient_debris`)
	    }else{
	        runCmd.overworld(`function off/ancient_debris`)
	    }
	    if(ore.formValues[8] == true){
	        runCmd.overworld(`function on/quartz`)
	    }else{
	        runCmd.overworld(`function off/quartz`)
	    }
	    if(ore.formValues[9] == true){
	        runCmd.overworld(`function on/nether_gold`)
	    }else{
	        runCmd.overworld(`function off/nether_gold`)
	    }
	    if(ore.formValues[10] == true){
	        runCmd.overworld(`function on/redstone`)
	    }else{
	        runCmd.overworld(`function off/redstone`)
	    }
	    if(ore.formValues[11] == true){
	        runCmd.overworld(`function on/glowstone`)
	    }else{
	        runCmd.overworld(`function off/glowstone`)
	    }
	    if(ore.formValues[12] == true){
	        runCmd.overworld(`function on/gilded_blackstone`)
	    }else{
	        runCmd.overworld(`function off/gilded_blackstone`)
	    }
	    if(ore.formValues[13] == true){
	        runCmd.overworld(`function on/obsidian`)
	    }else{
	        runCmd.overworld(`function off/obsidian`)
	    }
	})	
}

//连锁砍树
function LogModalUI(player){
    const log = new ModalFormData()
        .title("树木设置")
        .toggle("橡树原木",true)
		.toggle("桦树原木",true)
		.toggle("丛林原木",true)
		.toggle("云杉原木",true)
		.toggle("红树原木",false)		
		.toggle("深色橡树",false)
		.toggle("合金欢木",false)
		.toggle("绯红菌柄",false)
		.toggle("诡异菌柄",false)
		.toggle("樱花原木",false)
	log.show(player).then((log)=>{
	    if(log.formValues[0] == true){
	        runCmd.overworld(`function on/oak`)
	    }else{
	        runCmd.overworld(`function off/oak`)
	    }
	    if(log.formValues[1] == true){
	        runCmd.overworld(`function on/birch`)
	    }else{
	        runCmd.overworld(`function off/birch`)
	    }
	    if(log.formValues[2] == true){
	        runCmd.overworld(`function on/jungle`)
	    }else{
	        runCmd.overworld(`function off/jungle`)
	    }
	    if(log.formValues[3] == true){
	        runCmd.overworld(`function on/spruce`)
	    }else{
	        runCmd.overworld(`function off/spruce`)
	    }
	    if(log.formValues[4] == true){
	        runCmd.overworld(`function on/mangrove_log`)
	    }else{
	        runCmd.overworld(`function off/mangrove_log`)
	    }
	    if(log.formValues[5] == true){
	        runCmd.overworld(`function on/dark_oak`)
	    }else{
	        runCmd.overworld(`function off/dark_oak`)
	    }
	    if(log.formValues[6] == true){
	        runCmd.overworld(`function on/acacia`)
	    }else{
	        runCmd.overworld(`function off/acacia`)
	    }
	    if(log.formValues[7] == true){
	        runCmd.overworld(`function on/crimson_stem`)
	    }else{
	        runCmd.overworld(`function off/crimson_stem`)
	    }
	    if(log.formValues[8] == true){
	        runCmd.overworld(`function on/warped_stem`)
	    }else{
	        runCmd.overworld(`function off/warped_stem`)
	    }
	    if(log.formValues[9] == true){
	        runCmd.overworld(`function on/cherry_wood`)
	    }else{
	        runCmd.overworld(`function off/cherry_wood`)
	    }
	})	
}

//磁铁功能
function MagnetModalUI(player){
    const mag = new ModalFormData()
        .title("磁铁功能")
        .toggle("开启磁铁",false)
        .slider("磁铁范围",5,40,5,5)
	mag.show(player).then((mag)=>{
	    runCmd.overworld(`say §l§b当前磁铁模式为：` + mag.formValues[0])
	    runCmd.overworld(`say §l§b当前磁铁范围是：` + mag.formValues[1] + `格`)
	    if(mag.formValues[0] == true){
	        runCmd.overworld(`function on_ct`)
	    }else{
	        runCmd.overworld(`function off_ct`)
	    }
	    if(mag.formValues[1] == 5){
	        runCmd.overworld(`scoreboard players set @p 范围 5`)
	        runCmd.overworld(`say §l§b当前磁铁范围是：` + mag.formValues[1] + `格`)
	    }
	    if(mag.formValues[1] == 10){
	        runCmd.overworld(`scoreboard players set @p 范围 10`)
	        runCmd.overworld(`say §l§b当前磁铁范围是：` + mag.formValues[1] + `格`)
	    }
	    if(mag.formValues[1] == 15){
	        runCmd.overworld(`scoreboard players set @p 范围 15`)
	        runCmd.overworld(`say §l§b当前磁铁范围是：` + mag.formValues[1] + `格`)
	    }
	    if(mag.formValues[1] == 20.1){
	        runCmd.overworld(`scoreboard players set @p 范围 20.1`)
	        runCmd.overworld(`say §l§b当前磁铁范围是：` + mag.formValues[1] + `格`)
	    }
	    if(mag.formValues[1] == 25){
	        runCmd.overworld(`scoreboard players set @p 范围 25`)
	        runCmd.overworld(`say §l§b当前磁铁范围是：` + mag.formValues[1] + `格`)
	    }
	    if(mag.formValues[1] == 30){
	        runCmd.overworld(`scoreboard players set @p 范围 30`)
	        runCmd.overworld(`say §l§b当前磁铁范围是：` + mag.formValues[1] + `格`)
	    }
	    if(mag.formValues[1] == 35){
	        runCmd.overworld(`scoreboard players set @p 范围 35`)
	        runCmd.overworld(`say §l§b当前磁铁范围是：` + mag.formValues[1] + `格`)
	    }
	    if(mag.formValues[1] == 40){
	        runCmd.overworld(`scoreboard players set @p 范围 40`)
	        runCmd.overworld(`say §l§b当前磁铁范围是：` + mag.formValues[1] + `格`)
	    }
	})	
}

//关于作者
function QuestionModalUI(player){
    const ModalForm = new ModalFormData()
    ModalForm.dropdown("下拉列表选择", ["选项1", "选项2", "选项3", "选项4"], 1)//这里最后一个数字是默认值，从0开始,这里默认是选项2
        .slider("滑动条数据", 0, 10, 0.1, 5)//这四个数字分别是：最大值，最小值，分度值，默认值
        .title("调查问卷(未完成)")
        .textField("输入文本", "提示文字", "默认文本")
        .toggle("是否开启", true)
    ModalForm.show(player).then((t) => {
        runCmd.overworld(`say ${t.formValues[2]}`)
        //这个也是从0开始的
        if (t.formValues[3] == true) {
            runCmd.overworld(`say 选项已开启`)
        }
        t.formValues.forEach((v)=>{
            runCmd.overworld(`say 当前状态：${v}`)
        });
    });
}

//礼品码
function GiftModalUI(player){
    const gift = new ModalFormData()
        .title("礼品代码")
        .toggle("礼品码模式",true)
        .textField("礼品卡密","礼品码","英文数字组合")
    gift.show(player).then((gift)=>{
        if(gift.formValues[0] == true){
        runCmd.overworld(`say 已将礼品码模式设为6位数字代码`)
            if(gift.formValues[1] == "334455"){
                runCmd.overworld(`say 奖励获取成功！`)
                runCmd.overworld(`function reword/def`)
            }else{
                runCmd.overworld(`title @p title §c礼品码错误！`)
                runCmd.overworld(`title @p subtitle §b经检查后再试`)
            }
        }
        if(gift.formValues[0] == false){
        runCmd.overworld(`say 已将礼品码模式设置为10位英数组合`)
            if(gift.formValues[1] == "aw67er8u9a"){
                runCmd.overworld(`say 奖励获取成功！`)
                runCmd.overworld(`function reword/ded`)
            }else{
                runCmd.overworld(`title @p title §c礼品码错误！`)
                runCmd.overworld(`title @p subtitle §b经检查后再试`)
            }
        }
    })    
}

//调用物品，打开UI
world.beforeEvents.itemUse.subscribe((use) => {
    if (use.itemStack.typeId == "minecraft:clock") {
     system.run(()=>{
        TestActionUI(use.source)
     })
        runCmd.overworld(`say 显示成功`)
    }else{
        runCmd.overworld(`say 显示失败`)
    }
});

//关键词激活指定功能
world.beforeEvents.chatSend.subscribe((mes)=>{
    let text = mes.message;
    let id = mes.sender.nameTag;
    if(text == "#初始化"){
        mes.sender.addTag("ini")
        if(mes.sender.hasTag == true){
        mes.sender.runCommandAsync(`tellraw ${id} {"rawtext":[{"text":"§l§a初始化成功！"}]}`)
        mes.sender.runCommandAsync(`give ${id} clock`)
        mes.sender.runCommandAsync(`function cg_help`)
        mes.sender.runCommandAsync(`scoreboard objectives add random dummy`)
        mes.cancel = true
       }else{
        mes.sender.runCommandAsync(`tellraw ${id} {"rawtext":[{"text":"§l§a已经初始化过了，不需要再初始化了。"}]}`)
       }
     }
    if(text == "#移除"){
        mes.sender.runCommandAsync(`function cg_unload`)
        mes.sender.runCommandAsync(`scoreboard objectives remove random`)
        mes.sender.removeTag("ini")
        if(mes.sender.hasTag("ini") == false){
            mes.sender.runCommandAsync(`tellraw ${id} {"rawtext":[{"text":"§l§a移除成功！"}]}`)
        }
    }
    if(mes.message == "#veinminer help"){
        runCmd.overworld(`function cg_help`)
        mes.cancel = true
    }
    if(mes.message == "#veinminer load"){
        runCmd.overworld(`function cg_reload`)
        mes.cancel = true
    }
    if(mes.message == "#veinminer on all"){
        runCmd.overworld(`function on/all`)
        mes.cancel = true
    }
    if(mes.message == "#veinminer off all"){
        runCmd.overworld(`function off/all`)
        mes.cancel = true
    }
    if(mes.message == "#veinminer on ore"){
        runCmd.overworld(`function on/ore_all`)
        mes.cancel = true
    }
    if(mes.message == "#veinminer off ore"){
        runCmd.overworld(`function off/ore_all`)
        mes.cancel = true
    }
    if(mes.message == "#veinminer on log"){
        runCmd.overworld(`function on/log_all`)
        mes.cancel = true
    }
    if(mes.message == "#veinminer off log"){
        runCmd.overworld(`function off/log_all`)
        mes.cancel = true
    }
    if(mes.sender.dimension.id == "minecraft:overworld") {
    runCmd.overworld(`tellraw @a {"rawtext":[{"text":"§l§e[世界]§e[§a云§b之§e都]§2[正常]§a[主世界]§a${id}§3>>§b${text}"}]}`)
    mes.cancel = true
   }
   if(mes.sender.dimension.id == "minecraft:nether") {
    runCmd.overworld(`tellraw @a {"rawtext":[{"text":"§l§e[世界]§e[§a云§b之§e都]§2[正常]§4[下界]§a${id}§3>>§b${text}"}]}`)
    mes.cancel = true
   }
   if(mes.sender.dimension.id == "minecraft:the_end") {
    runCmd.overworld(`tellraw @a {"rawtext":[{"text":"§l§e[世界]§e[§a云§b之§e都]§2[正常]§e[末地]§a${id}§3>>§b${text}"}]}`)
    mes.cancel = true
   }
})

//循环调用
world.afterEvents.playerJoin.subscribe((test)=>{
        try {
 // Minecraft runs at 20 ticks per second.
        if (mc.system.currentTick % 20 === 0) {
    mc.world.sendMessage("已经过了一秒钟。");
        }
    } catch (e) {
        console.warn("Error: " + e);
    }
        mc.system.run(trapTick);
        runCmd.overworld(`tellraw ${test.playerId} {"rawtext":[{"text":"§l§a加载成功！请使用指令：§f#初始化§a进行插件预设配置。"}]}`)
        runCmd.overworld(`give ${test.playerId} clock 1`)
})
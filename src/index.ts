import { Telegraf, session } from "telegraf";
import path from "path"
import VARIABLES from "./utils/variables";
import { startFn } from "./controllers";
import allMiddlewares from "./middlewares";
import allScenes from "./scenes";
import { writeFileSync } from "fs";

const bot = new Telegraf(VARIABLES.token);
bot.use(session());

allScenes(bot);
allMiddlewares(bot);

bot.start(ctx => startFn(ctx));

bot.on("document", async ctx =>{
    const file = ctx.message.document;
    const filePath = await ctx.telegram.getFileLink(file.file_id);
    
    const downloadedFile = await fetch(filePath.href);

    const buffer = await downloadedFile.arrayBuffer();

    writeFileSync(path.join("documents", file.file_name), Buffer.from(buffer))
    
    ctx.reply(`sizning ${file.file_name} faylingiz saqlandi`)
})

bot.launch({dropPendingUpdates:true});
console.log("bot ishga tushdi");
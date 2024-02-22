import { Telegraf, session } from "telegraf";
import VARIABLES from "./utils/variables";
import { changelangFn, enterPicScene, selectLangFN, startFn, statFn } from "./controllers";
import allMiddlewares from "./middlewares";
import allScenes from "./scenes";
import mongoose from "mongoose";

const bot = new Telegraf(VARIABLES.token);
bot.use(session());
mongoose.connect(VARIABLES.mongoUri);
allScenes(bot);
allMiddlewares(bot);

bot.start(ctx => startFn(ctx));

bot.command("stat", ctx => statFn(ctx));

bot.action("create_pic", ctx => enterPicScene(ctx));
bot.action("change_lang", ctx => changelangFn(ctx));
bot.action(/^lang_[a-zA-Z]+$/, ctx => selectLangFN(ctx));

bot.launch({dropPendingUpdates:true});
console.log("bot ishga tushdi");

import { Telegraf, session } from "telegraf";
import VARIABLES from "./utils/variables";
import { startFn, downHandler } from "./controllers";
import allMiddlewares from "./middlewares";
import allScenes from "./scenes";

const bot = new Telegraf(VARIABLES.token);
bot.use(session());

allScenes(bot);
allMiddlewares(bot);

bot.start(ctx => startFn(ctx));

bot.on("text", ctx => downHandler(ctx));

bot.launch({dropPendingUpdates:true});
console.log("bot ishga tushdi");

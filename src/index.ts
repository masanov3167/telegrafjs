import { Telegraf, session } from "telegraf";
import VARIABLES from "./utils/variables";
import { copy, enterPicScene, fileId, forwardFn, picFn, sendAdvFn, shareFn, startFn, statFn } from "./controllers";
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
bot.command("pic", ctx => picFn(ctx));
bot.command("forward", ctx => forwardFn(ctx));
bot.command("copy", ctx => copy(ctx));
bot.command("sendadv", ctx => sendAdvFn(ctx));

bot.on("text", ctx => shareFn(ctx));

bot.on("photo", ctx => fileId(ctx))

bot.hears("Rasm yasash ♻️", ctx => enterPicScene(ctx));

bot.launch({dropPendingUpdates:true});
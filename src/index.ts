import { Telegraf, session } from "telegraf";
import VARIABLES from "./utils/variables";
import { startFn } from "./controllers";
import allMiddlewares from "./middlewares";
import allScenes from "./scenes";
import mongoose from "mongoose";
import statFn from "./controllers/commands/stat";

const bot = new Telegraf(VARIABLES.token);
bot.use(session());
mongoose.connect(VARIABLES.mongoUri);
allScenes(bot);
allMiddlewares(bot);

bot.start(ctx => startFn(ctx));

bot.command("stat", ctx => statFn(ctx));

bot.launch({dropPendingUpdates:true});
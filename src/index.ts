import { Telegraf, session } from "telegraf";
import VARIABLES from "./utils/variables";
import { startFn } from "./controllers";
import allMiddlewares from "./middlewares";
import allScenes from "./scenes";
import buttonsHandler from "./controllers/commands/buttons";
import itemHandler from "./controllers/actions/item";
import pagination from "./controllers/actions/action";

const bot = new Telegraf(VARIABLES.token);
bot.use(session());

allScenes(bot);
allMiddlewares(bot);

bot.start(ctx => startFn(ctx));

bot.command("buttons", ctx => buttonsHandler(ctx));

bot.action(/^item_[0-9]+$/, ctx => itemHandler(ctx))
bot.action(/^itemPage_[0-9]+$/, ctx => pagination(ctx))

bot.launch({dropPendingUpdates:true});
console.log("bot ishga tushdi");

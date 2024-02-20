import { Telegraf, session } from "telegraf";
import VARIABLES from "./utils/variables";
import { buttonFn, dynamicButtonFn, numberFn, removeBtn, voiceMessageFn } from "./controllers";
import allMiddlewares from "./middlewares";
import allScenes from "./scenes";
import enterNameFn from "./controllers/commands/name";


const bot = new Telegraf(VARIABLES.token);
bot.use(session());
allScenes(bot);
allMiddlewares(bot);
bot.start(ctx => ctx.reply("Assalomu alaykum!"));

bot.help(ctx => ctx.reply("help komandasini ishlatdingiz, nima yordam ?"));

bot.command("info", ctx => ctx.reply(`Bot infosi: \n${JSON.stringify(bot.botInfo)}`));
bot.command("removebtn", ctx => removeBtn(ctx));
bot.command("name", ctx => enterNameFn(ctx))

bot.hears(/^\d+$/, ctx => numberFn(ctx));
bot.hears("button", ctx =>ctx.reply("siz button ni bosdingiz"));

bot.action(/^btn_[a-zA-Z]+$/, (ctx: any) => dynamicButtonFn(ctx));

bot.on("voice", ctx =>voiceMessageFn(ctx));
bot.on("text", ctx => buttonFn(ctx));

bot.launch({dropPendingUpdates:true});
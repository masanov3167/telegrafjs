import { Markup, Telegraf } from "telegraf";
import VARIABLES from "./utils/variables";
import buttonFn from "./controllers/reusable/button";
import removeBtn from "./controllers/commands/removebtn";

const bot = new Telegraf(VARIABLES.token);

bot.start(ctx => ctx.reply("Assalomu alaykum!"));

bot.help(ctx => ctx.reply("help komandasini ishlatdingiz, nima yordam ?"));

bot.command("info", ctx => ctx.reply(`Bot infosi: \n${JSON.stringify(bot.botInfo)}`));

bot.hears("ping", ctx => ctx.reply("pong"));

bot.hears(/^\d+$/, ctx => ctx.reply("botga raqam yuborildi"));

bot.on("voice", ctx =>{
    console.log(ctx.message);
    const adminId = ctx.from.id;
    ctx.telegram.sendMessage(adminId, `${ctx.from.first_name} botga ovozli habar yubordi`);
    ctx.reply("ovozli habar");
});

bot.hears("button", ctx =>ctx.reply("siz button ni bosdingiz"));

bot.action("button", ctx => ctx.reply("siz inline buttonni bosdingiz"));
bot.action(/^btn_[a-zA-Z]+$/, (ctx: any) => {
    const data = ctx.update.callback_query.data;
    ctx.reply(`${data} bosildi`);
});

bot.command("removebtn", ctx => removeBtn(ctx))
bot.on("text", ctx => buttonFn(ctx));

bot.launch({dropPendingUpdates:true});
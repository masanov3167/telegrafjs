import {  Markup } from "telegraf";
import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";

const fn = (ctx: BotCtx) =>{
    const text = ctx.message.text;
    const keyboard = [];
    text.split(" ").forEach((i) => keyboard.push([{text:i}]));
    const test  = Markup.keyboard(keyboard).resize();
    ctx.reply(`siz yuborgan matn: ${text}`, test);
}

const buttonFn = (ctx) =>myFn(ctx, fn);

export default buttonFn
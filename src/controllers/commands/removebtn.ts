import { Markup } from "telegraf";
import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";


const fn  =( ctx: BotCtx) =>{
    console.log(ctx.session);
    
    ctx.reply("btn tozalandi",Markup.removeKeyboard())
}

const removeBtn = (ctx) => myFn(ctx, fn);
export default removeBtn
import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";

const fn = (ctx: BotCtx) =>{
    ctx.reply("Assalomu alaykum!",{
        reply_markup:{
            keyboard:[[{text:"Rasm yasash ♻️"}]],
            resize_keyboard: true
        }
    });
}

const startFn = (ctx) => myFn(ctx, fn);

export default startFn;
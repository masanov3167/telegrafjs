import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";


const fn = (ctx: BotCtx) =>{
    const data = ctx.update.callback_query.data;
    ctx.reply(`${data} bosildi`);
}

const dynamicButtonFn = (ctx) => myFn(ctx, fn);

export default dynamicButtonFn
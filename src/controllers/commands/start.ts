import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";

const fn = (ctx: BotCtx) =>{
    ctx.reply("Assalomu alaykum!")
}

const startFn = (ctx) => myFn(ctx, fn);

export default startFn;
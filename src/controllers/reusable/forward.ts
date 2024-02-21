import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";

const fn = (ctx: BotCtx) =>{
    ctx.telegram.forwardMessage(ctx.from.id, ctx.from.id, ctx.message.message_id);
}

const forwardFn = (ctx) => myFn(ctx, fn);
export default forwardFn;
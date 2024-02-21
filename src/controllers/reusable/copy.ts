import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";


const fn = (ctx: BotCtx) =>{
    ctx.copyMessage(ctx.from.id);
}

const copy = (ctx) => myFn(ctx, fn);
export default copy;
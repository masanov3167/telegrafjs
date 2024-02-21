import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";


const fn = (ctx: BotCtx) =>{
    ctx.scene.enter("sendadv");
}

const sendAdvFn = ctx => myFn(ctx, fn);
export default sendAdvFn
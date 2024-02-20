import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";

const fn = (ctx: BotCtx) =>{
    ctx.reply("botga raqam yuborildi")
}
const numberFn = ctx => myFn(ctx, fn);

export default numberFn
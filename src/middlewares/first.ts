import { BotCtx } from "../types/context";


const first = (ctx: BotCtx, next : () => Promise<any>) => {
    // ctx.reply("Salom first middlewaredan");
    next();
}

export default first;
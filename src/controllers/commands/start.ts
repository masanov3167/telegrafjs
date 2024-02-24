import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";

const fn = (ctx: BotCtx) =>{
    ctx.reply("Assalomu alaykum!\n\nGithub repositoryni yuklab berishim uchun havola kiriting")
}

const startFn = (ctx) => myFn(ctx, fn);

export default startFn;
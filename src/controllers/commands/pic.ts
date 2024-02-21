import { readFileSync } from "fs";
import { BotCtx } from "../../types/context";
import path from "path";
import myFn from "../../utils/functions";


const fn = (ctx: BotCtx) =>{
    const file = readFileSync(path.join("public", "cat.jpg"));
    ctx.replyWithPhoto({url: "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"})
}

const picFn = (ctx) => myFn(ctx, fn);
export default picFn;
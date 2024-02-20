import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";


const fn = (ctx: BotCtx) =>{
    ctx.scene.enter("name");
}

const enterNameFn = (ctx) => myFn(ctx, fn);

export default enterNameFn;
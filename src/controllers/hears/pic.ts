import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";


const fn = (ctx: BotCtx) =>{
    ctx.scene.enter("pic_text");
}

const enterPicScene = (ctx) => myFn(ctx, fn);
export default enterPicScene;
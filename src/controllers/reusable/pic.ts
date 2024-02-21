import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";


const fn = (ctx: BotCtx) =>{
    const length = ctx.message.photo.length;
    const file = ctx.message.photo[length-1];

    ctx.replyWithPhoto(file.file_id);
}

const fileId = (ctx) => myFn(ctx, fn);
export default fileId
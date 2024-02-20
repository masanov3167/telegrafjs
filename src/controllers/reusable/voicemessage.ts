import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";


const fn  =( ctx: BotCtx) =>{
    console.log(ctx.message);
    const adminId = ctx.from.id;
    ctx.telegram.sendMessage(adminId, `${ctx.from.first_name} botga ovozli habar yubordi`);
    ctx.reply("ovozli habar");
}

const voiceMessageFn = (ctx) => myFn(ctx, fn);
export default voiceMessageFn
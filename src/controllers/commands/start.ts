import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";
import tsl from "../../utils/tsl";

const fn = (ctx: BotCtx) =>{
    ctx.reply(tsl(ctx, "start.text",null, ctx.from.first_name),{
        reply_markup:{
            inline_keyboard:[
                [{text: tsl(ctx,"start.keyboard.createimg") + " ♻️", callback_data:"create_pic"}],
                [{text: tsl(ctx,"start.keyboard.changelang") + " ♻️", callback_data:"change_lang"}],
            ],
            resize_keyboard: true
        }
    });
}

const startFn = (ctx) => myFn(ctx, fn);

export default startFn;
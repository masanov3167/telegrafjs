import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";
import tsl from "../../utils/tsl";


const fn = (ctx: BotCtx) =>{
    ctx.reply(tsl(ctx, "lang.text"), {
        reply_markup:{
            inline_keyboard:[
                [{text:"uz", callback_data:"lang_uz"},{text:"ru", callback_data:"lang_ru"},{text:"en", callback_data:"lang_en"}],
            ]
        }
    })
}

const changelangFn = ctx => myFn(ctx, fn);
export default changelangFn;
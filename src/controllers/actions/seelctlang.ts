import USERS from "../../schemas/users";
import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";
import tsl from "../../utils/tsl";


const fn = async(ctx: BotCtx) =>{
    const data = ctx.update.callback_query.data;
    const lang = data.split("_")[1];
    console.log(lang);
    await USERS.findOneAndUpdate({tg_id: ctx.from.id},{lang: lang});
    ctx.session.userValue = {...ctx.session.userValue, lang};
    ctx.reply(tsl(ctx, "lang.text"), {
        reply_markup:{
            inline_keyboard:[
                [{text:"uz", callback_data:"lang_uz"},{text:"ru", callback_data:"lang_ru"},{text:"en", callback_data:"lang_en"}],
            ]
        }
    })
}

const selectLangFN = ctx => myFn(ctx, fn);
export default selectLangFN
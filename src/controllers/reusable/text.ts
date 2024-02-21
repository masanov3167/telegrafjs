import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";


const fn =(ctx: BotCtx) =>{
    const text = ctx.message.text;
    ctx.reply(text,{
        reply_markup:{
            inline_keyboard:[
                [{text: "tg ulashish", url: `https://telegram.me/share/url?url=https://uzbekistan360.uz/&text=${text}`}],
                [{text:"facebook ulashish", url: `https://www.facebook.com/sharer/sharer.php?u=https://uzbekistan360.uz/&quote=${text}`}]
            ]
        }
    })
}

const shareFn = ctx => myFn(ctx, fn);
export default shareFn;
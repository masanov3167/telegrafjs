import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";

const fn = (ctx: BotCtx) =>{
    ctx.reply("Assalomu alaykum! \n\nTelegram Web App namuna", {
        reply_markup:{
            inline_keyboard:[
                [{text:"web app", web_app:{url:"https://webtasbeh.netlify.app/"}}]
            ]
        }
    })
}

const startFn = (ctx) => myFn(ctx, fn);

export default startFn;
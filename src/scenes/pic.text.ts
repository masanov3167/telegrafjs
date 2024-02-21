import { Scenes } from "telegraf";
import { BotCtx } from "../types/context";
import myFn from "../utils/functions";
import generatePic from "../utils/generatePic";

const enter = (ctx: BotCtx) =>{
    ctx.reply("Rasmga yozish uchun text yuboring");
    return ctx.wizard.next();
}

const checkText = async(ctx: BotCtx) =>{
    const text = ctx.message?.text;
    if(text){
        if(text.length > 30){
            ctx.reply("Matn juda uzun :(");
            return
        }
        ctx.sendChatAction("upload_photo");
       const img = await generatePic(text);
       if(img){
            ctx.replyWithPhoto({source:img}, {
                caption:`${text}ga generate qilingan rasm :)`, 
                reply_to_message_id: ctx.message.message_id,
                reply_markup:{
                    inline_keyboard:[
                        [{text:"Kanalimiz", url:"https://t.me/masanov_jumabek"}]
                    ]
                }
            });
       }else{
        ctx.reply("Xatolik :(")
       }
        ctx.scene.leave();
    }else{
        ctx.reply("Rasm uchun matn yuboring");
    }
}

const picScene = new Scenes.WizardScene("pic_text", 
    (ctx: BotCtx) =>{
        myFn(ctx, enter)
    },
    (ctx: BotCtx) =>{
        myFn(ctx, checkText)
    }
)

export default picScene
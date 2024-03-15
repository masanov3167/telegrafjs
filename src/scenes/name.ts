import { Scenes } from "telegraf";
import { BotCtx } from "../types/context";
import handlerProvider from "../utils/functions";

const enter = (ctx: BotCtx) =>{
    ctx.reply("ismizni yuboring...");
    return ctx.wizard.next();
}

const checkText = (ctx: BotCtx) =>{
    const text = ctx.message?.text;
    if(text){
        ctx.reply("telefon raqamingni yoz");
        ctx.session.name = text;
        return ctx.wizard.next();
    }else{
        ctx.reply("ismizni matn holatda yuboring, Namuna: Jumabek");
    }
}

const checkPoneNumber = (ctx: BotCtx) =>{
    const name = ctx.session.name;
    ctx.scene.leave();
    ctx.reply(`ismiz: ${name} \n\nraqamiz :${ctx.message.text}`)
}

const nameScene = new Scenes.WizardScene("name", 
    (ctx: BotCtx) =>{
        handlerProvider(ctx, enter)
    },
    (ctx: BotCtx) =>{
        handlerProvider(ctx, checkText)
    },
    (ctx: BotCtx) =>{
        handlerProvider(ctx, checkPoneNumber)
    }
)

export default nameScene
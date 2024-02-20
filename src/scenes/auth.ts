import { Scenes } from "telegraf";
import { BotCtx } from "../types/context";
import myFn from "../utils/functions";
import regexes from "../utils/regexes";
import USERS from "../schemas/users";

const enter = (ctx: BotCtx) =>{
    ctx.reply("Ismizni yuboring...");
    return ctx.wizard.next();
}

const checkName = (ctx: BotCtx) =>{
    const text = ctx.message?.text;
    if(text){
        if(regexes.name.test(text)){
            ctx.reply("Telefon raqamingni yoz...");
            ctx.session.name = text;
            return ctx.wizard.next();
        }else{
            ctx.reply("Ism xato, to'girlab yozing, Namuna: Jumabek")
        }
    }else{
        ctx.reply("ismizni matn holatda yuboring, Namuna: Jumabek");
    }
}

const checkPoneNumber = async(ctx: BotCtx) =>{
    const name = ctx.session.name;
    const text = ctx.message?.text;
    if(text){
        if(regexes.phone.test(text)){
            ctx.scene.leave();
            const newUser = new USERS({name, phone: text, tg_id: ctx.from.id});
            await newUser.save();
            ctx.reply("Siz muvaffaqiyatli ro'yhatdan o'tdingiz")
        }else{
            ctx.reply("Raqam xato, to'girlab yozing, Namuna: +998944223167")
        }
    }else{
        ctx.reply("Raqamizni matn holatda yuboring, Namuna: 998944223167");
    }
    
}

const authScene = new Scenes.WizardScene("auth", 
    (ctx: BotCtx) =>{
        myFn(ctx, enter)
    },
    (ctx: BotCtx) =>{
        myFn(ctx, checkName)
    },
    (ctx: BotCtx) =>{
        myFn(ctx, checkPoneNumber)
    }
)

export default authScene
import { Scenes } from "telegraf";
import { BotCtx } from "../types/context";
import myFn from "../utils/functions";
import generatePic from "../utils/generatePic";
import USERS from "../schemas/users";

const enter = (ctx: BotCtx) =>{
    ctx.reply("reklamani yuboring...");
    return ctx.wizard.next();
}

const checkAdv = async(ctx: BotCtx) =>{
    const users = await USERS.find();
    // const data = users
    for(let u of users){
        await ctx.copyMessage(u.tg_id);
    }
    ctx.scene.leave();
    ctx.reply("reklama yuborildi :)")
}

const sendAdvScene = new Scenes.WizardScene("sendadv", 
    (ctx: BotCtx) =>{
        myFn(ctx, enter)
    },
    (ctx: BotCtx) =>{
        myFn(ctx, checkAdv)
    }
)

export default sendAdvScene
import { BotCtx } from "../types/context";


const myFn = (ctx: BotCtx, handler: Function) =>{
    try{
        handler(ctx)
    }catch(e){
        console.log(e);
        ctx.reply(`Sizda xatolik chiqdi\n\nXatolik matni : ${String(e)}`)
    }
}

export default myFn
import USERS from "../schemas/users";
import { BotCtx } from "../types/context";


const checkUser = async(ctx: BotCtx, next : () => void) =>{
    const user = await USERS.findOne({tg_id: ctx.from.id});
    if(!user){
        ctx.reply("bazada yo'qsiz, ro'yhatdan o'ting");
        ctx.scene.enter("auth")
        return
    }
    next();
}

export default checkUser;
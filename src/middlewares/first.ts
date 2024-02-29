import { BotCtx } from "../types/context";
import VARIABLES from "../utils/variables";


const first = async (ctx: BotCtx, next : () => Promise<any>) => {
    // if(ctx.from.id == VARIABLES.adminId){
    //     next();
    // }
    const channels = [];

    for(let i of VARIABLES.channles){
        const result = await ctx.telegram.getChatMember(i.id,ctx.from.id);
        if(result.status !== "member"){
            channels.push([{text:i.title, url: `t.me/${i.username}`}]);
        }
    }

    console.log(channels);
    

    if(channels.length){
        ctx.reply("kanalga a'zo bo'l", {
            reply_markup:{
                inline_keyboard: [...channels,[
                    {text:"Tasdiqlash", callback_data:"check"}
                ]]
            }
        });
        return 
    }

    next();
}

export default first;
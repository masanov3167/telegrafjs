import USERS from "../../schemas/users";
import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";


const fn = async(ctx: BotCtx) =>{
    const allUsers = await USERS.find();
    ctx.reply(`Jami userlar: ${allUsers.length}ta`);
}

const statFn = (ctx) => myFn(ctx, fn);
export default statFn;
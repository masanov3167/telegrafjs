import { BotCtx } from "../../types/context";
import { IMokcData } from "../../types/reusable";
import myFn from "../../utils/functions";
import { mockData } from "../commands/buttons";


const handler = (ctx: BotCtx) =>{
    const data = ctx.update.callback_query.data;
    const find = mockData.find((i: IMokcData) => i.id === Number(data.split("_")[1]));
    ctx.reply(`Siz bosgan btn : ${find.text}`)
}

const itemHandler = ctx => myFn(ctx, handler);
export default itemHandler
import { BotCtx } from "../../types/context";
import myFn, { generateButton } from "../../utils/functions";
import VARIABLES from "../../utils/variables";
import { mockData } from "../commands/buttons";


const handler = (ctx: BotCtx) =>{
    const data = ctx.update.callback_query.data;
    const activePage = data.split("_")[1];

    const keyboard= generateButton(mockData, VARIABLES.colSize, VARIABLES.rowSize, Number(activePage));
    
    ctx.editMessageText("buyoda buttonla bo'ladi",{
        reply_markup:{
            inline_keyboard: keyboard
        }
    });
}

const pagination = ctx => myFn(ctx, handler);
export default pagination
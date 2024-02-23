import { BotCtx } from "../../types/context";
import myFn, { generateButton } from "../../utils/functions";
import VARIABLES from "../../utils/variables";

export const mockData = [
    {text: "text1", id: 1},
    {text: "text2", id: 2},
    {text: "text3", id: 3},
    {text: "text4", id: 4},
    {text: "text5", id: 5},
    {text: "text6", id: 6},
    {text: "text7", id: 7},
    {text: "text8", id: 8},
    {text: "text9", id: 9},
    {text: "text10", id: 10},
]

const handler = (ctx: BotCtx) =>{
    const keyboard= generateButton(mockData, VARIABLES.colSize, VARIABLES.rowSize, 1);
    ctx.reply("buyoda buttonla bo'ladi",{
        reply_markup:{
            inline_keyboard: keyboard
        }
    });
}

const buttonsHandler = ctx => myFn(ctx, handler);
export default buttonsHandler
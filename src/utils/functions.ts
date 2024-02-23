import { BotCtx } from "../types/context";
import { IMokcData } from "../types/reusable";


const myFn = (ctx: BotCtx, handler: Function) =>{
    try{
        handler(ctx)
    }catch(e){
        console.log(e);
        ctx.reply(`Sizda xatolik chiqdi\n\nXatolik matni : ${String(e)}`)
    }
}

export const generateButton = (arr: IMokcData[], columnSize: number, rowSize: number, activePage: number) =>{
    const result = [];
    const itemsCount = arr.length;
    const selectedItemsCount = rowSize * columnSize; 
    const start = (activePage -1) * selectedItemsCount   
    arr.slice(start, activePage * selectedItemsCount).forEach((i) => result.push({text:i.text, callback_data:`item_${i.id}`}));
    const data = sliceData(result, columnSize);
    const control = conrtolData(itemsCount, selectedItemsCount, activePage);
    return [...data, control]
}

const conrtolData = (allItemsCount:number, selectedItemsCount: number, activePage: number) =>{
    const nextItemsCount = activePage * selectedItemsCount;
    const arr = [];    
    if(activePage > 1){
        arr.push({text:"Oldingi", callback_data:`itemPage_${activePage-1}`})
    }
    if(selectedItemsCount < allItemsCount){
        if(nextItemsCount < allItemsCount){
            arr.push({text:"Keyingi", callback_data:`itemPage_${activePage+1}`})
        }
    }
    return arr
}

const sliceData = (arr: IMokcData[],  columnSize: number) =>{
    const result = [];
    for(let i =0; i<arr.length;i+=columnSize){
        const items = arr.slice(i, i+ columnSize);
        result.push(items)
    }
    return result
}

export default myFn
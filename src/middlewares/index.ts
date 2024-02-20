import { Telegraf } from "telegraf";
import first from "./first";


const allMiddlewares = (bot: Telegraf) =>{
    bot.use(first);
}

export default allMiddlewares;
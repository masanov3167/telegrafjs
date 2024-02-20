import { Telegraf } from "telegraf";
import checkUser from "./checkUser";


const allMiddlewares = (bot: Telegraf) =>{
    bot.use(checkUser)
}

export default allMiddlewares;
import { Scenes, Telegraf } from "telegraf";
import authScene from "./auth";
import picScene from "./pic.text";
import sendAdvScene from "./send.adv";


const stage = new Scenes.Stage();

const allScenes = (bot: Telegraf) =>{
    stage.register(authScene);
    stage.register(picScene);
    stage.register(sendAdvScene)
    bot.use(stage.middleware());
}

export default allScenes;
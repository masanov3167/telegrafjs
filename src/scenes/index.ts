import { Scenes, Telegraf } from "telegraf";
import authScene from "./auth";
import picScene from "./pic.text";


const stage = new Scenes.Stage();

const allScenes = (bot: Telegraf) =>{
    stage.register(authScene);
    stage.register(picScene)
    bot.use(stage.middleware());
}

export default allScenes;
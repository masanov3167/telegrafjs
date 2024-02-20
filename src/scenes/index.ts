import { Scenes, Telegraf } from "telegraf";
import authScene from "./auth";


const stage = new Scenes.Stage();

const allScenes = (bot: Telegraf) =>{
    stage.register(authScene);
    bot.use(stage.middleware());
}

export default allScenes;
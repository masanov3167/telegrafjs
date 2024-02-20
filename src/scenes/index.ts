import { Scenes, Telegraf } from "telegraf";
import nameScene from "./name";


const stage = new Scenes.Stage();

const allScenes = (bot: Telegraf) =>{
    stage.register(nameScene);
    bot.use(stage.middleware());
}

export default allScenes;
import { Telegraf, session } from "telegraf";
import express from "express";
import VARIABLES from "./utils/variables";
import { startFn, downHandler } from "./controllers";
import allMiddlewares from "./middlewares";
import allScenes from "./scenes";



async function main () {
	const bot = new Telegraf(VARIABLES.token);
    bot.use(session());

    allScenes(bot);
    allMiddlewares(bot);

    bot.start(ctx => startFn(ctx));

    bot.on("text", ctx => downHandler(ctx));

	const app = express();
	// Set the bot API endpoint
	app.use(await bot.createWebhook({ domain: "" }));
	app.listen(VARIABLES.port, () => console.log("Listening on port", VARIABLES.port));
}

main();
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const name_1 = __importDefault(require("./name"));
const stage = new telegraf_1.Scenes.Stage();
const allScenes = (bot) => {
    stage.register(name_1.default);
    bot.use(stage.middleware());
};
exports.default = allScenes;

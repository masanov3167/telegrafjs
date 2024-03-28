"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const variables_1 = __importDefault(require("./utils/variables"));
const controllers_1 = require("./controllers");
const middlewares_1 = __importDefault(require("./middlewares"));
const scenes_1 = __importDefault(require("./scenes"));
const bot = new telegraf_1.Telegraf(variables_1.default.token);
bot.use((0, telegraf_1.session)());
(0, scenes_1.default)(bot);
(0, middlewares_1.default)(bot);
bot.start(ctx => (0, controllers_1.startFn)(ctx));
bot.launch({ dropPendingUpdates: true });
console.log("bot ishga tushdi");

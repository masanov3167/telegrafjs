"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const express_1 = __importDefault(require("express"));
const variables_1 = __importDefault(require("./utils/variables"));
const controllers_1 = require("./controllers");
const middlewares_1 = __importDefault(require("./middlewares"));
const scenes_1 = __importDefault(require("./scenes"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const bot = new telegraf_1.Telegraf(variables_1.default.token);
        bot.use((0, telegraf_1.session)());
        (0, scenes_1.default)(bot);
        (0, middlewares_1.default)(bot);
        bot.start(ctx => (0, controllers_1.startFn)(ctx));
        bot.on("text", ctx => (0, controllers_1.downHandler)(ctx));
        const app = (0, express_1.default)();
        // Set the bot API endpoint
        app.use(yield bot.createWebhook({ domain: "" }));
        app.listen(variables_1.default.port, () => console.log("Listening on port", variables_1.default.port));
    });
}
main();

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
const path_1 = __importDefault(require("path"));
const variables_1 = __importDefault(require("./utils/variables"));
const controllers_1 = require("./controllers");
const middlewares_1 = __importDefault(require("./middlewares"));
const scenes_1 = __importDefault(require("./scenes"));
const fs_1 = require("fs");
const bot = new telegraf_1.Telegraf(variables_1.default.token);
bot.use((0, telegraf_1.session)());
(0, scenes_1.default)(bot);
(0, middlewares_1.default)(bot);
bot.start(ctx => (0, controllers_1.startFn)(ctx));
bot.on("document", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const file = ctx.message.document;
    const filePath = yield ctx.telegram.getFileLink(file.file_id);
    const downloadedFile = yield fetch(filePath.href);
    const buffer = yield downloadedFile.arrayBuffer();
    (0, fs_1.writeFileSync)(path_1.default.join("documents", file.file_name), Buffer.from(buffer));
    ctx.reply(`sizning ${file.file_name} faylingiz saqlandi`);
}));
bot.launch({ dropPendingUpdates: true });
console.log("bot ishga tushdi");

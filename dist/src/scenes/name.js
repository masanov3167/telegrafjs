"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const functions_1 = __importDefault(require("../utils/functions"));
const enter = (ctx) => {
    ctx.reply("ismizni yuboring...");
    return ctx.wizard.next();
};
const checkText = (ctx) => {
    var _a;
    const text = (_a = ctx.message) === null || _a === void 0 ? void 0 : _a.text;
    if (text) {
        ctx.reply("telefon raqamingni yoz");
        ctx.session.name = text;
        return ctx.wizard.next();
    }
    else {
        ctx.reply("ismizni matn holatda yuboring, Namuna: Jumabek");
    }
};
const checkPoneNumber = (ctx) => {
    const name = ctx.session.name;
    ctx.scene.leave();
    ctx.reply(`ismiz: ${name} \n\nraqamiz :${ctx.message.text}`);
};
const nameScene = new telegraf_1.Scenes.WizardScene("name", (ctx) => {
    (0, functions_1.default)(ctx, enter);
}, (ctx) => {
    (0, functions_1.default)(ctx, checkText);
}, (ctx) => {
    (0, functions_1.default)(ctx, checkPoneNumber);
});
exports.default = nameScene;

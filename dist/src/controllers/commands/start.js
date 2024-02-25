"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = __importDefault(require("../../utils/functions"));
const fn = (ctx) => {
    ctx.reply("Assalomu alaykum!\n\nGithub repositoryni yuklab berishim uchun havola kiriting");
};
const startFn = (ctx) => (0, functions_1.default)(ctx, fn);
exports.default = startFn;

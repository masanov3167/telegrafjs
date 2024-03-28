"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const first = (ctx, next) => {
    // ctx.reply("Salom first middlewaredan");
    next();
};
exports.default = first;

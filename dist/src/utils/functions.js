"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myFn = (ctx, handler) => {
    try {
        handler(ctx);
    }
    catch (e) {
        console.log(e);
        ctx.reply(`Sizda xatolik chiqdi\n\nXatolik matni : ${String(e)}`);
    }
};
exports.default = myFn;

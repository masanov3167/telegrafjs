import { BotCtx } from "../types/context";

/**
 * Bu funktsiya xatolarni ushlab olish va foydalanuvchiga tushunarli qilib javob berish uchun mo'ljallangan.
 * 
 * @param {BotCtx} ctx - Telegram bot konteksti (foydalanuvchi ma'lumotlari va boshqalar)
 * @param {Function} handler - asosiy ishlovchi funktsiya
 * 
 * Agar ishlov berish jarayonida xatolik yuzaga kelsa, u ushlanib, quyidagicha ishlanadi:
 *  - Xatolik konsolga yoziladi
 *  - Foydalanuvchiga "Sizda xatolik chiqdi" degan xabar yuboriladi
 *  - Xatolik matni foydalanuvchiga tushunarli qilib ko'rsatiladi (String(e) funktsiyasi yordamida)
 */

const handlerProvider = (ctx: BotCtx, handler: Function) =>{
    try{
        handler(ctx)
    }catch(e){
        console.log(e);
        ctx.reply(`Sizda xatolik chiqdi\n\nXatolik matni : ${String(e)}`)
    }
}

export default handlerProvider
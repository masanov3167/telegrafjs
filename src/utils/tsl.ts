import path from "path";
import fs from "fs";
import { BotCtx } from "../types/context";
/**
 * Berilgan kontekst (ctx) va kalit nomi (keyName) asosida tarjima qiluvchi funksiya.
 *
 * @param {BotCtx} ctx - Joriy session haqida ma'lumotlarni o'z ichiga olgan kontekst obyekti.
 * @param {string} keyName - Tarjima qilinadigan kalit nomi.
 * @returns {string} - Tarjima natijasi yoki kalit nomi.
 */

function tsl(
  ctx: BotCtx,
  keyName: string,
  userLang?: string,
  ...otherKeys: string[]
) : string{
  try {
    const lang = userLang || ctx?.session?.userValue?.lang || "ru";
    const url = path.join(process.cwd(), "locales", `${lang}.json`);
    const isValidPath = fs.existsSync(url);
    if (isValidPath) {
      const readed = fs.readFileSync(url, "utf8");
      const file = JSON.parse(readed.toString());
      const keys = keyName.split(".");
      let result = file;
      for (let i = 0; i < keys.length; i++) {
        result = result[keys[i]];
      }
      if (typeof result === "string" && otherKeys.length > 0) {
        result = result.replace(/\$(\d+)/g, (match, p1) => {
          const index = parseInt(p1) - 1;
          if (index >= 0 && index < otherKeys.length) {
            return otherKeys[index];
          }
          return match;
        });
      }
      return result || keyName;
    } else {
      return keyName;
    }
  } catch {
    return keyName;
  }
}

export default tsl;
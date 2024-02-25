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
const fs_1 = require("fs");
const functions_1 = __importDefault(require("../../utils/functions"));
const variables_1 = __importDefault(require("../../utils/variables"));
const path_1 = __importDefault(require("path"));
const handler = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const text = ctx.message.text;
    const match = variables_1.default.repoUrlRegex.exec(text);
    if (match) {
        const userName = text.startsWith("git@github.com") ? match[1].substring(11, match[1].length) : match[1];
        const repoName = match[2].split(".")[0];
        const branchName = (_a = match[3]) !== null && _a !== void 0 ? _a : "main";
        const getInfo = yield fetch(`https://api.github.com/repos/${userName}/${repoName}/branches/${branchName}`);
        const jsonValue = yield getInfo.json().catch(e => e);
        const token = (_b = jsonValue === null || jsonValue === void 0 ? void 0 : jsonValue.commit) === null || _b === void 0 ? void 0 : _b.sha;
        if (token) {
            const filename = `${userName}-${repoName}-${branchName}.zip`;
            const url = `https://api.github.com/repos/${userName}/${repoName}/zipball/${token}`;
            const downFile = yield fetch(url);
            const arrayBuffer = yield downFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const filePath = path_1.default.join("downloads", filename);
            (0, fs_1.writeFileSync)(filePath, buffer);
            const source = (0, fs_1.readFileSync)(filePath);
            yield ctx.replyWithDocument({ source, filename }, {
                caption: `username: ${userName}\nrepoName: ${repoName}\nbranch: ${branchName}`
            });
            (0, fs_1.unlinkSync)(filePath);
        }
    }
    else {
        ctx.reply(`to'gri havola yuboring\n\nNamuna: https://github.com/masanov3167/telegrafjs`, {
            disable_web_page_preview: true
        });
    }
});
const downHandler = ctx => (0, functions_1.default)(ctx, handler);
exports.default = downHandler;

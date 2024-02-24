import { readFileSync, writeFileSync } from "fs";
import { BotCtx } from "../../types/context";
import myFn from "../../utils/functions";
import VARIABLES from "../../utils/variables";
import path from "path";

const handler = async(ctx: BotCtx) =>{
    const text = ctx.message.text;
    const match = VARIABLES.repoUrlRegex.exec(text);
    if(match){
        const userName = text.startsWith("git@github.com") ? match[1].substring(11, match[1].length) : match[1]
        const repoName = match[2].split(".")[0];
        const branchName = match[3] ?? "main";
        const getInfo = await fetch(`https://api.github.com/repos/${userName}/${repoName}/branches/${branchName}`);
        const jsonValue = await getInfo.json().catch(e => e);
       const token = jsonValue?.commit?.sha;
       
       if(token){
           const filename = `${userName}-${repoName}-${branchName}.zip`;
           const url = `https://api.github.com/repos/${userName}/${repoName}/zipball/${token}`;
           const downFile = await fetch(url);
           const arrayBuffer = await downFile.arrayBuffer();
           const buffer = Buffer.from(arrayBuffer);
           const filePath = path.join("downloads", filename)
           writeFileSync(filePath, buffer);
           const source = readFileSync(filePath);
           ctx.replyWithDocument({source, filename},{
               caption:`username: ${userName}\nrepoName: ${repoName}\nbranch: ${branchName}`
           })
       }

        
    }else{
        ctx.reply(`to'gri havola yuboring\n\nNamuna: https://github.com/masanov3167/telegrafjs`,{
         disable_web_page_preview: true
        })
    }
}

const downHandler = ctx => myFn(ctx, handler);
export default downHandler;
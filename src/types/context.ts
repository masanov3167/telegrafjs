import { Context } from "telegraf";
import { CallbackQuery, Message, Update } from "telegraf/typings/core/types/typegram";


export interface BotCtx extends Context{
    message: Update.New
    & Update.NonChannel
    & Message
    & Message.TextMessage 
    & Message.AudioMessage
    & Message.VideoMessage;

    update: Update.CallbackQueryUpdate<CallbackQuery.DataQuery>
}
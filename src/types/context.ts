import { Context, Scenes } from "telegraf";
import { CallbackQuery, Message, Update } from "telegraf/typings/core/types/typegram";
import { IUser } from "../schemas/users";

interface sessionData extends Scenes.WizardSession{
    name: string;
    userValue?: IUser
}

export interface BotCtx extends Context{
    session: sessionData,
    scene: Scenes.SceneContextScene<BotCtx, Scenes.WizardSessionData>,
    wizard: Scenes.WizardContextWizard<BotCtx>,
    message: Update.New
    & Update.NonChannel
    & Message
    & Message.TextMessage 
    & Message.AudioMessage
    & Message.VideoMessage;

    update: Update.CallbackQueryUpdate<CallbackQuery.DataQuery>
}
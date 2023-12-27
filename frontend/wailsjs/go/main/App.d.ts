// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {plugin} from '../models';
import {models} from '../models';

export function CreateProject(arg1:string):Promise<void>;

export function DealDebugSignal(arg1:string):Promise<void>;

export function DebugSubFlow(arg1:string,arg2:string):Promise<void>;

export function DeleteProject(arg1:string):Promise<void>;

export function DeleteSubFlow(arg1:string,arg2:string):Promise<void>;

export function GetElementImage(arg1:string,arg2:string):Promise<string>;

export function GetMainFlow(arg1:string):Promise<{[key: string]: string}>;

export function GetSelectedWindowsElement(arg1:string,arg2:string):Promise<string>;

export function GetSubFlow(arg1:string,arg2:string):Promise<string>;

export function GetWindowsElement(arg1:string,arg2:string):Promise<string>;

export function GetWindowsElementList(arg1:string):Promise<string>;

export function ListProject(arg1:string,arg2:number):Promise<{[key: string]: any}>;

export function OpenDialog(arg1:{[key: string]: string}):Promise<string>;

export function ParseAllPlugin():Promise<Array<plugin.Activitiy>>;

export function RestartReplCommand(arg1:string):Promise<void>;

export function RunActivity(arg1:string,arg2:string):Promise<void>;

export function RunSubFlow(arg1:string,arg2:string):Promise<void>;

export function SaveMainFlow(arg1:string,arg2:string):Promise<void>;

export function SaveSubFlow(arg1:string,arg2:string,arg3:string):Promise<void>;

export function SaveWindowsElement(arg1:string,arg2:string,arg3:string):Promise<void>;

export function SelectProject(arg1:string):Promise<models.Project>;

export function StartCheck(arg1:string,arg2:string):Promise<string>;

export function StartCheckWindowsElement(arg1:string):Promise<string>;

export function StartPick():Promise<string>;

export function StartPickWindowsElement(arg1:string):Promise<string>;

export function TerminateSubFlow(arg1:string,arg2:string):Promise<void>;

export function UpdateProject(arg1:string,arg2:string):Promise<void>;

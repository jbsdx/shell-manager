import { IScript } from "./../script/IScript";
import { ScriptBase } from "./../script/ScriptBase";
export declare class Python extends ScriptBase implements IScript {
    private getArgumentArray;
    execute(): Promise<any>;
}

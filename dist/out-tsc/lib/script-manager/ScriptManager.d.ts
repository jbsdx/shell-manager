import { Shell } from "./../shell/Shell";
/**
 * Executes Scripts of type IScriptRunner
 */
export declare class ScriptManager {
    private script;
    private path;
    private shell;
    constructor(shell: Shell, path: string);
    private resolveScriptRunner();
    addArgument(key: string, value: string): boolean;
    execute(): Promise<any>;
}

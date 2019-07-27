import { Dictionary } from "typescript-collections";
export declare abstract class ScriptBase {
    private path;
    private argument;
    constructor(path: string);
    $path: string;
    addArgument(argKey: string, argValue: string): boolean;
    getArgumentList(): Dictionary<string, string>;
    validate(): Promise<any>;
    private fileExists;
}

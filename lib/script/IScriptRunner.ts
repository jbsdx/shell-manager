
export interface IScriptRunner {
    validate(): Promise<any>;
    execute(): Promise<any>;
}
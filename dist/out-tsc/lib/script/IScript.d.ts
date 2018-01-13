export interface IScript {
    validate(): Promise<any>;
    execute(): Promise<any>;
    addArgument(key: string, value: string): boolean;
}

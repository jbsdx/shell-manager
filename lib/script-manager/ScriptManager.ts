import { IScript } from "./../script/IScript";
import { Shell } from "./../shell/Shell";
import { Python } from "../shell/Python";
import Dictionary from "typescript-collections/dist/lib/Dictionary";

/**
 * Executes Scripts of type IScriptRunner
 */
export class ScriptManager {

    private script: IScript;
    private path: string;
    private shell: Shell;

    constructor(shell: Shell, path: string) {
        this.shell = shell;
        this.path = path;
        this.resolveScriptRunner();
    }

    private resolveScriptRunner() {
        switch(this.shell) {
            case Shell.Python:
                this.script = new Python(this.path);
        }
    }

    public addArgument(key: string, value: string): boolean {
        return this.script.addArgument(key, value);
    }

    public async execute(): Promise<any> {
        let promise = new Promise((resolve, reject) => {
            let valid = this.script.validate();
            valid
                .then((value) => {
                    return this.script.execute();
                })
                .then((value) => {
                    resolve(value);
                })
                .catch((reason) => {
                    reject(reason);
                });

        });
        return promise;
    }
}
import { IScriptRunner } from "./../script/IScriptRunner";

/**
 * Executes Scripts of type IScriptRunner
 * 
 * let scriptManager = ScriptManager(new Python());7
 * scriptManager.$path = "pytonScript.py";
 * scriptManager.addArgument("--cascaded", "5")
 *              .addArgument("--block-orientation", "0");
 * scriptManager.
 */
export class ScriptManager {

    private script: IScriptRunner;

    constructor(script: IScriptRunner) {
        this.script = script;
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
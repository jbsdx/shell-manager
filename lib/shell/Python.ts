import PythonShell = require("python-shell");
import { IScriptRunner } from "./../script/IScriptRunner";
import { ScriptBase } from "./../script/ScriptBase";

export class Python extends ScriptBase implements IScriptRunner {

    private getArgumentArray(): Array<string> {
        let argsList = this.getArgumentList(),
            array = [];
        argsList.forEach(function(key, value) {
            array.push(key);
            array.push(value);
        });
        return array;
    }

    public async execute(): Promise<any> {
        let promise = new Promise((resolve, reject) => {
            let argsArray = this.getArgumentArray();
            let options = {
                mode: 'text',
                pythonOptions: ['-u'],
                args: argsArray
            };
            PythonShell.run(this.$path, options, function (err, results) {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        return promise;
    };

}
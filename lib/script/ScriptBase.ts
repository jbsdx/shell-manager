import fs = require("file-system");
import { Dictionary } from "typescript-collections";

export abstract class ScriptBase {

    private path: string;
    private argument: Dictionary<string, string>;
    
    constructor(path: string) {
        this.path = path;
        this.argument = new Dictionary<string, string>();
    }

    public get $path(): string {
		return this.path;
	}

	public set $path(value: string) {
		this.path = value;
    }
    
    public addArgument(argKey: string, argValue: string): Dictionary<string, string> {
        this.argument.setValue(argKey, argValue);
        return this.argument;
    }

    public getArgumentList(): Dictionary<string, string> {
        return this.argument;
    }
    
    public async validate(): Promise<any> {
        let that = this;
        let promise = new Promise((resolve,reject) => {
            let exists = that.fileExists(that.path);
            if (exists) {
                resolve(true);
            } else {
                reject({error: "file not found", file: that.path});
            }
        });
        return promise;
    }

    private fileExists(path): boolean {
        return fs.existsSync(path);
    }

} 
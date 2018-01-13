import { assert } from "chai";
import { ScriptManager } from "../../lib/script-manager/ScriptManager";
import { Shell } from "../../lib/shell/Shell";

describe('ScriptManager', function () {
    describe('#python script runner', function () {
        it('should execute python script', function (done) {

            let scriptPath = "./test/script-manager/test.py";
            
            let scriptManager = new ScriptManager(Shell.Python, scriptPath);
            scriptManager.addArgument("--test1", "script");
            scriptManager.addArgument("--test2", "runner");
            scriptManager.execute()
                .then((value) => {
                    assert.equal(value,"scriptrunner");
                    done();
                })
                .catch((reason) => {
                    done(reason);
                });
        });

        it('should throw error if path is not available', function (done) {

            let scriptPath = "./test/script-manager/te12st.py";
            
            let scriptManager = new ScriptManager(Shell.Python, scriptPath);
            scriptManager.addArgument("--test1", "script");
            scriptManager.addArgument("--test2", "runner");
            scriptManager.execute()
                .then((value) => {
                    assert.equal(value,"scriptrunner");
                    done("no exception thrown!");
                })
                .catch((reason) => {
                    assert.equal(reason.error, "file not found");
                    done();
                });
            
        });

    });
});

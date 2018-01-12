import { assert } from "chai";
import { ScriptManager } from "../../lib/script-manager/ScriptManager";
import { Python } from "../../lib/shell/Python";

describe('ScriptManager', function () {
    describe('#python script runner', function () {
        it('should execute python script', function (done) {

            let pythonScript = new Python("./test/script-manager/test.py");
            pythonScript.addArgument("--test1", "script");
            pythonScript.addArgument("--test2", "runner");
            let scriptManager = new ScriptManager(pythonScript);
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

            let pythonScript = new Python("./test/script-manager/te12st.py");
            pythonScript.addArgument("--test1", "script");
            pythonScript.addArgument("--test2", "runner");
            let scriptManager = new ScriptManager(pythonScript);
            scriptManager.execute()
                .then((value) => {
                    assert.equal(value,"scriptrunner");
                    done();
                })
                .catch((reason) => {
                    assert.equal(reason.error, "file not found");
                    done();
                });
            
        });

    });
});

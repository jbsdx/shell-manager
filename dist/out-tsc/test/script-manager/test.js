"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var ScriptManager_1 = require("../../lib/script-manager/ScriptManager");
var Shell_1 = require("../../lib/shell/Shell");
describe('ScriptManager', function () {
    describe('#python script runner', function () {
        it('should execute python script', function (done) {
            var scriptPath = "./test/script-manager/test.py";
            var scriptManager = new ScriptManager_1.ScriptManager(Shell_1.Shell.Python, scriptPath);
            scriptManager.addArgument("--test1", "script");
            scriptManager.addArgument("--test2", "runner");
            scriptManager.execute()
                .then(function (value) {
                chai_1.assert.equal(value, "scriptrunner");
                done();
            })
                .catch(function (reason) {
                done(reason);
            });
        });
        it('should throw error if path is not available', function (done) {
            var scriptPath = "./test/script-manager/te12st.py";
            var scriptManager = new ScriptManager_1.ScriptManager(Shell_1.Shell.Python, scriptPath);
            scriptManager.addArgument("--test1", "script");
            scriptManager.addArgument("--test2", "runner");
            scriptManager.execute()
                .then(function (value) {
                chai_1.assert.equal(value, "scriptrunner");
                done("no exception thrown!");
            })
                .catch(function (reason) {
                chai_1.assert.equal(reason.error, "file not found");
                done();
            });
        });
    });
});
//# sourceMappingURL=test.js.map
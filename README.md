# Usage example

```typescript
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
```

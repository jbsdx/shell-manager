# Usage example

```typescript
let scriptManager = new ScriptManager(Shell.Python, "./skript.py");
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
```

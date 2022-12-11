# find-by-ext
Find all files in folder's by extname.
## Usage
```javascript
import { findByExt, findOneByExt, findLengthByExt } from "find-by-ext";
import path from "path";

const __dirname = path.resolve()
const files0 = findByExt(__dirname, [".js", ".py", ".ts"])
const files1 = findLengthByExt(__dirname, [".js", ".py", ".ts"], 5) // find 5
const file = findOneByExt(__dirname, ".dart")

console.log(files0, files1, file)
```

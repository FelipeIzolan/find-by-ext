# find-by-ext
Find all files in folder's by extname.
## Usage
```javascript
import { findByExt, findOneByExt } from "find-by-ext";
import path from "path";

const __dirname = path.resolve()
const files = findByExt(__dirname, [".js", ".py", ".ts"])
const file = findOneByExt(__dirname, ".dart")

console.log(files, file)
```

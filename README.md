# find-by-ext
Find all files in folder's by extname.
## Usage
```javascript
import { findByExt, findOneByExt } from "find-by-ext";
import path from "path";

// path.resolve() === __dirname
const result = findByExt(path.resolve(), [".js", ".py", ".ts"])
console.log(result)
```

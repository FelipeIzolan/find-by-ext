import fs from "fs"
import path from "path"

// filder = folder or file
function findFiles(filders: string[], dir: string, ext: string | string[], output: string[], length?: number) {
  let extAllowed = typeof ext === "string" ? [ext] : ext;
  
  filders.forEach(currentFilder => {
    let filderPath = dir + `/${currentFilder}`;
		let filderStat = fs.statSync(filderPath);

    if (filderStat.isFile() && output.length !== length) {
      const fileExt = path.extname(filderPath);

      if (extAllowed.includes(fileExt)) {
			  let file = path.resolve(filderPath);
        output.push(file);
			}
    }

		if (filderStat.isDirectory()) {
			let files = fs.readdirSync(filderPath);
			findFiles(files, filderPath, ext, output, length);
		}

  });
}

function findByExt(dir: string, ext: string | string[]): Array<string> {
    let files = fs.readdirSync(dir);
    let list: Array<string> = [];

		findFiles(files, dir, ext, list);
    return list;
}

function findOneByExt(dir: string, ext: string | string[]): string {
	let files = fs.readdirSync(dir);
	let file: Array<any> = [];
  
  findFiles(files, dir, ext, file, 1);

	return file[0];
}

function findLengthByExt(dir: string, ext: string | string[], length: number) {
  let files = fs.readdirSync(dir);
	let list: Array<string> = [];
  
  findFiles(files, dir, ext, list, length);

  return list;
}

export {
	findByExt,
  findOneByExt,
  findLengthByExt
}

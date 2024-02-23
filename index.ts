import fs from "fs"
import path from "path"

// filder = folder or file
function findFiles(filders: string[], directory: string, list: string[], whitelist: string[], limit?: number) {  
  for (const filder of filders) {
    let _path = `${directory}/${filder}`;
    let stat = fs.statSync(_path);
  
    if (stat.isFile() && list.length != limit) {
      let extname = path.extname(_path);

      if (whitelist.includes(extname)) 
        list.push(path.resolve(_path));
    }

    if (stat.isDirectory()) {
      let files = fs.readdirSync(_path);
      findFiles(files, _path, list, whitelist, limit);
    }
  }
}

function findByExt(directory: string, whitelist: string[]): string[] {
    let files = fs.readdirSync(directory);
    let list: Array<string> = [];

		findFiles(files, directory, list, whitelist);
    
    return list;
}

function findByExtOne(directory: string, whitelist: string[]): string {
	let files = fs.readdirSync(directory);
	let file: string[] = [];
  
  findFiles(files, directory, file, whitelist, 1);

	return file[0];
}

function findByExtLimit(directory: string, whitelist: string[], limit: number): string[] {
  let files = fs.readdirSync(directory);
	let list: string[] = [];
  
  findFiles(files, directory, list, whitelist, limit);

  return list;
}

export {
	findByExt,
  findByExtOne,
  findByExtLimit
}

import fs from "fs"
import path from "path"

function findByExt(dir: string, ext: string | string[]): Array<string> {
		let extAllowed  = typeof ext === "string" ? [ext] : ext
    let files = fs.readdirSync(dir)
		let list: string[] = []

		findFiles(files, dir)
    return list

    // filder = folder or file
    function findFiles(filders: string[], dir: string) {
        filders.forEach(currentFilder => {
            let filderPath = dir + `/${currentFilder}`
						let filderStat = fs.statSync(filderPath)

            if (filderStat.isFile()) {
                const fileExt = path.extname(filderPath)

                if (extAllowed.includes(fileExt)) {
									let file = path.resolve(filderPath)
									list.push(file)
								}
            }

						if (filderStat.isDirectory()) {
							let files = fs.readdirSync(filderPath)
							findFiles(files, filderPath)
						}
        })
    }
}

function findOnebyExt(dir: string, ext: string): string {
	let files = fs.readdirSync(dir)
	let file = ""

	findFile(files, dir)
	return file

  // filder = folder or file
	function findFile(filders: string[], dir: string) {
		for(let i = 0; i < filders.length; i++) {
			let filder = filders[i]
			let filderPath = dir + `/${filder}`
			let filderStat = fs.statSync(filderPath)

			if (filderStat.isFile()) {
    		const fileExt = path.extname(filderPath)

        if (ext === fileExt) {
					return file = path.resolve(filderPath)
				}
			}

			if (filderStat.isDirectory() && file === "") {
				let files = fs.readdirSync(filderPath)
				findFile(files, filderPath)
			}
		}
	}
}

export {
	findByExt,
	findOnebyExt
}

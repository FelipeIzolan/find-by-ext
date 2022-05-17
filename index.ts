import fs from "fs"
import path from "path"

function findByExt(folderPath: string, extAllowed: string[]) {
    let files: string[] = []
    let folder_files = fs.readdirSync(folderPath)
    extractFiles(folder_files, folderPath)

    return files

    // filder = folder or file
    function extractFiles(filders: string[], dir: string) {
        filders.forEach((current_filder) => {
            let filder_path = dir + `/${current_filder}`

            // if filder is file
            if (fs.statSync(filder_path).isFile()) {
                const ext = path.extname(filder_path)
                if (extAllowed.includes(ext)) return files.push(filder_path)
                else return
            }

            // if filder is folder
            let current_folder_files = fs.readdirSync(filder_path)
            return extractFiles(current_folder_files, filder_path)
        })
    }
}

export default findByExt
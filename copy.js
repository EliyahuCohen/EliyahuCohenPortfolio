const fs = require("fs");
const path = require("path");

const OUTPUT_FILE = "FullProjectDump.txt";

// Folders and files to exclude
const EXCLUDE_FOLDERS = ["node_modules", ".next", ".git"];
const EXCLUDE_FILES = ["pnpm-lock.yaml", "package-lock.json", "yarn.lock"];

function shouldExclude(filePath) {
    // Exclude folders
    if (EXCLUDE_FOLDERS.some(folder => filePath.includes(path.sep + folder + path.sep))) {
        return true;
    }

    // Exclude files
    if (EXCLUDE_FILES.some(file => filePath.endsWith(file))) {
        return true;
    }

    return false;
}

function readFilesRecursively(dir) {
    let results = [];
    const list = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of list) {
        const fullPath = path.join(dir, file.name);
        if (shouldExclude(fullPath)) continue;

        if (file.isDirectory()) {
            results = results.concat(readFilesRecursively(fullPath));
        } else {
            results.push(fullPath);
        }
    }

    return results;
}

function combineFiles() {
    if (fs.existsSync(OUTPUT_FILE)) {
        fs.unlinkSync(OUTPUT_FILE);
    }

    const allFiles = readFilesRecursively(process.cwd());

    for (const filePath of allFiles) {
        fs.appendFileSync(OUTPUT_FILE, `==== FILE: ${filePath} ====\n\n`);
        const content = fs.readFileSync(filePath, "utf8");
        fs.appendFileSync(OUTPUT_FILE, content + "\n\n");
    }

    console.log(`All files combined into ${OUTPUT_FILE}`);
}

combineFiles();

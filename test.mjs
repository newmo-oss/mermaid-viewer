// arguments is an array of file paths
import fs from "node:fs/promises";
import { parseArgs } from 'node:util';

const { positionals } = parseArgs({ args: process.argv.slice(2), allowPositionals: true });
if (!positionals.length) {
    console.log('No files provided')
    process.exit(0);
}
// # get ```mermaid(mermaidText)``` code content and print ::notice file={name},line={line},endLine={endLine},title=Viewer::test#{mermaidText}
const fileContents = await Promise.all(positionals.map(async (file) => {
    return {
        name: file,
        content: await fs.readFile(file, 'utf-8')
    }
}));
console.log(fileContents);
for (const fileContent of fileContents) {
    const { content } = fileContent;
    const mermaidCodes = content.matchAll(/```mermaid([\s\S]*?)```/g);
    for (const mermaidCode of mermaidCodes) {
        const mermaidText = mermaidCode[1];
        console.log(`::notice file=${fileContent.name},line=${mermaidCode.index},endLine=${mermaidCode.index + mermaidCode[0].length},title=Mermaid Viewer::https://azu.github.io/it-mermaid-viewer/#${encodeURIComponent(mermaidText)}`);
    }
}

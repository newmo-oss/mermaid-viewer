# @newmo-oss/mermaid-viewer

User Friendly [Mermaid](https://mermaid.js.org/) Diagram Viewer.

## WebSite

- <https://newmo-oss.github.io/mermaid-viewer/>

## Motivation

Mermaid is a great tool for creating diagrams.
However, it is hard to read large diagrams because the default viewer does not support interactive features like zooming in/out.

[@newmo-oss/mermaid-viewer](https://newmo-oss.github.io/mermaid-viewer/) is a user-friendly Mermaid diagram viewer that supports interactive features like zooming in/out and step-by-step sequence viewing.

https://github.com/newmo-oss/mermaid-viewer/assets/19714/9b78b1fc-0b74-4233-948d-ff46f484bbe8

## Features

- Interactive controller for [Sequence diagrams](https://mermaid.js.org/syntax/sequenceDiagram.html)
  - Enable `autonumber` option by default
- Zoom in/out
- Support embed as iframe into your site
  - `?text=<url-encoded-mermaid-text>` query parameter

## Usage

1. Visit <https://newmo-oss.github.io/mermaid-viewer/>
2. Write Mermaid text
3. Render
4. Share it!

## URL Parameters/Hash

[@newmo-oss/mermaid-viewer](https://newmo-oss.github.io/mermaid-viewer/) support query parameters.

- `?sequence-number=<number>`: Start sequence number
- `#<url-encoded-mermaid-text>`: Embed Mermaid text
  - e.g. `?text=encodeURIComponent('sequenceDiagram\nA->>B: Hello')`
  - Note: @newmo-oss/mermaid-viewer compress Mermaid text by [DEFLATE](https://www.rfc-editor.org/rfc/rfc1951).
  - Allow you to use url-encoded text for passing data, but it will be compressed and rewrite the hash.

### Example

Pass your Mermaid text by URL parameters.

```
// encodeURIComponent('sequenceDiagram\nA->>B: Hello')
https://newmo-oss.github.io/mermaid-viewer/?sequence-number=10#sequenceDiagram%0AA-%3E%3EB%3A%20Hello
```

## GitHub Actions Integration

If you commit mermaid text to your repository, you can add a link to the @newmo-oss/mermaid-viewer to the PR.

```yaml
name: mermaid-viewer-notice
on:
  pull_request:
    paths:
      - '**/*.md'
permissions:
  contents: read
jobs:
  mermaid-viewer-notice:
    name: Add Mermaid Viewer Link to PR
    runs-on: ubuntu-latest
    steps:
      - name: checkout
        uses: actions/checkout@v4
      - name: setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Get changed files
        id: changed-files
        uses: tj-actions/changed-files@20576b4b9ed46d41e2d45a2256e5e2316dde6834
        with:
          separator: ","
          files: |
            **/*.md
      - name: Show changed files
        run: echo "${{ steps.changed-files.outputs.all_changed_files }}"
      - name: Add notice to PR
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require("node:fs/promises");
            const positionals = process.env.CHANGED_FILES.split(",").filter(Boolean);
            const fileContents = await Promise.all(positionals.map(async (file) => {
                return {
                    name: file,
                    content: await fs.readFile(file, 'utf-8')
                }
            }));
            const compress = async (target) => {
                const arrayBufferToBinaryString = (arrayBuffer) => {
                    const bytes = new Uint8Array(arrayBuffer);
                    let binaryString = "";
                    for (let i = 0; i < bytes.byteLength; i++) {
                        binaryString += String.fromCharCode(bytes[i]);
                    }
                    return binaryString;
                };
                const blob = new Blob([target]);
                const stream = blob.stream();
                const compressedStream = stream.pipeThrough(
                    new CompressionStream("deflate")
                );
                const buf = await new Response(compressedStream).arrayBuffer();
                const binaryString = arrayBufferToBinaryString(buf);
                return btoa(binaryString);
            };
            for (const fileContent of fileContents) {
                const { content } = fileContent;
                const mermaidCodes = content.matchAll(/```mermaid([\s\S]*?)```/g);
                for (const mermaidCode of mermaidCodes) {
                    const mermaidText = mermaidCode[1];
                    const compressed = await compress(mermaidText);
                    const startLine = content.slice(0, mermaidCode.index).split("\n").length;
                    const endLine = content.slice(0, mermaidCode.index + mermaidCode[0].length).split("\n").length;
                    console.log(`file: ${fileContent.name}, startColumn: ${mermaidCode.index}, endColumn: ${mermaidCode.index + mermaidCode[0].length}, startLine: ${startLine}, endLine: ${endLine}`);
                    core.summary.addCodeBlock(`${mermaidText}`, 'mermaid');
                    core.summary.addLink('Mermaid Viewer', `https://newmo-oss.github.io/mermaid-viewer/#${compressed}`);
                    core.summary.addSeparator();
                    core.summary.write({overwrite: true})
                    core.notice(`https://newmo-oss.github.io/mermaid-viewer/#${compressed}`, { title: "Mermaid Viewer", file: fileContent.name, startLine, endLine });
                }
            }
        env:
          CHANGED_FILES: ${{ steps.changed-files.outputs.all_changed_files }}
```


## Changelog

See [Releases page](https://github.com/newmo-oss/mermaid-viewer/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/newmo-oss/mermaid-viewer/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT © newmo, Inc.

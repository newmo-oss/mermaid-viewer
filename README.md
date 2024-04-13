# it-mermaid-viewer

Interactive Mermaid Viewer.

## Features

- Interactive controller for [Sequence diagrams](https://mermaid.js.org/syntax/sequenceDiagram.html)
  - Enable `autonumber` option by default
- Zoom in/out
- Support embed
  - `?text=<url-encoded-mermaid-text>` query parameter

## Usage

1. Open [it-mermaid-viewer](https://azu.github.io/it-mermaid-viewer/)
2. Click "🛠️"(Edit) button
3. Write Mermaid text
4. Render
5. Fun!!!

## URL Parameters/Hash

it-mermaid-viewer support query parameters.

- `?sequence-number=<number>`: Start sequence number
- `#<url-encoded-mermaid-text>`: Embed Mermaid text
  - e.g. `?text=encodeURIComponent('sequenceDiagram\nA->>B: Hello')`
  - Note: it-mermaid-viewer compress Mermaid text by [DEFLATE](https://www.rfc-editor.org/rfc/rfc1951).
  - Allow you to use url-encoded text for passing data, but it will be compressed and rewrite the hash.

### Example

Pass your Mermaid text by URL parameters.

```
// encodeURIComponent('sequenceDiagram\nA->>B: Hello')
?sequence-number=10#sequenceDiagram%0AA-%3E%3EB%3A%20Hello
```

## Changelog

See [Releases page](https://github.com/azu/it-mermaid-viewer/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/it-mermaid-viewer/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT © azu

import { MermaidController, urlStorage } from './MermaidController';
customElements.define('x-mermaid-controller', MermaidController);
const mermaid = document.querySelector("x-mermaid-controller");
if (!mermaid) {
    throw new Error("Mermaid controller not found");

}
const defaultSequence = `sequenceDiagram
    autonumber
    Alice->>Bob: Hello Bob, how are you ?
    Bob->>Alice: Fine, thank you. And you?
    create participant Carl
    Alice->>Carl: Hi Carl!
    create actor D as Donald
    Carl->>D: Hi!
    destroy Carl
    Alice-xCarl: We are too many
    destroy Bob
    Bob->>Alice: I agree
`;
mermaid.setAttribute("text", urlStorage.get("text") ?? defaultSequence);
// @ts-expect-error listen change event
mermaid.addEventListener("change", (e: CustomEvent<{ text: string }>) => {
    urlStorage.set("text", e.detail.text);
});

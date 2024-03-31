import { MermaidController, urlStorage } from "./MermaidController";
customElements.define("x-mermaid-controller", MermaidController);
const mermaid = document.querySelector("x-mermaid-controller") as MermaidController;
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
mermaid.setAttribute("sequence-number", urlStorage.get("sequence-number") ?? "0");
mermaid.on("textChange", (event) => {
    urlStorage.set("text", event.detail.text);
});
mermaid.on("sequenceChange", (event) => {
    urlStorage.set("sequence-number", String(event.detail.sequenceNumber));
});

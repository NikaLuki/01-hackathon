import "./styles.css";
import { ContextMenu } from "./menu";

const contextMenu = new ContextMenu(".menu");
contextMenu.add();
document.body.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    contextMenu.open(event);
});

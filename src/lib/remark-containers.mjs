import { visit } from "unist-util-visit";

const classMap = {
  lead: ["text-lead"],
  note: ["rounded", "p-4", "bg-blue-400", "[&>p]:m-0"],
};

const OPEN = /^:{3,}\s*(lead|note)[ \t]*\r?\n/;
const CLOSE = /\r?\n:{3,}[ \t]*$/;

function applyContainer(node, name) {
  const className = classMap[name];
  if (!className) return;

  node.data ||= {};
  node.data.hName = "div";
  node.data.hProperties = { className };
}

export function remarkContainers() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === "containerDirective" || node.type === "leafDirective") {
        applyContainer(node, node.name);
      }
    });

    visit(tree, "paragraph", (node) => {
      const children = node.children ?? [];
      const first = children[0];
      const last = children[children.length - 1];
      if (first?.type !== "text") return;

      const open = first.value.match(OPEN);
      if (!open) return;

      first.value = first.value.slice(open[0].length);

      if (last?.type === "text") {
        last.value = last.value.replace(CLOSE, "");
      }

      if (first.value === "") children.shift();
      const nextLast = children[children.length - 1];
      if (nextLast?.type === "text" && nextLast.value === "") children.pop();

      applyContainer(node, open[1]);
    });
  };
}

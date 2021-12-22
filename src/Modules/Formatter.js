import { Stack } from "../Modules/Stack";

export function pf(string) {
    let stack = new Stack();
    let childrenArary = [];

    let i = 0;
    while (i < string.length) {
        if (string.charAt(i) === "#" && string.charAt(i + 1) != "/") {
            let ft = "";
            i++;

            while (string.charAt(i) != "{" && i < string.length) {
                ft += string.charAt(i);
                i++;
            }

            if (ft === "style") {
                let p = "";
                while (string.charAt(i) !== "}") {
                    p += string.charAt(i);
                    i++;
                }
                p += "}";
                const params = JSON.parse(p);
                stack.push({ start: i + 1, params: params });
            }
        } else if (string.charAt(i) === "#" && string.charAt(i + 1) === "/") {
            const top = stack.top();
            const o = { start: top.start, end: i - 1, params: top.params };
            childrenArary.push(o);
            stack.pop();
            i++;
        }
        i++;
    }
    childrenArary.sort((a, b) => {
        return a.start - b.start;
    });
    console.log(childrenArary);
    let parent = document.createElement("p");
    let a = createNodes(childrenArary, string, parent, 0);
}

function createNodes(v, string, parent, pos) {
    if (pos == v.length) {
        console.log(parent);
        return parent;
    }
    // Creating current element
    let e = document.createElement("span");
    const textNode = document.createTextNode(
        string.substring(v[pos].start, v[pos].end)
    );
    e.append(textNode);
    console.log(parent);

    if (pos < v.length - 1 && v[pos + 1].end < v[pos].end) {
        return createNodes(v, string, e, pos + 1);
    } else {
        parent.append(e);
        return createNodes(v, string, parent, pos + 1);
    }
}

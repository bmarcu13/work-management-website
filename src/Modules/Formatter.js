import { Stack } from "../Modules/Stack";

/* FORMATTER*/
/*  
    #########
    # USAGE #
    #########

    SYNTAX
    ---------
    Start Tag: #style{[styles]}
    End Tag: #/
    [styles]: Contents of an array of preperties representing React.Stylesheet key, value pairs.

    Parameters
    ---------
    string: A formatted string to be transformed into styled JSX

    Returns
    ---------
    A JSX Object

*/

export function formatText(string) {
    let v = pf(string);

    if (v.length > 0) {
        return (
            <p>
                <span>{string.substring(0, v[0].start - v[0].tagLength)}</span>
                {v.map((data, index) => {
                    const renderPrefix = () => {
                        if (index > 0) {
                            return (
                                <span key={index + ".first"}>
                                    {string.substring(
                                        v[index - 1].end + 2,
                                        v[index].start - v[index].tagLength
                                    )}
                                </span>
                            );
                        }
                    };
                    return [
                        renderPrefix(),
                        <span key={index + ".second"} style={v[index].params}>
                            {string.substring(v[index].start, v[index].end)}
                        </span>,
                    ];
                })}
                <span>
                    {string.substring(v[v.length - 1].end + 2, string.length)}
                </span>
            </p>
        );
    } else {
        return <p>{string}</p>;
    }
}

function pf(string) {
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
                stack.push({
                    start: i + 1,
                    params: params,
                    tagLength: p.length + ft.length + 1,
                });
            }
        } else if (string.charAt(i) === "#" && string.charAt(i + 1) === "/") {
            const top = stack.top();
            const o = {
                start: top.start,
                end: i,
                params: top.params,
                tagLength: top.tagLength,
            };
            childrenArary.push(o);
            stack.pop();
            i++;
        }
        i++;
    }
    childrenArary.sort((a, b) => {
        return a.start - b.start;
    });

    return childrenArary;
}

import React from "react";

import { CgAsterisk } from "react-icons/cg";

export default function Field(params) {
    if (params.type == "messageField")
        return (
            <div className="field">
                <p>
                    {params.name}
                    <CgAsterisk
                        color="red"
                        size={14}
                        style={{ marginLeft: "-3px", marginBottom: "3px" }}
                    ></CgAsterisk>
                </p>
                <textarea
                    className={params.type && "messageField"}
                    required
                    name="name"
                ></textarea>
            </div>
        );
    return (
        <div className="field">
            <p>
                {params.name}
                <CgAsterisk
                    color="red"
                    size={14}
                    style={{ marginLeft: "-3px", marginBottom: "3px" }}
                ></CgAsterisk>
            </p>
            <input required name="name"></input>
        </div>
    );
}

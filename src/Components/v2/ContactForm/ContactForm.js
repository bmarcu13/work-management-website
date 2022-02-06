import React from "react";
import Field from "./Input/Field";
import "./ContactForm.css";

import { HiOutlineChatAlt } from "react-icons/hi";
import formbg from "../../../../src/img/layered-waves-services.svg";

export default function ContactForm(params) {
    const fields = params.fields;
    return (
        <form className="formv2">
            {/* <img src={formbg}></img> */}
            <div className="title">
                <h1>
                    Scrie-ne
                    <HiOutlineChatAlt
                        style={{ marginBottom: "10px" }}
                    ></HiOutlineChatAlt>
                </h1>
                <p>
                    Vrei să afli mai multe, să ne cunoști sau să faci o
                    sesizare? Suntem la un mail distanță.
                </p>
            </div>
            <div className="fields">
                {fields.map((data) => {
                    return (
                        <Field name={data.description} type={data.type}></Field>
                    );
                })}
            </div>
        </form>
    );
}

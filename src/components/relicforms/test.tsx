import React from "react";
import { Form, useRelicForm } from "./form";
import { Input, SimpleInput, useRelicInputController } from "./inputfuncs";

export default function Test() {
  //   const input1 = useRelicInputController();
  const formhook = useRelicForm({
    username: "",
    password: "",
  });

  return (
    <div>
      <Form
        formHookObj={formhook}
        onSubmit={(data) => {
          console.log(data.username, data.password);
        }}
      >
        <Input
          placeholder="Input"
          label="label"
          validator={(v) => {
            if (v.length < 5) {
              return "required";
            }
            return null;
          }}
          className="w-[300px]"
          ref={formhook.fieldRefs.username}
        />
        <Input
          placeholder="Input"
          label="label"
          validator={(v) => {
            if (v.length < 5) {
              return "required";
            }
            return null;
          }}
          className="w-[300px]"
          ref={formhook.fieldRefs.password}
        />
        <button type="submit" className="">
          clickme
        </button>
      </Form>
    </div>
  );
}

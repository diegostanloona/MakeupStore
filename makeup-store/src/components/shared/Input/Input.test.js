import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input Test", () => {
  it("Input renders", () => {
    render(<Input onInput={() => {}}></Input>);
  });

  it("return the expected values on onInput function after the user types", () => {
    const nextValues = { id: "1", value: "test message", isValid: true };
    let initialValues;
    const onInputHandler = (id, value, isValid) => {
      initialValues = { id: id, value: value, isValid: isValid };
    };
    const inputComponent = render(
      <Input id="1" onInput={onInputHandler} validators={[]}></Input>
    );

    userEvent.type(inputComponent.getByRole("textbox"), "test message");

    expect(nextValues).toEqual(initialValues);
  });

  it("renders an input tag if props.element === input", () => {
    const inputComponent = render(
      <Input type="text" id="test" element="input" onInput={() => {}}></Input>
    );

    const input = inputComponent.getByRole("textbox");

    expect(input.type).toEqual("text");
  });

  it("renders a textarea tag if props.element !== input", () => {
    const inputComponent = render(
      <Input id="test" element="anything" onInput={() => {}}></Input>
    );

    const input = inputComponent.getByRole("textbox");

    expect(input.type).toEqual("textarea");
  });
});

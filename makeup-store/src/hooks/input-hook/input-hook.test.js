import { renderHook, act } from "@testing-library/react-hooks";
import { VALIDATOR_MAXLENGTH } from "util/validators/validators";
import { useInput } from "./input-hook";

describe("Input test", () => {
  const initialInputValue = "test value";
  const initialInputValidity = true;
  const inputHandler = (id, value, isValid) => {
    //console.log(id, value, isValid);
  };

  let result;
  beforeEach(() => {
    result = renderHook(() =>
      useInput(
        initialInputValue,
        initialInputValidity,
        "someId",
        inputHandler,
        [VALIDATOR_MAXLENGTH(12)]
      )
    ).result;
  });

  it("checks if initial inputState.value is equal to the given paremeter", () => {
    expect(result.current.inputState.value).toEqual(initialInputValue);
  });
  it("checks if initial inputState.isValid is equal to the given parameter", () => {
    expect(result.current.inputState.isValid).toEqual(initialInputValidity);
  });
  it("checks if inputState.value updates correctly after changeHandler is fired", () => {
    const newInputValue = "new value";
    act(() => {
      result.current.changeHandler({ target: { value: newInputValue } });
    });
    expect(result.current.inputState.value).toEqual(newInputValue);
  });
  it("checks if inputState.isValid is false after changeHandler is fired while using a validator with a value that does not satisfy it", () => {
    const newInputValue = "a really really long value, it should be shorter";
    act(() => {
      result.current.changeHandler({ target: { value: newInputValue } });
    });
    expect(result.current.inputState.isValid).toEqual(false);
  });
  it("checks if inputState.isTouched updates after touchHandler is fired", () => {
    act(() => {
      result.current.touchHandler();
    });
    expect(result.current.inputState.isTouched).toEqual(true);
  });
});

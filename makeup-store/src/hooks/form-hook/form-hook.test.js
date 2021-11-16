import { useForm } from "./form-hook";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Form Hook test", () => {
  const initialInputs = {
    name: {
      value: "",
      isValid: false,
    },
  };

  const initialFormValidity = false;

  let result;

  beforeEach(() => {
    result = renderHook(() =>
      useForm(initialInputs, initialFormValidity)
    ).result;
  });

  it("formState initialInputs are set equal to the given parameter", () => {
    expect(result.current.formState.inputs).toEqual(initialInputs);
  });

  it("formState initialFormValidity is set equal to the given parameter", () => {
    expect(result.current.formState.isValid).toEqual(initialFormValidity);
  });

  it("checks if formState updates correctly after inputHandler is fired", () => {
    act(() => {
      const { inputHandler } = result.current;
      inputHandler("name", "new name", true);
    });

    //Checks the value and its validity
    expect(result.current.formState.inputs).toEqual({
      name: { value: "new name", isValid: true },
    });

    //Checks the form validity (should be true since the new value is valid)
    expect(result.current.formState.isValid).toEqual(true);
  });

  it("checks if formState change after setFormData is fired", () => {
    const newFormInputs = {
      email: { value: "new value", isValid: true },
    };
    const newFormValidity = true;
    act(() => {
      const { setFormData } = result.current;
      setFormData(newFormInputs, newFormValidity);
    });

    //Checks new inputs
    expect(result.current.formState.inputs).toEqual(newFormInputs);

    //Checks new formValidity
    expect(result.current.formState.isValid).toEqual(newFormValidity);
  });
});

import Input from "components/shared/Input/Input";
import { useForm } from "hooks/form-hook/form-hook";

const ContactForm = () => {
  const { inputHandler } = useForm({
    inputs: {
      homeContactFormName: {
        value: "",
        isValid: false,
      },
      homeContactFormEmail: {
        value: "",
        isValid: false,
      },
      homeContactFormMessage: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  return (
    <div className="contact_form">
      <form>
        <Input
          id="homeContactFormName"
          placeholder="Name"
          element="input"
          onInput={inputHandler}
        ></Input>
        <Input
          id="homeContactFormEmail"
          placeholder="Email"
          element="input"
          onInput={inputHandler}
        ></Input>
        <Input
          id="homeContactFormMessage"
          placeholder="Message"
          element="textarea"
          onInput={inputHandler}
        ></Input>
        {/** This button is just for the looks*/}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;

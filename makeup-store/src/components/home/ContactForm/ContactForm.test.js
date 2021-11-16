import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("Contact form test", () => {
  it("Contact form renders", () => {
    render(<ContactForm />);
  });

  it("Form contains name input", () => {
    const contactForm = render(<ContactForm />);
    contactForm.getByPlaceholderText("Name");
  });

  it("Form contains email input", () => {
    const contactForm = render(<ContactForm />);
    contactForm.getByPlaceholderText("Email");
  });

  it("Form contains message textarea", () => {
    const contactForm = render(<ContactForm />);
    contactForm.getByPlaceholderText("Message");
  });
});

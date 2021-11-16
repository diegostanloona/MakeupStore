import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home test", () => {
  it("Renders Home Page", () => {
    render(<Home />);
  });
});

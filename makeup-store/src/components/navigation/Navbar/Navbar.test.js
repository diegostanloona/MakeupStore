import { fireEvent, render } from "@testing-library/react";
import Navbar from "components/navigation/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navbar test", () => {
  const routes = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: "Cart", url: "/cart" },
    { name: "Auth", url: "/auth" },
  ];

  it("Navbar renders", () => {
    render(
      <Router>
        <Navbar routes={routes} />
      </Router>
    );
  });

  it("renders each navlink correctly", () => {
    const component = render(
      <Router>
        <Navbar routes={routes} />
      </Router>
    );
    for (let route of routes) {
      const routeLabel = component.queryByText(route.name);
      expect(routeLabel).toBeTruthy();
    }
  });

  it("updates the browser URL after each navlink is clicked", () => {
    const component = render(
      <Router>
        <Navbar routes={routes} />
      </Router>
    );
    const route = routes[2];

    const routeLabel = component.queryByText(route.name);

    fireEvent.click(routeLabel);

    expect(window.location.pathname).toEqual(route.url);
  });
});

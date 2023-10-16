import { render, screen } from "@testing-library/react";
import NavigationComponent from "./navigation.component";

describe("NavigationComponent", () => {

  it("should render", () => {
    render(<NavigationComponent />);
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  })

  it("should have the logo name", () => {
    render(<NavigationComponent />);
    expect(screen.getByText(/Memorush/i)).toBeInTheDocument();
  })
})
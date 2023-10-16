import { screen } from "@testing-library/react";
import { renderWithProvidersAndMemoryRouter } from "../../../../utils/test.utils"
import HeroComponent from "./hero.component"

describe("HeroComponent", () => {
  it("should render", () => {
    renderWithProvidersAndMemoryRouter(<HeroComponent />);
    expect(screen.getByTestId("hero")).toBeInTheDocument();
  })

  it("should has the class hero", () => {
    renderWithProvidersAndMemoryRouter(<HeroComponent />);
    expect(screen.getByTestId("hero")).toHaveClass("hero");
  })
})
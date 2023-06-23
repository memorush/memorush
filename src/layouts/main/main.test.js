import MainLayout from "./main.layout";
import { render } from "@testing-library/react";
import { renderWithProvidersAndMemoryRouter } from "../../utils/test.utils";

describe("MainLayout", () => {
  it("should render", () => {
    const { container } = renderWithProvidersAndMemoryRouter(<MainLayout />);
    expect(container).toBeInTheDocument();
  })
})
import CardSetPage from "./card-set.page";
import { renderWithProvidersAndMemoryRouter } from "../../../utils/test.utils";
import { screen } from "@testing-library/react";

describe("CardSetPage", () => {
  it("Should render", () => {
    renderWithProvidersAndMemoryRouter(<CardSetPage />);
    expect(screen.getByTestId("cardSet")).toBeInTheDocument();
  })
})
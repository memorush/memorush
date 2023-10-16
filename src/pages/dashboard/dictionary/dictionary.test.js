import DictionaryPage from "./dictionary.page";
import { renderWithProvidersAndMemoryRouter } from "../../../utils/test.utils";
import { screen } from "@testing-library/react";


describe("DictionaryPage", () => {
  it("Should render", () => {
    renderWithProvidersAndMemoryRouter(<DictionaryPage/>);
    expect(screen.getByTestId("dictionary")).toBeInTheDocument();
  })
})
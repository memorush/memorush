import { render, screen } from "@testing-library/react";
import TermOfUsePage from "./term-of-use.page";

describe("TermOfUse", () => {
  it("should render", () => {
    render(<TermOfUsePage/>);
    expect(screen.getByTestId("termOfUse")).toBeInTheDocument();
  })

  it("should has tag <h3> with text Пользовательское", () => {
    render(<TermOfUsePage/>);
    expect(screen.getByText(/Пользовательское/i)).toBeInTheDocument();
  })
})
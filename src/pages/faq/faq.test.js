import { render, screen } from "@testing-library/react";
import FaqPage from "./faq.page";

describe("FaqPage", () => {
  it("should render", () => {
    render(<FaqPage/>);
    expect(screen.getByTestId("faqPage")).toBeInTheDocument();
  })

  it("should contain text 'Часто задаваемые вопросы'", () => {
    render(<FaqPage/>);
    expect(screen.getByText(/Часто задаваемые вопросы/i)).toBeInTheDocument();
  })
})
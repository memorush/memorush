import { render, screen } from "@testing-library/react";
import PrivacyPolicyPage from "./privacy-policy.page";

describe("PrivacyPolicy", () => {
  it("should render", () => {
    render(<PrivacyPolicyPage/>);
    expect(screen.getByTestId("privacyPolicy")).toBeInTheDocument();
  })

  it("should have class privacyPolicy", () => {
    render(<PrivacyPolicyPage/>);
    expect(screen.getByTestId("privacyPolicy")).toHaveClass("privacyPolicy");
  })

  it("should contain text 'Политика конфиденциальности'", () => {
    render(<PrivacyPolicyPage/>);
    expect(screen.getByText(/Политика конфиденциальности/i)).toBeInTheDocument();
  })
})
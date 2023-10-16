import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import DeveloperComponent from "./developer.component";

jest.mock('react-awesome-reveal', () => ({
  Fade: (props) => (<>{props.children}</>)
}));

describe("DeveloperComponent", () => {

  it("should render", () => {
    render(<DeveloperComponent />);
    expect(screen.getByTestId("developer")).toBeInTheDocument();
  })

  it("should have the title", () => {
    render(<DeveloperComponent/>);
    expect(screen.getByText(/О технологии разработки/i)).toBeInTheDocument();
  })
})
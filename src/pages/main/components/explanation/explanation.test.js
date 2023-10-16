import { screen, render } from "@testing-library/react";
import ExplanationsComponent from "./explanation.component";

jest.mock('react-awesome-reveal', () => ({
  Slide: (props) => (<>{props.children}</>)
}));

describe("ExplanationsComponent", () => {

  it("should render", () => {
    render(<ExplanationsComponent />);
    expect(screen.getByTestId("explanations")).toBeInTheDocument();
  })

  it("should have the title", () => {
    render(<ExplanationsComponent/>);
    expect(screen.getByText(/Почему стоит выбрать именно это приложение?/i)).toBeInTheDocument();
  })
})
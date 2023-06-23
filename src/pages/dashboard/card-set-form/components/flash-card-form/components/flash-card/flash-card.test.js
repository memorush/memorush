import { render } from "@testing-library/react";
import FlashCardComponent from "./flash-card.component";

describe("FlashCardComponent", () => {
  it("should be in the document", () => {
    const { container } = render(<FlashCardComponent
      cardSetEntity={{
        flashCardArray: [
          {
            frontSide: "Hello",
            backSide: "Привет",
            hint: "Это приветствие"
          }
        ]
      }}
      setCardSetEntity={() => { }}
      deleteCardElementHandler={() => { }}
      id={0}
    />);
    expect(container).toBeInTheDocument();
  });


})
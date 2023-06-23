import { fireEvent, screen } from "@testing-library/react";
import { renderWithProvidersAndMemoryRouter } from "../../../../../utils/test.utils";
import ActionButtonsComponent from "./action-buttons.component";

describe("ActionButtonsComponent", () => {
  it("should component render", () => {
    const { container } = renderWithProvidersAndMemoryRouter(<ActionButtonsComponent
      cardSetId={1}
      cardSetEntity={[]}
      addFlashCardElement={() => { }}
      INIT_CARD_SET_STATE={[]} />);
    expect(container).toBeInTheDocument();
  });

  it("should render update button if cardSetId prop is present", () => {
    renderWithProvidersAndMemoryRouter(<ActionButtonsComponent
      cardSetId={1}
      cardSetEntity={[]}
      addFlashCardElement={() => { }}
      INIT_CARD_SET_STATE={[]} />);
    expect(screen.getByText(/Обновить набор/)).toBeInTheDocument();
  })

  it("should not render update button if cardSetId props isn't present", () => {
    renderWithProvidersAndMemoryRouter(<ActionButtonsComponent
      cardSetEntity={[]}
      addFlashCardElement={() => { }}
      INIT_CARD_SET_STATE={[]} />);
    expect(screen.queryByText(/Обновить набор/)).not.toBeInTheDocument();
  })

  it("should invoke card-set/delete action when delete btn presses", () => {
    renderWithProvidersAndMemoryRouter(<ActionButtonsComponent
      cardSetId={1}
      cardSetEntity={[]}
      addFlashCardElement={() => { }}
      INIT_CARD_SET_STATE={[]} />);
    const deleteBtn = screen.getByText(/Удалить набор/);
    expect(deleteBtn).toBeInTheDocument();
    fireEvent.click(deleteBtn);
  })
})
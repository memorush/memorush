import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactsComponent from './contacts.component';

import data from "../../../../assets/data/data.json";
const { vk, developerEmail, developerPage, telegram } = data['social-media-links'];

jest.mock('react-awesome-reveal', () => ({
  Fade: (props) => (<>{props.children}</>)
}));

describe("ContactsComponent", () => {

  it("should render", () => {
    render(<ContactsComponent />);
    expect(screen.getByTestId("contacts")).toBeInTheDocument();
  });

  it('should navigate to devPage when link is clicked', async () => {
    render(<ContactsComponent />);
    await userEvent.click(screen.getByText(/Перейти на сайт разработчика/i));
    expect(screen.getByRole('link', { name: 'Перейти на сайт разработчика' })).toHaveAttribute('href', developerPage)
  });
});
import { screen } from "@testing-library/react";
import { renderWithProvidersAndMemoryRouter } from '../../../../utils/test.utils';
import DownloadComponent from './download.component';

jest.mock('react-awesome-reveal', () => ({
  Fade: (props) => (<>{props.children}</>)
}));

describe("DownloadComponent", () => {

  it("should render", () => {
    renderWithProvidersAndMemoryRouter(<DownloadComponent />);
    expect(screen.getByTestId("download")).toBeInTheDocument();
  })

  it("should have the title", () => {
    renderWithProvidersAndMemoryRouter(<DownloadComponent/>);
    expect(screen.getByText(/Установите приложение/i)).toBeInTheDocument();
  })
})
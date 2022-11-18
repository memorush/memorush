import React from 'react';
import ReactDom from 'react-dom';
import SubTitle from './subTitle.component';

describe("SubTitleAtomicComponent", () => {
  test.concurrent('should render', () => {
    const containerEl = document.createElement('div');
    ReactDom.render(<SubTitle name="Subtitle name" />, containerEl);

    expect(containerEl).toHaveTextContent("Subtitle name");
  })
});
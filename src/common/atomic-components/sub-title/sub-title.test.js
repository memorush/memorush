import React from 'react';
import ReactDom from 'react-dom';
import SubTitleAtomicComponent from './sub-title.component';

describe("SubTitleAtomicComponent", () => {
  test.concurrent('should render', () => {
    const containerEl = document.createElement('div');
    ReactDom.render(<SubTitleAtomicComponent name="Subtitle name" />, containerEl);

    expect(containerEl).toHaveTextContent("Subtitle name");
  })
});

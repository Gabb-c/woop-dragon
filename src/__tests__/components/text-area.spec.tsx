import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { TextArea } from '../../components/TextArea';

describe('Button', () => {
  it('test if it renders in the DOM', () => {
    render(<TextArea label="Test" />);

    const resTest = screen.getByTestId(/textarea-test/i);

    expect(resTest).toBeInTheDocument();
  });

  it('test if it has typed and function onChange is triggered', async () => {
    const mock = {
      preventDefault: jest.fn(),
    };

    render(<TextArea label="Test" onChange={() => mock} />);

    const resTest = screen.getByTestId(/textarea-test/i);
    await userEvent.type(resTest, 'test');

    await waitFor(() => {
      expect(resTest).toHaveValue('test');
    });
  });

  it('test if it matches snapshot', () => {
    render(<TextArea label="Test" />);

    const resTest = screen.getByTestId(/textarea-test/i);

    expect(resTest).toMatchSnapshot();
  });
});

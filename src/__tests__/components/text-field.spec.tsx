import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextField } from '../../components/TextField';

describe('Button', () => {
  it('test if it renders in the DOM', () => {
    render(<TextField label="Test" />);

    const resTest = screen.getByTestId(/input-test/i);

    expect(resTest).toBeInTheDocument();
  });

  it('test if it has typed and function onChange is triggered', async () => {
    const mock = {
      preventDefault: jest.fn(),
    };

    render(<TextField label="Test" onChange={() => mock} />);

    const resTest = screen.getByTestId(/input-test/i);
    await userEvent.type(resTest, 'test');

    await waitFor(() => {
      expect(resTest).toHaveValue('test');
    });
  });

  it('test if it matches snapshot', () => {
    render(<TextField label="Test" />);

    const resTest = screen.getByTestId(/input-test/i);

    expect(resTest).toMatchSnapshot();
  });
});

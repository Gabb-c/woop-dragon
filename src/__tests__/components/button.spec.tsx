import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { Button } from '../../components/Button';

describe('Button', () => {
  it('test if it renders in the DOM', () => {
    render(<Button label="Test" />);

    const resTest = screen.getByTestId(/button-test/i);

    expect(resTest).toBeInTheDocument();
  });

  it('test if it has been clicked', async () => {
    const mock = {
      preventDefault: jest.fn(),
    };

    render(<Button label="Test" onClick={() => mock} />);

    const resTest = screen.getByTestId(/button-test/i);
    await userEvent.click(resTest);

    expect(resTest).toBeDefined();
  });

  it('test if it matches snapshot', () => {
    render(<Button label="Test" />);

    const resTest = screen.getByTestId(/button-test/i);

    expect(resTest).toMatchSnapshot();
  });
});

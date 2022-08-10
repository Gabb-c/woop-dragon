import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loading } from '../../components/Loading';
import '@testing-library/jest-dom';

describe('Loading', () => {
  it('test if it renders in the DOM', () => {
    render(<Loading />);

    const resTest = screen.getByTestId(/loading/i);

    expect(resTest).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    render(<Loading />);

    const resTest = screen.getByTestId(/loading/i);

    expect(resTest).toMatchSnapshot();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { DragonList } from '../../pages/Dragons/components/DragonList';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Dragon List', () => {
  it('test if it renders in the DOM', () => {
    const { getByTestId } = render(<DragonList />, { wrapper: BrowserRouter });

    const resTest = getByTestId(/input-test/i);

    expect(resTest).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { getByTestId } = render(<DragonList />, { wrapper: BrowserRouter });

    const resTest = getByTestId(/input-test/i);

    expect(resTest).toMatchSnapshot();
  });
});

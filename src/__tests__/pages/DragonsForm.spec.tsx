import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DragonsForm } from '../../pages/DragonsForm';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Dragons Form', () => {
  it('test if it renders in the DOM', () => {
    render(<DragonsForm />, { wrapper: BrowserRouter });

    const resTest = screen.getByText(/add new dragon/i);

    expect(resTest).toBeInTheDocument();
  });
});

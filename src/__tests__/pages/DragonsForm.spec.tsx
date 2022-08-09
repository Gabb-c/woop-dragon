import React from 'react';
import { render, screen } from '@testing-library/react';

import { DragonsForm } from '../../pages/DragonsForm';
import { BrowserRouter } from 'react-router-dom';

describe('Dragons Form', () => {
  it('test if it renders in the DOM', () => {
    render(<DragonsForm />, { wrapper: BrowserRouter });

    const resTest = screen.getByText(/add new dragon/i);

    expect(resTest).toBeInTheDocument();
  });
});

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { DragonCard } from '../../pages/Dragons/components/DragonCard';
import { Dragon } from '../../models/dragon';
import '@testing-library/jest-dom';

describe('DragonCard', () => {
  it('test if it renders in the DOM', () => {
    const mockDragon: Dragon = {
      createdAt: new Date().toISOString(),
      histories: '',
      name: 'Ysera',
      id: '0',
      type: 'dream',
    };

    render(<DragonCard dragon={mockDragon} onDelete={jest.fn} onEdit={jest.fn} />);

    const resTest = screen.getByText(/ysera/i);

    expect(resTest).toBeInTheDocument();
  });

  it('test if edit button function is triggered', async () => {
    const mockDragon: Dragon = {
      createdAt: new Date().toISOString(),
      histories: '',
      name: 'Ysera',
      id: '0',
      type: 'dream',
    };

    const mockOnDelete = jest.fn();
    const mockOnEdit = jest.fn();

    const { container } = render(
      <DragonCard dragon={mockDragon} onDelete={mockOnDelete} onEdit={mockOnEdit} />
    );

    const button = container.querySelector(`button[name="edit-dragon"]`);
    await userEvent.click(button as Element);

    await waitFor(() => {
      expect(mockOnEdit.mock.calls.length).toEqual(1);
    });
  });

  it('test if delete button function is triggered', async () => {
    const mockDragon: Dragon = {
      createdAt: new Date().toISOString(),
      histories: '',
      name: 'Ysera',
      id: '0',
      type: 'dream',
    };

    const mockOnDelete = jest.fn();
    const mockOnEdit = jest.fn();

    const { container } = render(
      <DragonCard dragon={mockDragon} onDelete={mockOnDelete} onEdit={mockOnEdit} />
    );

    const button = container.querySelector(`button[name="delete-dragon"]`);
    await userEvent.click(button as Element);

    await waitFor(() => {
      expect(mockOnDelete.mock.calls.length).toEqual(1);
    });
  });

  it('should match snapshot', () => {
    const mockDragon: Dragon = {
      createdAt: new Date().toISOString(),
      histories: '',
      name: 'Ysera',
      id: '0',
      type: 'dream',
    };

    render(<DragonCard dragon={mockDragon} onDelete={jest.fn} onEdit={jest.fn} />);

    const resTest = screen.getByText(/ysera/i);

    expect(resTest).toMatchSnapshot();
  });
});

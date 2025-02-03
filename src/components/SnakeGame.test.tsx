import { render, screen } from '@testing-library/react';
import React from 'react';
import SnakeGame from './SnakeGame';

describe('SnakeGame Component', () => {
  it('renders Snake Game title', () => {
    render(<SnakeGame />);
    const titleElement = screen.getByText(/Snake Game/i);

    expect(titleElement).toBeInTheDocument();
  });

  it('initial score is 0', () => {
    render(<SnakeGame />);
    const scoreElement = screen.getByText(/Score: 0/i);

    expect(scoreElement).toBeInTheDocument();
  });

  it('renders the grid', () => {
    render(<SnakeGame />);
    const gridCells = screen.getAllByRole('gridcell');

    expect(gridCells.length).toBe(400); // 20x20 grid
  });
});

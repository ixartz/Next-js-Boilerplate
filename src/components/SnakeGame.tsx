import React, { useCallback, useEffect, useState } from 'react';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

type Position = {
  x: number;
  y: number;
};

const GRID_SIZE = 20;

const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState<Position[]>([{ x: 5, y: 5 }]);
  const [direction] = useState<Direction>('RIGHT');
  const [food, setFood] = useState<Position>({ x: 10, y: 10 });
  const [score, setScore] = useState<number>(0);

  const moveSnake = useCallback(() => {
    setSnake((prevSnake) => {
      const newSnake = [...prevSnake];
      const head = newSnake[0];
      let newHead;

      if (head) {
        switch (direction) {
          case 'UP':
            newHead = { x: head.x, y: head.y - 1 };
            break;
          case 'DOWN':
            newHead = { x: head.x, y: head.y + 1 };
            break;
          case 'LEFT':
            newHead = { x: head.x - 1, y: head.y };
            break;
          case 'RIGHT':
            newHead = { x: head.x + 1, y: head.y };
            break;
        }

        if (newHead) {
          newSnake.unshift(newHead);
          if (newHead.x === food.x && newHead.y === food.y) {
            setScore(score + 1);
            setFood({ x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) });
          } else {
            newSnake.pop();
          }
        }
      }

      return newSnake;
    });
  }, [direction, food, score]);

  useEffect(() => {
    const interval = setInterval(moveSnake, 200);
    return () => clearInterval(interval);
  }, [moveSnake]);

  const renderGrid = () => {
    const grid = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      const row = [];
      for (let x = 0; x < GRID_SIZE; x++) {
        const isSnake = snake.some(segment => segment.x === x && segment.y === y);
        const isFood = food.x === x && food.y === y;
        row.push(
          <div
            key={`${x}-${y}`}
            role="gridcell"
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: isSnake ? 'green' : isFood ? 'red' : 'white',
              border: '1px solid black',
              boxSizing: 'border-box',
            }}
          />,
        );
      }
      grid.push(<div key={y} style={{ display: 'flex' }}>{row}</div>);
    }
    return grid;
  };

  return (
    <div>
      <h1>Snake Game</h1>
      <div>
        Score:
        {score}
      </div>
      <div>{renderGrid()}</div>
    </div>
  );
};

export default SnakeGame;

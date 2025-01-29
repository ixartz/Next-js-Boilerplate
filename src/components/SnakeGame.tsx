import React, { useState, useEffect, useCallback } from 'react';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

interface Position {
  x: number;
  y: number;
}

const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState<Position[]>([{ x: 5, y: 5 }]);
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [food, setFood] = useState<Position>({ x: 10, y: 10 });
  const [score, setScore] = useState<number>(0);

  const moveSnake = useCallback(() => {
    setSnake(prevSnake => {
      const newSnake = [...prevSnake];
      const head = newSnake[0];
      let newHead;

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

      newSnake.unshift(newHead);
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(score + 1);
        setFood({ x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) });
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, score]);

  const changeDirection = (newDirection: Direction) => {
    setDirection(newDirection);
  };

  useEffect(() => {
    const interval = setInterval(moveSnake, 200);
    return () => clearInterval(interval);
  }, [moveSnake]);

  return (
    <div>
      <h1>Snake Game</h1>
      <div>Score: {score}</div>
      <div>
        {/* Render the game grid and snake here */}
      </div>
    </div>
  );
};

export default SnakeGame;
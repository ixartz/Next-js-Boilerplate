'use client';

import type { Dispatch, SetStateAction } from 'react';
import type { InputProps } from './input';

import { useCallback, useEffect, useState } from 'react';
import { Input } from './input';

type BadgeInputProps = Omit<InputProps, 'value' | 'onChange'> & {
  value: string[];
  onChange: (value: string[]) => void;
  setPendingKeyword?: Dispatch<SetStateAction<string>>;
};

export const BadgeInput = ({ ref, value, onChange, setPendingKeyword, ...props }: BadgeInputProps & { ref?: React.RefObject<HTMLInputElement | null> }) => {
  const [label, setLabel] = useState('');

  const processInput = useCallback(() => {
    const newLabels = label
      .split(',')
      .map(str => str.trim())
      .filter(Boolean)
      .filter(str => !value.includes(str));
    onChange([...new Set([...value, ...newLabels])]);
    setLabel('');
  }, [label, value, onChange]);

  useEffect(() => {
    if (label.includes(',')) {
      processInput();
    }
  }, [label, processInput]);

  useEffect(() => {
    if (setPendingKeyword) {
      setPendingKeyword(label);
    }
  }, [label, setPendingKeyword]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();

      processInput();
    }
  };

  return (
    <Input
      {...props}
      ref={ref}
      value={label}
      onKeyDown={onKeyDown}
      onChange={(event) => {
        setLabel(event.target.value);
      }}
    />
  );
};

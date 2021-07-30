import { format, parseISO } from 'date-fns';
import React from 'react';

export default function Date({ dateString, yearOnly, className }) {
  const date = parseISO(dateString);
  const dateFormat = yearOnly ? 'yyyy' : 'd LLL yy';
  return (
    <time dateTime={dateString} className={`${className}`}>
      {format(date, dateFormat)}
    </time>
  );
}

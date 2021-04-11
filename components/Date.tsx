import React from 'react';

import { parseISO, format } from 'date-fns';

export default function Date({ dateString, yearOnly }) {
  const date = parseISO(dateString);
  const dateFormat = yearOnly ? 'yyyy' : 'd LLL yy';
  return <time dateTime={dateString}>{format(date, dateFormat)}</time>;
}

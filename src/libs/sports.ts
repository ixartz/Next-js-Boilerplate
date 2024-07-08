import fs from 'fs';
import path from 'path';

const filePath = path.join(
  process.cwd(),
  'public/data/the-odds-api',
  'all_sport.json'
);

export const getAllSports = () => {
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
};

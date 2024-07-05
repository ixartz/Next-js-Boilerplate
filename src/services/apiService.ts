// apiService.ts

import { Game } from '../types';

// apiService.ts
export const fetchGameData = async (
  sportType: 'americanfootball_nfl' | 'soccer',
): Promise<Game[]> => {
  try {
    let url = '';
    if (sportType === 'americanfootball_nfl') {
      url = '/data/the-odds-api/americanfootball_nfl.json';
    } else if (sportType === 'soccer') {
      url = '/data/the-odds-api/soccer.json';
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${sportType} data`);
    }

    const data = await response.json();
    return data as Game[];
  } catch (error) {
    console.error(`Error fetching ${sportType} data:`, error);
    return [];
  }
};

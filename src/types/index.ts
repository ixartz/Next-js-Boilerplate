// types.ts

export interface Game {
  commence_time: string
  home_team: string
  away_team: string
  bookmakers: {
    title: string
    markets: {
      key: string
      outcomes: {
        price: string
      }[]
    }[]
  }[]
}

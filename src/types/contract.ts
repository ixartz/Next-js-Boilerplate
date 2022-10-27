export interface TokenPrice extends Token {
  usd: number;
  krw: number;
}

export interface Token {
  networkRpcUrl: string;
  contractAddress: string;
  symbol: string;
}

export type GetTokenPrice = (token: Token) => TokenPrice;

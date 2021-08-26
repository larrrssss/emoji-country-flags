import countries from './countries.json';

export interface ICountry {
  name: string,
  codes: {
    alpha_2: string,
    alpha_3: string,
  },
  emoji: string,
} 

export function codeToEmoji(code: string): string | null {
  return countries.find((c) => c.codes.alpha_2 === code.toUpperCase() || c.codes.alpha_3 === code.toUpperCase())?.emoji || null;
}

export function flagToCountry(flag: string): ICountry | null {
  return countries.find((c) => c.emoji === flag) || null;
}
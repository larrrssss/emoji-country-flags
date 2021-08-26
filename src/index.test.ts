import { codeToEmoji, flagToCountry } from './index';

test('get emoji flag from country code', () => {
  const flag = codeToEmoji('GBR');

  expect(flag).toBe('🇬🇧');
});

test('get country from emoji flag', () => {
  const country = flagToCountry('🇬🇧');

  expect(JSON.stringify(country)).toBe(JSON.stringify({
    name: 'United Kingdom of Great Britain and Northern Ireland (the)',
    codes: {
      alpha_2: 'GB',
      alpha_3: 'GBR'
    },
    emoji: '🇬🇧'
  }));
});
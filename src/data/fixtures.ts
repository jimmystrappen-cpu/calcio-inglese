// Real opening-weekend fixtures for the 2026/27 Premier League season.
export interface Fixture {
  when: string;
  home: string; // key into TEAMS
  away: string; // key into TEAMS
}

export const FIXTURES: Fixture[] = [
  { when: 'Fri 21 Aug, 20:00', home: 'arsenal', away: 'coventry' },
  { when: 'Sat 22 Aug, 12:30', home: 'hull', away: 'manutd' },
  { when: 'Sat 22 Aug, 15:00', home: 'brentford', away: 'tottenham' },
  { when: 'Sun 23 Aug, 14:00', home: 'mancity', away: 'bournemouth' },
  { when: 'Sun 23 Aug, 16:30', home: 'newcastle', away: 'liverpool' },
  { when: 'Mon 24 Aug, 20:00', home: 'fulham', away: 'chelsea' },
];

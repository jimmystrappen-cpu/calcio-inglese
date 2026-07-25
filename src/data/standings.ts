// 2026/27 fixtures haven't been played yet (season kicks off 21 Aug 2026),
// so the table shows the final confirmed 2025/26 standings until real
// results start coming in from the news pipeline.
export const STANDINGS_LABEL = '2025/26 Final Table';

export interface StandingsRow {
  pos: number;
  team: string; // key into TEAMS
  played: number;
  points: number;
  qualifies?: 'ucl' | 'uel' | 'uecl' | 'rel';
}

export const STANDINGS: StandingsRow[] = [
  { pos: 1, team: 'arsenal', played: 38, points: 85, qualifies: 'ucl' },
  { pos: 2, team: 'mancity', played: 38, points: 78, qualifies: 'ucl' },
  { pos: 3, team: 'manutd', played: 38, points: 71, qualifies: 'ucl' },
  { pos: 4, team: 'astonvilla', played: 38, points: 65, qualifies: 'ucl' },
  { pos: 5, team: 'liverpool', played: 38, points: 60, qualifies: 'ucl' },
  { pos: 6, team: 'sunderland', played: 38, points: 58, qualifies: 'uel' },
  { pos: 7, team: 'bournemouth', played: 38, points: 57, qualifies: 'uecl' },
  { pos: 8, team: 'chelsea', played: 38, points: 55 },
  { pos: 9, team: 'brighton', played: 38, points: 54 },
  { pos: 10, team: 'newcastle', played: 38, points: 52 },
  { pos: 11, team: 'fulham', played: 38, points: 50 },
  { pos: 12, team: 'crystalpalace', played: 38, points: 49 },
  { pos: 13, team: 'brentford', played: 38, points: 47 },
  { pos: 14, team: 'nottmforest', played: 38, points: 46 },
  { pos: 15, team: 'everton', played: 38, points: 44 },
  { pos: 16, team: 'leeds', played: 38, points: 42 },
  { pos: 17, team: 'tottenham', played: 38, points: 39 },
  { pos: 18, team: 'westham', played: 38, points: 37, qualifies: 'rel' },
  { pos: 19, team: 'wolves', played: 38, points: 35, qualifies: 'rel' },
  { pos: 20, team: 'burnley', played: 38, points: 33, qualifies: 'rel' },
];

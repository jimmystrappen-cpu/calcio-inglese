// 2026/27 fixtures haven't been played yet (season kicks off 21 Aug 2026),
// so the table shows the final confirmed 2025/26 standings until real
// results start coming in from the news pipeline.
export const STANDINGS_LABEL = '2025/26 Final Table';

export interface StandingsRow {
  pos: number;
  team: string; // key into TEAMS
  played: number;
  points: number;
  qualifies?: 'ucl' | 'uel' | 'uecl';
}

export const STANDINGS: StandingsRow[] = [
  { pos: 1, team: 'arsenal', played: 38, points: 85, qualifies: 'ucl' },
  { pos: 2, team: 'mancity', played: 38, points: 78, qualifies: 'ucl' },
  { pos: 3, team: 'manutd', played: 38, points: 71, qualifies: 'ucl' },
  { pos: 4, team: 'astonvilla', played: 38, points: 65, qualifies: 'ucl' },
  { pos: 5, team: 'liverpool', played: 38, points: 60, qualifies: 'ucl' },
  { pos: 6, team: 'bournemouth', played: 38, points: 57, qualifies: 'uel' },
];

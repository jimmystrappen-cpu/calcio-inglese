// Club colours are facts, not creative works — safe to use freely.
// Crest artwork is not included here; see /docs/image-policy.md for the
// real-crest-overlay plan (task #3 follow-up before crests are added).
export interface Team {
  name: string;
  short: string;
  primary: string;
  secondary: string;
}

export const TEAMS: Record<string, Team> = {
  arsenal: { name: 'Arsenal', short: 'ARS', primary: '#EF0107', secondary: '#FFFFFF' },
  astonvilla: { name: 'Aston Villa', short: 'AVL', primary: '#670E36', secondary: '#95BFE5' },
  bournemouth: { name: 'Bournemouth', short: 'BOU', primary: '#DA291C', secondary: '#000000' },
  brentford: { name: 'Brentford', short: 'BRE', primary: '#E30613', secondary: '#FFDB00' },
  brighton: { name: 'Brighton', short: 'BHA', primary: '#0057B8', secondary: '#FFCD00' },
  chelsea: { name: 'Chelsea', short: 'CHE', primary: '#034694', secondary: '#FFFFFF' },
  crystalpalace: { name: 'Crystal Palace', short: 'CRY', primary: '#1B458F', secondary: '#C4122E' },
  everton: { name: 'Everton', short: 'EVE', primary: '#003399', secondary: '#FFFFFF' },
  fulham: { name: 'Fulham', short: 'FUL', primary: '#000000', secondary: '#FFFFFF' },
  leeds: { name: 'Leeds United', short: 'LEE', primary: '#FFCD00', secondary: '#1D428A' },
  liverpool: { name: 'Liverpool', short: 'LIV', primary: '#C8102E', secondary: '#F6EB61' },
  mancity: { name: 'Manchester City', short: 'MCI', primary: '#6CABDD', secondary: '#1C2C5B' },
  manutd: { name: 'Manchester United', short: 'MUN', primary: '#DA291C', secondary: '#FBE122' },
  newcastle: { name: 'Newcastle United', short: 'NEW', primary: '#241F20', secondary: '#FFFFFF' },
  nottmforest: { name: 'Nottingham Forest', short: 'NFO', primary: '#DD0000', secondary: '#FFFFFF' },
  sunderland: { name: 'Sunderland', short: 'SUN', primary: '#EB172B', secondary: '#FFFFFF' },
  tottenham: { name: 'Tottenham Hotspur', short: 'TOT', primary: '#132257', secondary: '#FFFFFF' },
  coventry: { name: 'Coventry City', short: 'COV', primary: '#78C4EE', secondary: '#001C58' },
  ipswich: { name: 'Ipswich Town', short: 'IPS', primary: '#0044A9', secondary: '#FFFFFF' },
  hull: { name: 'Hull City', short: 'HUL', primary: '#F18A01', secondary: '#000000' },

  // Non-Premier League clubs, included only so transfer-news thumbnails
  // can show both sides of a deal.
  barcelona: { name: 'Barcelona', short: 'BAR', primary: '#A50044', secondary: '#004D98' },
  realmadrid: { name: 'Real Madrid', short: 'RMA', primary: '#FFFFFF', secondary: '#00529F' },
};

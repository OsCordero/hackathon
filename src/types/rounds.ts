export interface Home {
  name: string;
  alias: string;
  id: string;
  sr_id: string;
  reference: string;
}

export interface Away {
  name: string;
  alias: string;
  id: string;
  sr_id: string;
  reference: string;
}

export interface TimeZones {
  venue: string;
  home: string;
  away: string;
}

export interface Game {
  id: string;
  status: string;
  scheduled: Date;
  home: Home;
  away: Away;
  timeZones: TimeZones;
}

export interface Rounds {
  _id: string;
  id: string;
  games: Game[];
  startDate: string;
  endDate: string;
  __v: number;
}

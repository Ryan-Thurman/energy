/**
 * Types that may be useful
 */
export type Forecast = {
  endTime: string;
  shortForecast: string;
  delta?: number;
  temperature: number;
  temperatureUnit: string;
  windSpeed: string;
  windDirection: Direction;
  startTime: string;
  icon: string;
};

export enum Direction {
  NORTH = "N",
  NORTH_EAST = "NE",
  EAST = "E",
  SOUTH_EAST = "SE",
  SOUTH = "S",
  SOUTH_WEST = "SW",
  WEST = "W",
  NORTH_WEST = "NW",
}

export type WindTrend = {
  name: string;
  windSpeed: string;
  windDirection: Direction;
};

export type TempTrend = {
  name: string;
  temp: number;
  delta: number;
};

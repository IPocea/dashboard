export interface ITotalHours {
  design: number;
  programming: number;
  networks: number;
  others: number;
}

export interface IHoursPerDay {
  date: string;
  totalHours: ITotalHours;
}
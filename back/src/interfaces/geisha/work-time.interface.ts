export interface Worktime {
  isFullTime: boolean;
  times?: [{
    time: TimeRanges;
    days: {
      from: Days;
      to: Days;
    }
  }]
}

export enum Days {
  Monday = 'Monday', 
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday', 
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}
export enum ScheduleType {
  Periodic = 'periodic',
  Fixed = 'fixed',
}

export type Schedule = PeriodicSchedule | FixedSchedule;

interface BaseSchedule {
  type: ScheduleType;
  task: () => void | Promise<void>;
}

export interface PeriodicSchedule extends BaseSchedule {
  type: ScheduleType.Periodic;
  cronTab: string;
}

export interface FixedSchedule extends BaseSchedule {
  type: ScheduleType.Fixed;
  runAt: Date;
}

import { CronJob } from 'cron';

import {
  PeriodicSchedule,
  Schedule,
  FixedSchedule,
  ScheduleType,
} from './types';

export const reserveJobs = async (schedules: Schedule[]) => {
  schedules.forEach((schedule) => {
    if (schedule.type === ScheduleType.Periodic) {
      new CronJob(
        (schedule as PeriodicSchedule).cronTab,
        schedule.task,
      ).start();
    } else if (schedule.type === ScheduleType.Fixed) {
      new CronJob((schedule as FixedSchedule).runAt, schedule.task).start();
    }

    throw new Error(`Unsupported schedule type: ${schedule.type}`);
  });
};

export type { PeriodicSchedule, FixedSchedule };

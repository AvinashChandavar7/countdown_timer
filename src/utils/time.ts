import { TimeLeft, ValidationResult } from "../types/shared";

export const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0, };
  }


  return {
    total: difference,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};


export const validateTargetDate = (dateTime: string): ValidationResult => {
  // https://regexr.com/3iok2
  //                    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}$/   // 2018-01-04T05:52:20.698 
  const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;              // 2018-01-04T05:52

  if (!dateTimeRegex.test(dateTime)) {
    return { isValid: false, error: `Invalid date and time format(YYYY-MM-DDTHH:MM).` };
  }

  const targetDate = new Date(dateTime);
  const now = new Date();

  if (isNaN(targetDate.getTime())) {
    return { isValid: false, error: 'Invalid date and time format.' };
  }

  if (targetDate <= now) {
    return { isValid: false, error: 'The target date and time must be in the Future.' };
  }


  // const maxDate = new Date(now.getTime() + 99 * 24 * 60 * 60 * 1000);
  const maxDate = new Date(now);
  maxDate.setDate(maxDate.getDate() + 99);

  if (targetDate > maxDate) {
    return { isValid: false, error: 'The target date must be within 99 days from now.' };
  }

  return { isValid: true, targetDate };
};

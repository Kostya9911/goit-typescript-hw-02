/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

const enum Week {
  Mo,
  Tu,
  We,
  Th,
  Fr,
  Sa,
  Su,
}

function isWeekend(day: Week): boolean {
  // return day === (Week.Sa || Week.Su);
  return day === Week.Sa || day === Week.Su;
}

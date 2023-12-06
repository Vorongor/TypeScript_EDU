/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Weekend {
  Sunday = "sunday",
  Saturday = "saturday",
}

function isWeekend(day: string): boolean {
  return day === Weekend.Saturday || day === Weekend.Sunday;
}

export {};

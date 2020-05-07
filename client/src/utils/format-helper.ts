export function formatDateNameAndHour(name: string) {
  const date = new Date();
  let currentDate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  let currentHour = date.getHours() + ":" + date.getMinutes();

  return `${currentDate} - ${name} - ${currentHour}`;
}

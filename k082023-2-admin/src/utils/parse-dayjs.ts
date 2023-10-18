import dayjs from "dayjs";

export const parseDayjsToDate = (time: dayjs.Dayjs | null, format: string) => {
  const date4 = dayjs(time);

  const formattedDate = date4.format(format);
  return formattedDate;
};

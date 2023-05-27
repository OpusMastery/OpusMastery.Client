import dayjs from 'dayjs';

export function formatDate(date: Date, dateFormat: string): string {
    return dayjs(date).format(dateFormat);
}

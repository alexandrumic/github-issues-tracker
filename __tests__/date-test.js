import { formatDate } from '../src/services/date';

describe('Date service test suite', () => {
  it('should handle date format', () => {
    const date = '2021-02-18T19:16:51.740Z';
    expect(formatDate(date)).toBe('2021-02-18');
  });

  it('should handle date format datetime 12h', () => {
    const date = '2021-02-18T19:16:51.740Z';
    expect(formatDate(date, 'datetime')).toBe('2021-02-18 09:16 PM');
  });

  it('should handle date format datetime 24h', () => {
    const date = '2021-02-18T19:16:51.740Z';
    expect(formatDate(date, 'datetime24')).toBe('2021-02-18 21:16');
  });

  it('should handle date format time', () => {
    const date = '2021-02-18T19:16:51.740Z';
    expect(formatDate(date, 'time')).toBe('09:16 PM');
  });

  it('should handle invalid date format', () => {
    expect(formatDate(null)).toBe('Invalid DateTime');
  });
});

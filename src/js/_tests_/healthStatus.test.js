import healthStatus from '../app';

describe('Health status:', () => {
  test('return "critical" if health level less 15', () => {
    const received = healthStatus({ name: 'Маг', health: 13 });
    expect(received).toBe('critical');
  });
  test('return "wounded" if health level is from 15 to 50', () => {
    const received = healthStatus({ name: 'Мечник', health: 42 });
    expect(received).toBe('wounded');
  });
  test('return "healthy" if health level more than 50', () => {
    const received = healthStatus({ name: 'Лучник', health: 70 });
    expect(received).toBe('healthy');
  });
  test('return "wounded" if health level is 15', () => {
    const received = healthStatus({ name: 'Рыцарь', health: 15 });
    expect(received).toBe('wounded');
  });
  test('return "wounded" if health level is 50', () => {
    const received = healthStatus({ name: 'Орк', health: 50 });
    expect(received).toBe('wounded');
  });
});

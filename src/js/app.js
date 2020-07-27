export default function healthStatus(hero) {
  const healthLevel = hero.health;
  let result;
  if (healthLevel < 15) {
    result = 'critical';
  }
  if (healthLevel >= 15 && healthLevel <= 50) {
    result = 'wounded';
  }
  if (healthLevel > 50) {
    result = 'healthy';
  }
  return result;
}

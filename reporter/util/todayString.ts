export default (): string => {
  const today: Date = new Date();
  return `${today.getFullYear()}_${('0'+today.getMonth()).substr(-2, 2)}_${('0'+today.getDate()).substr(-2, 2)}`;
}

export default (): string => {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: string = ('0'+(today.getMonth()+1)).slice(-2);
  const day: string = ('0'+today.getDate()).slice(-2);
  return `${year}_${month}_${day}`;
}

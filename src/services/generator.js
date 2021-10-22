export const generateId = (list) => {
  const idList = list.map(element => element.id);
  return Math.max(...idList) + 1;
}
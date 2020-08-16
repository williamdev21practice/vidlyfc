export function paginate(items, pageNumber, pageSize) {
  const skipIndex = (pageNumber - 1) * pageSize;

  return items.slice(skipIndex, skipIndex + pageSize);
}

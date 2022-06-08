export function isGrow(element: HTMLElement) {
  return element.style.flexGrow === '1';
}

export function getMaxAvailableWidth(elements: HTMLElement[], current: number) {
  const all = elements.reduce((acc, curr) => acc + curr.clientWidth, 0);

  const others = elements.reduce((acc, curr, index) => {
    if (index === current) return acc;

    const minWidth = parseInt(curr.style.minWidth || '0');
    const width = parseInt(curr.style.width || '0');

    return acc + (width || minWidth);
  }, 0);

  return all - others;
}

export function getMaxAvailableHeight(
  elements: HTMLElement[],
  current: number
) {
  const all = elements.reduce((acc, curr) => acc + curr.clientHeight, 0);

  const others = elements.reduce((acc, curr, index) => {
    if (index === current) return acc;

    const minHeight = parseInt(curr.style.minHeight || '0');
    const height = parseInt(curr.style.height || '0');

    return acc + (height || minHeight);
  }, 0);

  return all - others;
}

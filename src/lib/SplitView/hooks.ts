import { useRef, useState, MouseEvent, useCallback } from 'react';

import { isGrow, getMaxAvailableWidth } from './utils';

export function useSplitViewState() {
  const panelsRef = useRef<HTMLElement[]>([]);

  const [dragging, setDragging] = useState(false);
  const [dragIndex, setDragIndex] = useState(-1);
  const [dragStart, setDragStart] = useState(0);

  const onMouseDown = useCallback(
    (event: MouseEvent<HTMLDivElement>, index: number) => {
      event.preventDefault();

      setDragging(true);
      setDragIndex(index);
      setDragStart(event.clientX);
    },
    []
  );

  const onMouseUp = useCallback((event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    setDragging(false);
    setDragIndex(-1);
    setDragStart(0);
  }, []);

  const onMouseMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (!dragging) return;

      const elemIndex = isGrow(panelsRef.current[dragIndex - 1])
        ? dragIndex
        : dragIndex - 1;

      const isGrowing = isGrow(panelsRef.current[dragIndex - 1]);

      const element = panelsRef.current[elemIndex];

      const maxWidth = getMaxAvailableWidth(panelsRef.current, elemIndex);

      const delta = isGrowing
        ? dragStart - event.clientX
        : event.clientX - dragStart;

      const width = element.clientWidth + delta;

      if (width >= maxWidth) {
        element.style.width = `${maxWidth}px`;
        return;
      }

      if (element.style.minWidth && width < parseInt(element.style.minWidth)) {
        element.style.width = element.style.minWidth;
        return;
      }

      element.style.width = `${width}px`;

      setDragStart(event.clientX);
    },
    [dragIndex, dragStart, dragging]
  );

  return { panelsRef, onMouseDown, onMouseUp, onMouseMove };
}

import { useRef, useState, PointerEvent, useCallback } from 'react';

import { isGrow, getMaxAvailableWidth, getMaxAvailableHeight } from './utils';

export function useSplitViewState(orientation: 'horizontal' | 'vertical') {
  const panelsRef = useRef<HTMLElement[]>([]);

  const [dragging, setDragging] = useState(false);
  const [dragIndex, setDragIndex] = useState(-1);
  const [dragStart, setDragStart] = useState(0);

  const onPointerDown = useCallback(
    (event: PointerEvent<HTMLDivElement>, index: number) => {
      event.preventDefault();

      setDragging(true);
      setDragIndex(index);

      if (orientation === 'vertical') {
        setDragStart(event.clientX);
      } else {
        setDragStart(event.clientY);
      }
    },
    [orientation]
  );

  const onPointerUp = useCallback((event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault();

    setDragging(false);
    setDragIndex(-1);
    setDragStart(0);
  }, []);

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (!dragging) return;

      const elemIndex = isGrow(panelsRef.current[dragIndex])
        ? dragIndex + 1
        : dragIndex;

      const isGrowing = isGrow(panelsRef.current[dragIndex]);

      const element = panelsRef.current[elemIndex];

      if (orientation === 'vertical') {
        const maxWidth = getMaxAvailableWidth(panelsRef.current, elemIndex);

        const delta = isGrowing
          ? dragStart - event.clientX
          : event.clientX - dragStart;

        const width = element.clientWidth + delta;

        if (width >= maxWidth) {
          element.style.width = `${maxWidth}px`;
          return;
        }

        if (
          element.style.minWidth &&
          width < parseInt(element.style.minWidth)
        ) {
          element.style.width = element.style.minWidth;
          return;
        }

        element.style.width = `${width}px`;

        setDragStart(event.clientX);
      } else {
        const maxHeight = getMaxAvailableHeight(panelsRef.current, elemIndex);

        const delta = isGrowing
          ? dragStart - event.clientY
          : event.clientY - dragStart;

        const height = element.clientHeight + delta;

        if (height >= maxHeight) {
          element.style.height = `${maxHeight}px`;
          return;
        }

        if (
          element.style.minHeight &&
          height < parseInt(element.style.minHeight)
        ) {
          element.style.height = element.style.minHeight;
          return;
        }

        element.style.height = `${height}px`;

        setDragStart(event.clientY);
      }
    },
    [dragIndex, dragStart, dragging, orientation]
  );

  return { panelsRef, onPointerDown, onPointerUp, onPointerMove };
}

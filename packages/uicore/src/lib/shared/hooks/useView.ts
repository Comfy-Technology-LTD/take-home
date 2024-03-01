import { useCallback, useEffect, useRef, useState } from "react";

export const useView = <T extends Element | undefined>(
  detectElement: T,
  options: IntersectionObserverInit,
  func?: () => void
) => {
  const [inView, setinView] = useState(false);

  const getEntry = useRef<IntersectionObserverEntry>();
  const CallbackFunc = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      getEntry.current = entry;
      if (entry.isIntersecting) {
        setinView(true);
        func && func();
      } else if (!entry.isIntersecting) setinView(false);
    },
    [func]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(CallbackFunc, options);
    if (detectElement) observer.observe(detectElement);

    return () => {
      if (detectElement) observer.unobserve(detectElement);
    };
  }, [detectElement, options, CallbackFunc]);
  return { inView, entry: getEntry.current };
};

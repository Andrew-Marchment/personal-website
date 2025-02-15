"use client";

import { useEffect } from "react";

const useResizeObserver = (): void => {
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      document.body.classList.add("resizing");
      requestAnimationFrame(() => {
        document.body.classList.remove("resizing");
      });
    });

    resizeObserver.observe(document.body);

    // Cleanup function to disconnect the observer when component unmounts
    return () => {
      resizeObserver.disconnect();
    };
  }, []); // Empty dependency array since we only want this to run once on mount
};

export default useResizeObserver;

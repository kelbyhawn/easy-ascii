const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ onCLS, onFCP, onLCP }) => {
      onCLS(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
    });
  }
};

export default reportWebVitals;

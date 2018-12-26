export default function(callback, ms = 300) {
  let timer = null;
  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        callback();
        clearTimeout(timer);
        timer = null;
      }, ms);
    }
  };
}

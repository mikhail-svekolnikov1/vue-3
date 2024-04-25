export function createPromiseExecutor(executorFunction) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        executorFunction(resolve, reject, ...args);
      }, 1000);
    });
  };
}

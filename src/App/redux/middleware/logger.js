const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  console.log("before", store.getState());

  const result = next(action);

  console.log("after", store.getState());

  return result;
};

export default logger;


function warn(error) {
  // To let the caller handle the rejection
  throw error;
}

module.exports = () => next => action => (
  typeof action.then === 'function'
    ? Promise.resolve(action).then(next, warn)
    : next(action)
  );

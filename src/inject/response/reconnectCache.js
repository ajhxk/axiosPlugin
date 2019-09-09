let requestCache = [];

const clear = () => (requestCache = []);

const push = (config) => (requestCache.push(config));

const every = (fn) => {
  requestCache.forEach(conf => fn(conf));
};

export default { push, clear, every };

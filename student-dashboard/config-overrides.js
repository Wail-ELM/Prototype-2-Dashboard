module.exports = function override(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      stream: require.resolve('stream-browserify'),
      os: require.resolve('os-browserify/browser')
    };
    return config;
  };
  
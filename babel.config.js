module.exports = api => {
  api.cache(true);
  
  return {
    babelrcRoots: [
      '.',
      'packages/*',
    ],
    presets: [
      ['@babel/preset-env', { modules: false }], 
      '@babel/preset-react',
      '@babel/preset-typescript'
    ],
  };
};

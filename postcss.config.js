import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    autoprefixer({
      overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'not dead'],
    }),
  ],
};

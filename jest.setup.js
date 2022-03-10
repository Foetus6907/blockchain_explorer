const config = {
  verbose: true,
  moduleFileExtensions: ['js', 'ts', 'tsx',
    'json',
    'vue'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "^[^.]+.vue$": "vue-jest",
    "^.+\\.(js|ts)$": "ts-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
  ],
};

module.exports = config;

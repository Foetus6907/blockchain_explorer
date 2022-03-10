


const { QPage } = require("quasar");
const config = {
  verbose: true,
  moduleFileExtensions: ['js', 'ts', 'tsx',
    'json',
    'vue'],
  globals: {
    components : {
      'q-page': QPage
    }
  },
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

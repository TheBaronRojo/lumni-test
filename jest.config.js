const nextJest = require("next/jest")

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias" to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^uuid$": require.resolve("uuid"), // this avoid error
    "^msgpackr$": require.resolve("msgpackr"), // this avoid error
    "^@container": "<rootDir>/lib/container",
    "^@domain/(.*)$": "<rootDir>/lib/domain/$1",
    "^@application/(.*)$": "<rootDir>/lib/application/$1",
    "^@infrastructure/(.*)$": "<rootDir>/lib/infrastructure/$1",
    "^@view/(.*)$": "<rootDir>/lib/view/$1",
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)

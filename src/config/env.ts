const lookupEnvKeyOrThrow = (key: string): string => {
  const value = process.env[key];
  if (value?.trim().length) {
    return value;
  }
  throw new Error(
    `Environment variable ${key} is required, but couldn't find in the .env file.`,
  );
};

export const ENV = {
  SERVER_URL: lookupEnvKeyOrThrow('REACT_APP_SERVER_URL'),
  // OTHER_ENV: lookupEnvKeyOrThrow('REACT_APP_OTHER_ENV'),
};

import { registerAs } from '@nestjs/config';

const databaseConfig = {
  host: process.env.MONGODB_URL,
  port: process.env.MONGODB_PORT || 27017,
  dbName: process.env.MONGODB_DB_NAME,
};

export const appConfig = registerAs('app', () => ({
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.APP_PORT, 10) || 3000,
  appName: process.env.APP_NAME,
  workingDirectory: process.env.PWD || '/',
  database: databaseConfig,
}));

export const database = databaseConfig;

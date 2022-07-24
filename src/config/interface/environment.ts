export interface IEnvironmentConfig {
  host: string;
  port: number;
  environment: 'development' | 'production' | 'test';
  isDevelopment: boolean;
  isProduction: boolean;
  isTest: boolean;
}

import { registerAs } from '@nestjs/config'
import { getEnv, getEnvNumber } from './utils';

export default registerAs('environment', () => {
    const host = getEnv('HOST', 'localhost');
    const port = getEnvNumber('PORT', 3000);
    const environment = getEnv('NODE_ENV', 'development');

    return {
        host,
        port,
        environment
    }
})
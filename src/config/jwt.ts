import { registerAs } from '@nestjs/config'
import { getEnv, getEnvNumber } from './utils';

export default registerAs('jwt', () => {
    const secret = getEnv('JWT_SECRET');
    const expire = getEnv('JWT_EXPIRE', '30d');

    return {
        secret,
        expire,
    }
})
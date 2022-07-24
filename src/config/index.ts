import EnvironmentConfig from './environment'
import JwtConfig from './jwt'
import MailerConfig from './mailer'
import RedisConfig from './redis'

export const configurations = [
    EnvironmentConfig,
    JwtConfig,
    MailerConfig,
    RedisConfig
]
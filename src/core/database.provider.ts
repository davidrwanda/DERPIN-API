import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const DatabaseProviders = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: configService.get('DB_TYPE') as any,
    host: configService.get<string>('DB_HOST')!,
    port: parseInt(configService.get<string>('DB_PORT')!),
    username: configService.get<string>('DB_USERNAME')!,
    password: configService.get<string>('DB_PASSWORD')!,
    database: configService.get<string>('DB_DATABASE')!,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
  inject: [ConfigService],
});

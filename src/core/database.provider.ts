import { TypeOrmModule } from '@nestjs/typeorm';

export const DatabaseProviders = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Test@12345',
  database: 'akademiya',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
});

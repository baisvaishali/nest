import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MasterModule } from './master/master.module';
import { RightModule } from './right/right.module';

@Module({
  imports: [
    // Load .env and database config
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),

    //Connect to database dynamically
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.database'),
        autoLoadEntities: true,
        synchronize: false, // Set false in production
      }),
    }),

    //Your feature modules
    MasterModule,
    RightModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

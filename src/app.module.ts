import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "oracle",
    "username": "TEAM08",
    "password": "team08",
    "connectString": "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SID=XE)))",
    "synchronize": false,
    "logging": true,
    "entities": [__dirname + '/**/**.entity{.ts,.js}']
  }), UserModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

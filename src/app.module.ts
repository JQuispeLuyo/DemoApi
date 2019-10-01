import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "oracle",
    "username": "dbCROWAPP",
    "password": "CROWAPP-2019",
    "connectString": "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=35.184.25.222)(PORT=1521))(CONNECT_DATA=(SID=XE)))",
    "synchronize": false,
    "logging": true,
    "entities": [__dirname + '/**/**.entity{.ts,.js}']
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

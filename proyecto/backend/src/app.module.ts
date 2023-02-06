import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentasModule } from './ventas/ventas.module';
import { ComprasModule } from './compras/compras.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'proyecto2',
    entities: [__dirname + '/**/*.entity{.ts,.js}'], 
    synchronize: true 
}),
    VentasModule,
    ComprasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

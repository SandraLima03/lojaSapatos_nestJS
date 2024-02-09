import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { ProdutosController } from './produtos/produtos.controller';
//import { ProdutoService } from './produtos/shared/produto.service/produto.service';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [ 
    MongooseModule.forRoot('mongodb+srv://karlessandralima:gSGaJRGu91oPun7q@cluster1.nqnoi8n.mongodb.net/?retryWrites=true&w=majority'),
    ProdutosModule ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}

import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ProdutosController } from './produtos.controller';
import { ProdutoService } from './shared/produto.service/produto.service';
import { ProdutoSchema } from './schemas/produto.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Produto', schema: ProdutoSchema }])
    ],

    controllers: [ ProdutosController ],
    providers: [ ProdutoService ],

})
export class ProdutosModule {}

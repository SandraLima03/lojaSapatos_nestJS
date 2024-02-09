import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProdutoService } from './shared/produto.service/produto.service';
import { Produto } from './shared/produto.service/produto';


@Controller('produtos')
export class ProdutosController {
    
    constructor(
    private produtoService: ProdutoService 
    ) { }

    @Get()
    async getAll() :Promise<Produto[]> {
        return await this.produtoService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Produto> {
        return await this.produtoService.getById(id);
    }

    @Post() 
    async create(@Body() produto: Produto) : Promise<Produto> {
        return await this.produtoService.create(produto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() produto: Produto) : Promise<Produto> {
        return this.produtoService.update(id, produto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
         this.produtoService.delete(id);
    }
    
}


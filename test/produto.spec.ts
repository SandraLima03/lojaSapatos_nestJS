import { Produto } from '../src/produtos/shared/produto.service/produto';

describe('Produto', () => {
  it('should be defined', () => {
    expect(new Produto()).toBeDefined();
  });
});

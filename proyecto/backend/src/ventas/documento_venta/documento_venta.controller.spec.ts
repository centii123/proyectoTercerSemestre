import { Test, TestingModule } from '@nestjs/testing';
import { DocumentoVentaController } from './documento_venta.controller';

describe('DocumentoVentaController', () => {
  let controller: DocumentoVentaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentoVentaController],
    }).compile();

    controller = module.get<DocumentoVentaController>(DocumentoVentaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

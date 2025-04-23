import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Response } from 'express';

describe('AppController', () => {
  let appController: AppController;

  const mockResponse = () => {
    const res: Partial<Response> = {};
    res.send = jest.fn().mockReturnThis();
    return res as Response;
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return an HTML response with "Hola Mundo"', () => {
      const res = mockResponse();
      appController.getHello(res);

      expect(res.send).toHaveBeenCalledWith(expect.stringContaining('Hola Mundo'));
      expect(res.send).toHaveBeenCalledWith(expect.stringContaining('<h1'));
    });
  });
});
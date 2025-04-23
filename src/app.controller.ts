import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response): void {
    const message = this.appService.getHello();
    res.send(`
      <html>
        <head>
          <title>Hola Mundo</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f0f0f0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
            }
            h1 {
              color: #3498db;
              font-size: 4rem;
              text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
            }
          </style>
        </head>
        <body>
          <h1>${message}</h1>
        </body>
      </html>
    `);
  }
}
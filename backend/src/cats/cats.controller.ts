import { Controller, Get, Body, Query, Param } from '@nestjs/common';
import type { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Query('color') color: string): string {
    return `This action returns all !${color.toUpperCase()}! all cats`;
  }

  @Get(`:id`)
  find(@Query('color') color: string, @Param('id') id: any): string {
    return `This action returns all !${color.toUpperCase()}! cat by ID ${id}`;
  }
}

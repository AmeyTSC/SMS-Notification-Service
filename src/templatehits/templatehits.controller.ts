import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { TemplatehitsService } from './templatehits.service';

@Controller('template_hits')
export class TemplatehitsController {
  constructor(private readonly templateHitsService: TemplatehitsService) {}

  @Post()
  async templateHits(@Body() body: any) {
    const { phoneNumbers, attribute_name, type } = body;

    if (!Array.isArray(phoneNumbers) || phoneNumbers.length === 0) {
      throw new HttpException(
        { message: "Please provide a list of phone numbers." },
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      const result = await this.templateHitsService.getTemplateHits(phoneNumbers, attribute_name, type);
      return {
        statusCode: 200,
        body: JSON.stringify(result),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      };
    } catch (error) {
      console.error("Error occurred: ", error.message);
      throw new HttpException(
        { message: "An error occurred while retrieving data.", error: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}


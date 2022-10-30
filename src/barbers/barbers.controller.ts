import { Controller, Get } from '@nestjs/common';

@Controller('barbers')
export class BarbersController {

    @Get()
    findAll(): string[] {
        return [
            'Hi',
            "hello",
        ];
    }
}

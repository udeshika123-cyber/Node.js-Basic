import { Controller, Post, Req } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';

@Controller('whatsapp')
export class WhatsappController {
    public constructor(private readonly whatsappService:WhatsappService){}

    @Post('send')
    sendMessage(@Req()request:Request){
        console.log(JSON.stringify(request.body));
        return this.whatsappService.sendMessage();
    }
}

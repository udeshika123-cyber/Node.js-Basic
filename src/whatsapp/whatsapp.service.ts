import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappService {
    sendMessage(){
        return 'HELLO WORLD';
    }
}

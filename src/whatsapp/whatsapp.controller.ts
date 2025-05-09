import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { WhatsappService } from './whatsapp.service';

@Controller('whatsapp')
export class WhatsappController {
  public constructor(private readonly whatsappService: WhatsappService) {}

  @Get('send')
  sendMessage(@Req() request: Request) {
    console.log(JSON.stringify(request.body));
    return this.whatsappService.sendMessage();
  }

  @Get('webhook')
  challengeWebhook(@Req() req: Request, @Res() res: Response) {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    // Check if mode and token exist
    if (mode && token) {
      if (mode === 'subscribe' && token === '123456789') {
        console.log('WEBHOOK_VERIFIED');
        return res.status(200).send(challenge);
      } else {
        return res.sendStatus(403);
      }
    }

    return res.sendStatus(400);
  }
  @Post('webhook')
  handleWebhook(@Req() req: Request, @Res() res: Response){
    console.log('Received webhook:',JSON.stringify(req.body.entry));
    res.sendStatus(200);
  }
}

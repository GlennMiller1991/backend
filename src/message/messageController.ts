import { Body, Controller, Post } from "@nestjs/common";
import { MessageService } from './message.service';
import { Message } from "./models/message.interface";
import { Observable } from "rxjs";

@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post()
  create(@Body() message: Message): Observable<Message> {
    return this.messageService.createMessage(message);
  }
}

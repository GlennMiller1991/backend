import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { MessageService } from "./message.service";
import { Message } from "./models/message.interface";
import { Observable } from "rxjs";
import { DeleteResult } from "typeorm";

@Controller("message")
export class MessageController {
  constructor(private messageService: MessageService) {
  }

  @Post()
  create(@Body() message: Message): Observable<Message> {
    return this.messageService.createMessage(message);
  }

  @Get()
  findAll(): Observable<Message[]> {
    return this.messageService.findAllMessages();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Observable<Message> {
    return this.messageService.findOne(id);
  }

  @Delete(":id")
  deleteOne(@Param("id") id: number): Observable<DeleteResult> {
    return this.messageService.deleteOne(id);
  }
}

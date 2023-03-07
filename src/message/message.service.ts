import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MessageEntity } from './models/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './models/message.interface';
import { from, Observable } from 'rxjs';

@Injectable({})
export class MessageService {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>,
  ) {}

  createMessage(message: Message): Observable<Message> {
    return from(this.messageRepository.save(message));
  }
}
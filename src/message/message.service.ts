import { Injectable } from "@nestjs/common";
import { DeleteResult, Repository } from "typeorm";
import { MessageEntity } from "./models/message.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Message } from "./models/message.interface";
import { from, Observable } from "rxjs";

@Injectable({})
export class MessageService {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>
  ) {
  }

  createMessage(message: Message): Observable<Message> {
    return from(this.messageRepository.save(message));
  }

  findAllMessages(): Observable<Message[]> {
    return from(this.messageRepository.find());
  }

  findOne(id: number): Observable<Message> {
    return from(this.messageRepository.findOneById(id));
  }

  deleteOne(id: number): Observable<DeleteResult> {
    return from(this.messageRepository.delete(id));
  }
}

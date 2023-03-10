import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("message")
export class MessageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: "" })
  email: string;

  @Column({ default: "" })
  subject: string;

  @Column({ default: "" })
  message: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;
}

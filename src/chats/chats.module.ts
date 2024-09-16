import { forwardRef, Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsResolver } from './chats.resolver';
import { DatabaseModule } from 'src/common/database/database.module';
import { Chat,  } from './entities/chat.entity';
import { ChatsRepository } from './chats.repository';
import { ChatSchema } from './entities/chat.document';
import { MessagesModule } from './messages/messages.module';
import { ChatsController } from './chats.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule, DatabaseModule.forFeature([{ name: Chat.name, schema: ChatSchema}]), forwardRef(() =>MessagesModule)],
  providers: [ChatsResolver, ChatsService, ChatsRepository],
  exports: [ChatsRepository],
  controllers: [ChatsController],
})
export class ChatsModule {}

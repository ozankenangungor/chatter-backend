import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UsersRepository } from './user.repository';
import { DatabaseModule } from 'src/common/database/database.module';
import { User,  } from './entities/user.entity';
import { UsersController } from './users.controller';
import { S3Module } from 'src/common/s3/s3.module';
import { UserSchema } from './entities/user.document';

@Module({
  imports: [DatabaseModule.forFeature([{name: User.name, schema: UserSchema}]), S3Module],
  providers: [UsersResolver, UsersService, UsersRepository],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}

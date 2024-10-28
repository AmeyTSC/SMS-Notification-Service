import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
@Injectable()
export class AppService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  ConnectionStatus(): string {
    const status = this.connection.readyState;
    switch (status) {
      case 0:
        return 'Database: Disconnected';
      case 1:
        return 'Database: Connected';
      case 2:
        return 'Database: Connecting';
      case 3:
        return 'Database: Disconnecting';
      default:
        return 'Error: Unknown Status';
    }
  }
}

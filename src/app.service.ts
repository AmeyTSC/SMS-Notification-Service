import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(@InjectConnection() private readonly connection: Connection) {}

  ConnectionStatus(): void {
    const status = this.connection.readyState;
    switch (status) {
      case 0:
        this.logger.fatal('Disconnected');
        break;
      case 1:
        this.logger.log('Connected');
        break;
      case 2:
        this.logger.log('Connecting');
        break;
      case 3:
        this.logger.warn('Disconnecting');
        break;
      default:
        this.logger.error('Unknown status');
    }
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { emailLogs} from 'src/Schema/email_logs.schema';


@Injectable()
export class EmailLogService {
  constructor( @InjectModel(emailLogs.name)private emailLogs:Model<emailLogs>,) {}
  async createLog(data: any): Promise<emailLogs> {
    const timeAndDate = computeTimeAndDate();
    const logEntry = new this.emailLogs({
      ...data,
      timeanddate:timeAndDate,
    });
    return logEntry.save();
  }
}

const computeTimeAndDate = () => {
    return new Date(Date.now() + 5.5 * 60 * 60 * 1000)
      .toISOString()
      .replace("Z", "+05:30");
};
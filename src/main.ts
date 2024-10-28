import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Handler, Context, Callback } from 'aws-lambda';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import * as dotenv from 'dotenv';

dotenv.config({ path: process.cwd() + '/.env' });

let cachedServer: Handler;

async function bootstrapLocal() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'], // Enable all log levels
  });
  app.enableCors();
  await app.listen(3000);
}

async function bootstrapLambda(): Promise<Handler> {
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);
  const app = await NestFactory.create(AppModule, adapter);
  app.enableCors();
  await app.init();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (event: any, context: Context, callback: Callback) => {
  cachedServer = cachedServer ?? (await bootstrapLambda());
  return cachedServer(event, context, callback);
};

if (process.env.IS_OFFLINE) {
  bootstrapLocal();
}

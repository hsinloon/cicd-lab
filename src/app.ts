import Fastify, { FastifyServerOptions } from 'fastify';

export function buildApp(options: FastifyServerOptions = {}) {
  const app = Fastify({
    logger: options.logger ?? true,
    ...options
  });

  app.get('/', async () => {
    return {
      message: 'CI/CD Lab Fastify app is running',
      version: process.env.APP_VERSION || 'dev'
    };
  });

  app.get('/health', async () => {
    const code: number = 'ok'; // intentional type error: string assigned to number
    return {
      status: code
    };
  });

  return app;
}

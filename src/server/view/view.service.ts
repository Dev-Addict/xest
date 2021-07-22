import {Injectable, Logger, OnModuleInit} from '@nestjs/common';
import next from 'next';
import {NextServer} from 'next/dist/server/next';

@Injectable()
export class ViewService implements OnModuleInit {
	private server: NextServer;
	private logger = new Logger('Next');

	async onModuleInit(): Promise<void> {
		try {
			this.server = next({
				dev: process.env.NODE_ENV !== 'production',
				dir: './src/client',
			});

			await this.server.prepare();
		} catch (error) {
			this.logger.error(error);
		}
	}

	get handler() {
		return this.server.getRequestHandler();
	}
}

import {Controller, Get, Req, Res} from '@nestjs/common';
import {Request, Response} from 'express';

import {ViewService} from './view.service';

@Controller('/')
export class ViewController {
	constructor(private viewService: ViewService) {}

	@Get('*')
	public async handler(
		@Req() req: Request,
		@Res() res: Response
	): Promise<void> {
		await this.viewService.handler(req, res);
	}
}

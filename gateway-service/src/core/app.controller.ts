import { Controller, Get } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'

import { AppService } from './app.service'

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@ApiOperation({
		summary: 'Welcome endpoint',
		description: 'Returns a welcome message'
	})
	@Get()
	getHello() {
		return this.appService.getHello()
	}

	@ApiOperation({
		summary: 'Health Check endpoint',
		description: 'Returns the health status of the service'
	})
	@Get('health')
	healthCheck() {
		return this.appService.healthCheck()
	}
}

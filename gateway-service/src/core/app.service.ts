import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
	getHello() {
		return { message: 'Welcome to the Gateway API of BeetCinema!' }
	}

	healthCheck() {
		return { status: 'OK', timestamp: new Date().toISOString() }
	}
}

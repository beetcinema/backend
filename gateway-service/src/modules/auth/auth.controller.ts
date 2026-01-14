import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'

import { SendOtpRequest } from './dto'

@Controller('auth')
export class AuthController {
	@ApiOperation({
		summary: 'Send OTP to user via email or SMS',
		description:
			'Sends a one-time password (OTP) to the specified user identifier, which can be either an email address or a phone number via SMS.'
	})
	@Post('otp/send')
	@HttpCode(HttpStatus.OK)
	// async?
	sendOtp(@Body() dto: SendOtpRequest) {
		console.log('Received OTP request DATA:', dto)

		return { ok: true }
	}
}

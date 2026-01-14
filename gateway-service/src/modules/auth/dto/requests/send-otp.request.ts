import { IsEnum, IsString } from 'class-validator'

export class SendOtpRequest {
	@IsString()
	identifier: string

	@IsEnum(['email', 'sms'])
	type: 'email' | 'sms'
}

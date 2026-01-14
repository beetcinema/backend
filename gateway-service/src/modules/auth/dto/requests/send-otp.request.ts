import { IsEnum, IsString, Validate } from 'class-validator'
import { IdentifierValidator } from 'src/shared/validators'

export class SendOtpRequest {
	@IsString()
	@Validate(IdentifierValidator)
	identifier: string

	@IsEnum(['email', 'sms'])
	type: 'email' | 'sms'
}

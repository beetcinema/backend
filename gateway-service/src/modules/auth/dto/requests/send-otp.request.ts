import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsString, Validate } from 'class-validator'
import { IdentifierValidator } from 'src/shared/validators'

export class SendOtpRequest {
	@ApiProperty({
		description: 'User identifier, can be email or phone number',
		example: '+12345678901'
	})
	@IsString()
	@Validate(IdentifierValidator)
	identifier: string

	@ApiProperty({
		description: 'Type of identifier: email or sms',
		example: 'sms',
		enum: ['email', 'sms']
	})
	@IsEnum(['email', 'sms'])
	type: 'email' | 'sms'
}

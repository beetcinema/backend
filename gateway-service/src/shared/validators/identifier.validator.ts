import {
	ValidationArguments,
	ValidatorConstraint,
	type ValidatorConstraintInterface
} from 'class-validator'
import { SendOtpRequest } from 'src/modules/auth/dto'

@ValidatorConstraint({ name: 'IdentifierValidator', async: false })
export class IdentifierValidator implements ValidatorConstraintInterface {
	validate(value: string, args: ValidationArguments): boolean {
		const object = args.object as SendOtpRequest

		if (object.type === 'email') {
			// Simple email regex
			return (
				typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
			)
		} else if (object.type === 'sms') {
			// Simple phone number regex
			return typeof value === 'string' && /^\+?[1-9]\d{10,15}$/.test(value)
		}
		return false
	}
	defaultMessage(args: ValidationArguments): string {
		const object = args.object as SendOtpRequest

		if (object.type === 'email')
			return 'Identifier must be a valid email address'
		if (object.type === 'sms') return 'Identifier must be a valid phone number'

		return 'Identifier is not valid'
	}
}

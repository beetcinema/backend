import { ApiProperty } from '@nestjs/swagger'

export class HealthResponse {
	@ApiProperty({
		example: 'ok'
	})
	status: string

	@ApiProperty({
		example: '2024-06-01T12:00:00Z'
	})
	timestamp: string
}

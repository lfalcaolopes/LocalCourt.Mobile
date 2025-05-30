export enum ECourtStatus {
	ACTIVE = 'ACTIVE',
	INACTIVE = 'INACTIVE'
}

export enum ERentalStatus {
	CONFIRMED = 'CONFIRMED',
	AWAITING_PAYMENT = 'AWAITING_PAYMENT',
	CANCELLED = 'CANCELLED',
	CONCLUDED = 'CONCLUDED'
}

export enum ECourtCardVariant {
	DASHBOARD = 'DASHBOARD',
	MY_COURTS = 'MY_COURTS',
	MY_RENTALS = 'MY_RENTALS'
}

export enum ECourtCardStyleVariant {
	HORIZONTAL = 'HORIZONTAL',
	VERTICAL = 'VERTICAL'
}

export enum EFormMode {
	VIEW = 'VIEW',
	CREATE = 'CREATE',
	EDIT = 'EDIT'
}

export enum EButtonVariant {
	FILL = 'fill',
	OUTLINE = 'outline'
}

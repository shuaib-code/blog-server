export interface TErrorDetail {
	path: string | number;
	message: string;
}

export interface TErrorResponse {
	status: number;
	message: string;
	details: TErrorDetail[];
}

export interface TGlobalErrorResponse {
	success: boolean;
	message: string;
	status: number;
	error: object | any;
	stack?: string;
}

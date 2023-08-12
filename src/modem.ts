import { request, ClientRequest, IncomingMessage } from 'node:http';

interface RequestOptions {
	method: string;
	path: string;
	search: string;
	headers: Record<string, string>;
}

type ModemRequestFn = (options: RequestOptions) => ClientRequest;

const http: ModemRequestFn = (options) => request({});

export interface SocketProtocolOptions {
	type: 'socket';
	socketPath: string;
}
export interface HttpProtocolOptions {
	host: string;
}
export interface HttpsProtocolOptions {
	host: string;
	key: string;
	cert: string;
	ca: string;
}

export type ModemResponse<E, T> =
	| {
			error: E;
			data: null;
	  }
	| {
			error: null;
			data: T;
	  };

export class Modem {
	private readonly requestFn: (options: RequestOptions) => ClientRequest;

	constructor(options: ModemOptions) {
		this._request = options.request;
	}

	request<E, T>() {
		return new Promise<ModemResponse<E, T>>((resolve) => {
			const req = this._request({});
		});
	}
}

import { Query } from '../utils/query';

import { request as httpRequest } from 'node:http';
import { request as httpsRequest } from 'node:https';

interface ProtocolRequestInput {
	path: string;
	headers: Record<string, string>;
	method: string;
	query: Query;
}

export abstract class Protocol {
	abstract request<E, T>(
		input: ProtocolRequestInput,
	): Promise<{ error: E; data: null } | { error: null; data: T }>;
}

export class HttpProtocol extends Protocol {
	request<E, T>(
		input: ProtocolRequestInput,
	): Promise<{ error: E; data: null } | { error: null; data: T }> {
		throw new Error('Method not implemented.');
	}
}

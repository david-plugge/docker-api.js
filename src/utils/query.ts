export type Query = Record<string, any>;

export function parseSearchQuery(query: Query) {
	return Object.entries(query)
		.map(([key, value]) => {
			if (typeof value === 'boolean') {
				return encodeURIComponent(key);
			} else if (typeof value === 'object') {
				return (
					encodeURIComponent(key) +
					'=' +
					encodeURIComponent(JSON.stringify(value))
				);
			}
			return encodeURIComponent(key) + '=' + encodeURIComponent(value);
		})
		.join('&');
}

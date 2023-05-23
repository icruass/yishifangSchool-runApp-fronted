export function assign<T, U>(target : T, source : U) : asserts target is T & U {
	Object.assign(target as any, source)
};

export function objToStrStyle(obj : any) {
	let style = '';
	for (let key in obj) {
		const val = obj[key];
		style += `${key}:${val};`;
	}
	return style;
}
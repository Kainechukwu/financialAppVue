/* eslint-disable */
const plainResource = {
	error: '',

	loading: false,

	data: {},
};


export default class ApiResource {


	constructor(
		error,

		loading,

		data
	) { }


	static create() {
		return new ApiResource(
			'', false, {}
		);
	}


	static plain() {
		return {
			...plainResource,
		};
	}


}
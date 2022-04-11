import { PageData } from "../models/page";
import { actionStrings } from "./actions";

const initialState = {
	loading: false,
	data: [],
	error: null,
	selectedEditId: -1,
	first: "",
	last: "",
	email: "",
	urlI: "",
};

const reducer = (state = initialState, actions) => {
	switch (actions.type) {
		case actionStrings.fetchBegin:
			return {
				...state,
				loading: true,
			};
		case actionStrings.fetchSuccess:
			return {
				...state,
				loading: false,
				data: actions.payload.data,
			};
		case actionStrings.fetchFailure:
			return {
				...state,
				loading: false,
				error: actions.payload.error,
			};
		case actionStrings.toggleEdit: {
			let a, b, c, d;
			const newRows = state.data.map((page) => {
				if (page.id === actions.payload.id) {
					a = page.firstName;
					b = page.lastName;
					c = page.email;
					d = page.imageUrl;
					return new PageData(
						page.id,
						page.firstName,
						page.lastName,
						page.email,
						page.imageUrl,
						!page.isEditMode
					);
				} else
					return new PageData(
						page.id,
						page.firstName,
						page.lastName,
						page.email,
						page.imageUrl,
						false
					);
			});
			console.log(a, b, c, d);
			return {
				...state,
				data: newRows,
				first: a,
				last: b,
				email: c,
				urlI: d,
				selectedEditId: actions.payload.id,
			};
		}
		case actionStrings.setPageData: {
			const newRows = state.data.map((page) => {
				if (page.id === state.selectedEditId)
					return new PageData(
						page.id,
						state.first,
						state.last,
						state.email,
						state.urlI,
						false
					);
				else return page;
			});
			return {
				...state,
				data: newRows,
			};
		}

		case actionStrings.revertPrevious: {
			const newRows = state.data.map((page) => {
				if (page.id === state.selectedEditId)
					return new PageData(
						page.id,
						page.firstName,
						page.lastName,
						page.email,
						page.imageUrl,
						false
					);
				else return page;
			});
			return {
				...state,
				data: newRows,
				selectedEditId: -1,
			};
		}
		case actionStrings.deletePage: {
			const newRows = state.data.filter(
				(page) => page.id !== actions.payload.id
			);
			return {
				...state,
				data: newRows,
			};
		}
		case actionStrings.setFirst:
			return {
				...state,
				first: actions.payload.data,
			};
		case actionStrings.setLast:
			return {
				...state,
				last: actions.payload.data,
			};
		case actionStrings.setUrl:
			return {
				...state,
				urlI: actions.payload.data,
			};
		case actionStrings.setEmail:
			return {
				...state,
				email: actions.payload.data,
			};

		default:
			return state;
	}
};

export default reducer;

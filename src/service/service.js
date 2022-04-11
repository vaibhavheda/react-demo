import { toPageData } from "../models/page";

const { default: axios } = require("axios");
const { storeActions } = require("../utils/actions");

export const fetchData = () => {
	return async (dispatch) => {
		dispatch(storeActions.loadingBegin());
		axios
			.get("https://reqres.in/api/users?page=1")
			.then((res) => {
				dispatch(storeActions.loadingSuccess(toPageData(res.data)));
			})
			.catch((error) => {
				console.log("Error: ", error);
				dispatch(storeActions.loadingFailure(error));
			});
	};
};

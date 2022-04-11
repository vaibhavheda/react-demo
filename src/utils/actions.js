export const actionStrings = {
	fetchBegin: "FETCH_BEGIN",
	fetchSuccess: "FETCH_SUCCESS",
	fetchFailure: "FETCH_FAILURE",
	toggleEdit: "TOGGLE_EDIT",
	revertPrevious: "REVERT_PREVIOUS",
	setPageData: "SET_PAGE_DATA",
	deletePage: "DELETE_PAGE",
	setFirst: "SET_FIRST",
	setLast: "SET_LASR",
	setUrl: "SET_URL",
	setEmail: "SET_EMAIL",
};

const loadingBegin = () => ({
	type: actionStrings.fetchBegin,
});

const loadingSuccess = (data) => ({
	type: actionStrings.fetchSuccess,
	payload: { data },
});

const loadingFailure = (error) => ({
	type: actionStrings.fetchFailure,
	payload: { error },
});

const toggleEditMode = (id) => ({
	type: actionStrings.toggleEdit,
	payload: { id },
});

const revertToPrevious = () => ({
	type: actionStrings.revertPrevious,
});

const saveEditData = () => ({
	type: actionStrings.setPageData,
});

const deletePage = (id) => ({
	type: actionStrings.deletePage,
	payload: { id },
});

const handleEdit = (type, data) => ({
	type: type,
	payload: { data },
});

export const storeActions = {
	loadingBegin,
	loadingSuccess,
	loadingFailure,
	toggleEditMode,
	deletePage,
	revertToPrevious,
	handleEdit,
	saveEditData,
};

export class PageData {
	constructor(id, first, last, email, imageUrl, isEditMode) {
		this._id = id === undefined ? 0 : id;
		this._first = first === undefined ? "" : first;
		this._last = last === undefined ? "" : last;
		this._email = email === undefined ? "" : email;
		this._imageUrl = imageUrl === undefined ? "" : imageUrl;
		this._isEditMode = isEditMode === undefined ? false : isEditMode;
	}

	get id() {
		return this._id;
	}
	get firstName() {
		return this._first;
	}
	get lastName() {
		return this._last;
	}
	get email() {
		return this._email;
	}
	get imageUrl() {
		return this._imageUrl;
	}
	get isEditMode() {
		return this._isEditMode;
	}
}

export const toPageData = (data) => {
	return data.data.map(
		(data) =>
			new PageData(
				data.id,
				data.first_name,
				data.last_name,
				data.email,
				data.avatar,
				false
			)
	);
};

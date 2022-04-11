import {
	CancelOutlined,
	DeleteOutlined,
	ModeEditOutline,
	SaveOutlined,
} from "@mui/icons-material";
import {
	Table,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	IconButton,
	Input,
	Paper,
} from "@mui/material";
import { memo } from "react";
import { connect, useDispatch } from "react-redux";
import { actionStrings, storeActions } from "../utils/actions";
import "./styles/dataDisplay.scss";

const DataDisplayTable = (props) => {
	const { pageData } = props;

	const tableColums = [
		"E-mail",
		"First Name",
		"Last Name",
		"Image",
		"Actions",
	];

	const dispatch = useDispatch();

	return (
		<TableContainer className="table-wrapper" component={Paper}>
			<Table className="mainTable">
				<TableHead className="table-head">
					<TableRow>
						{tableColums.map((columnName, index) => {
							return (
								<TableCell className="tableCell" key={index}>
									{columnName}
								</TableCell>
							);
						})}
					</TableRow>
				</TableHead>
				<TableBody>
					{pageData.length !== 0 ? (
						pageData.map((page) => {
							return (
								<TableRow key={page.id}>
									<TableCell
										align="left"
										className="tableCell"
									>
										{page.isEditMode ? (
											<Input
												className="tableInput"
												value={props.email}
												name={"email"}
												onChange={(e) =>
													dispatch(
														storeActions.handleEdit(
															actionStrings.setEmail,
															e.target.value
														)
													)
												}
											/>
										) : (
											page.email
										)}
									</TableCell>
									<TableCell
										className="tableCell"
										align="left"
									>
										{page.isEditMode ? (
											<Input
												value={props.first}
												name={"first"}
												onChange={(e) =>
													dispatch(
														storeActions.handleEdit(
															actionStrings.setFirst,
															e.target.value
														)
													)
												}
											/>
										) : (
											page.firstName
										)}
									</TableCell>
									<TableCell
										className="tableCell"
										align="left"
									>
										{page.isEditMode ? (
											<Input
												value={props.last}
												name={"last"}
												onChange={(e) =>
													dispatch(
														storeActions.handleEdit(
															actionStrings.setLast,
															e.target.value
														)
													)
												}
											/>
										) : (
											page.lastName
										)}
									</TableCell>
									<TableCell
										className="tableCell"
										align="left"
									>
										{page.isEditMode ? (
											<Input
												value={props.urlI}
												name={"url"}
												onChange={(e) =>
													dispatch(
														storeActions.handleEdit(
															actionStrings.setUrl,
															e.target.value
														)
													)
												}
											/>
										) : (
											<img
												src={page.imageUrl}
												alt={
													page.firstName +
													" " +
													page.lastName
												}
											/>
										)}
									</TableCell>

									<TableCell className="tableCell">
										<IconButton
											className="tableCell"
											aria-label="edit"
											onClick={() =>
												page.isEditMode
													? dispatch(
															storeActions.saveEditData()
													  )
													: dispatch(
															storeActions.toggleEditMode(
																page.id
															)
													  )
											}
										>
											{page.isEditMode ? (
												<SaveOutlined />
											) : (
												<ModeEditOutline />
											)}
										</IconButton>

										<IconButton
											className="tableCell"
											aria-label="delete"
											onClick={() =>
												page.isEditMode
													? dispatch(
															storeActions.revertToPrevious()
													  )
													: dispatch(
															storeActions.deletePage(
																page.id
															)
													  )
											}
										>
											{page.isEditMode ? (
												<CancelOutlined />
											) : (
												<DeleteOutlined />
											)}
										</IconButton>
									</TableCell>
								</TableRow>
							);
						})
					) : (
						<></>
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		first: state.first,
		last: state.last,
		urlI: state.urlI,
		email: state.email,
		pageData: ownProps.data === undefined ? [] : ownProps.data,
	};
};

export default connect(mapStateToProps)(memo(DataDisplayTable));

import "./App.css";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchData } from "./service/service";
import DataDisplayTable from "./components/displayDataTable";
import LoadingScreen from "./components/loading";

function App(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	return (
		<div className="App">
			<div className="heading">User's Table</div>
			{props.loading ? (
				<LoadingScreen />
			) : (
				<DataDisplayTable data={props.data} />
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		data: state.data,
		loading: state.loading,
	};
};

export default connect(mapStateToProps)(App);

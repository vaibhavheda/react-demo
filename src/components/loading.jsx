import { CircularProgress } from "@mui/material";
import "./styles/loading.scss";

const LoadingScreen = () => {
	return (
		<div className="loading-wrappper">
			<CircularProgress className="spinner" color="success" />
		</div>
	);
};

export default LoadingScreen;

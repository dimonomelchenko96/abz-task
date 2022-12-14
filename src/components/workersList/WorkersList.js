import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Preloader from "../preloader/Preloader";
import WorkerListItem from './WorkersListItem'
import ErrorMessage from "../errorMessage/ErrorMessage";
import { fetchWorkersList } from "../../slices/appSlice";

import "./workersList.scss";

const WorkersList = () => {

	const {workersList, 
		   workersListPage, 
		   workersListLastPage , 
		   workersListLoading : loading, 
		   workersListError: error
		} = useSelector(state => state.app); 

	const dispatch = useDispatch();

	useEffect(() => {
		onRequest(workersListPage);
	}, []);

	const onRequest = (offset) => {
		dispatch(fetchWorkersList(offset));
	};

	const spinner = loading ? <Preloader /> : null;
	const items = <List data={workersList} />;
	const errorMessage = error ? <ErrorMessage/> : null

	return (
		<section className="workers" id="workers">
			<div className="container">
				<h2 className="workers__title">Working with GET request</h2>
				{items}
				{spinner}
				{errorMessage}
				{!loading && !!workersList.length &&(
					<button disabled={workersListLastPage} className="button" onClick={() => onRequest(workersListPage)}>
						Show more
					</button>
				)}
			</div>
		</section>
	);
};

const List = ({ data }) => {
	return (
		<div className="workers__list">
			{data.map((item) => {
				return (
					<WorkerListItem key={item.id} {...item}/>
				);
			})}
		</div>
	);
};

export default WorkersList;

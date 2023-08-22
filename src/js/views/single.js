import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Personajes } from "../component/personajes.js"

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	

	useEffect(() => {
		actions.obtenerPlanetaSingle(params.theid)
	})
	return (
		<div className="jumbotron">

			<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>



			<h1 className="display-4"></h1>


			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home



				</span>
			</Link>

			<Personajes> </Personajes>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};

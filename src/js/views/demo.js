import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { HomeCardPers } from "../component/cardHomePers.jsx";
import { HomeCardPlanet } from "../component/cardHomePlanet.jsx";
import { HomeCardCar } from "../component/cardHomeCar.jsx";
import { Context } from "../store/appContext";


export const Demo = () => {
	const { store, actions } = useContext(Context);


	useEffect(() => {
		actions.obtenerInfohome(),
			actions.obtenerInfoPlaneta(),
			actions.obtenerAutos()

	}, [])


	useEffect(function () {
		/* 	actions.actualizar() */
	}, [store.favorito])

	return (
		<div className="container">
			<h2 className="text-danger">Characters</h2>
			<div className="d-flex mb-5" style={{ overflowX: 'scroll', scrollSnapType: 'x mandatory' }}>
				{store.people.map((item, index) => {
					return (
						<div key={index}>
							<HomeCardPers index={index} name={item.name} gender={item.gender} hairColor={item.hair_color} eyeColor={item.eye_color}></HomeCardPers>
						</div>
					)
				})}
			</div>
			<br />
			<h2 className="text-danger">Planets</h2>
			<div className="d-flex mb-5" style={{ overflowX: 'scroll', scrollSnapType: 'x mandatory' }}>
				{store.planetas.map((item, index) => {
					return (
						<div key={index}>
							<HomeCardPlanet index={index} name={item.name} population={item.population} terrain={item.terrain}></HomeCardPlanet>
						</div>
					)
				})}
			</div>
			<br />
			<h2 className="text-danger">Vehicles</h2>
			<div className="d-flex mb-5" style={{ overflowX: 'scroll', scrollSnapType: 'x mandatory' }}>
				{store.autos.map((item, index) => {
					return (
						<div key={index}>
							<HomeCardCar index={index} name={item.name} manufacturer={item.manufacturer} model={item.model}></HomeCardCar>
						</div>
					)
				})}
			</div>
		</div>
	);
};


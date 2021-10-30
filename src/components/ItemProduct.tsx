import { IonLabel } from "@ionic/react";
import React from "react";

interface ItemProductProps {
	category: string;
	name: string;
}

export const ItemProduct = ({
	category,
	name,
}: ItemProductProps) => {
	return (
		<IonLabel>
			<h2>{category}</h2>
			<h3>{name}</h3>
		</IonLabel>
	);
};

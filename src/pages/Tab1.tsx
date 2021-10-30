import {
	HubConnection,
	HubConnectionBuilder,
} from "@microsoft/signalr";

import {
	IonContent,
	IonHeader,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

import { useEffect, useState } from "react";
import api from "../api-endpoint";
import { alertController } from "@ionic/core";

interface IProducts {
	id: number;
	category: string;
	name: string;
}

const Tab1: React.FC = () => {
	const [connection, setConnection] =
		useState<null | HubConnection>(null);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const connect = new HubConnectionBuilder()
			.withUrl(`${api}/product-hub`)
			.withAutomaticReconnect()
			.build();

		setConnection(connect);
	}, []);

	useEffect(() => {
		if (connection) {
			connection
				.start()
				.then(() => {
					//show alert add product
					connection.on(
						"NewProduct",
						async (product: {
							name: string;
							category: string;
							price: number;
						}) => {
							const alert = await alertController.create({
								cssClass: "my-custom-class",
								header: "New Product",
								subHeader: product.name,
								message: JSON.stringify(
									product,
									null,
									"\t"
								),
								buttons: ["OK"],
							});
							await alert.present();

							getData();
						}
					);
				})
				.catch(error => console.log(error));
		}
	}, [connection]);

	useEffect(() => {
		getData();
	}, []);

	//method get data from api
	const getData = async () => {
		try {
			const response = await fetch(`${api}/api/product`);
			const dataApi = await response.json();
			setProducts(dataApi);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Home</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen className="ion-padding">
				<IonHeader collapse="condense">
					<IonToolbar></IonToolbar>
				</IonHeader>
				<IonList>
					<IonListHeader lines="inset">
						<IonLabel>Products</IonLabel>
					</IonListHeader>
					{products.map(
						({ id, category, name }: IProducts) => (
							<IonItem key={id}>
								<IonLabel>
									<h2>{category}</h2>
									<h3>{name}</h3>
								</IonLabel>
							</IonItem>
						)
					)}
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default Tab1;

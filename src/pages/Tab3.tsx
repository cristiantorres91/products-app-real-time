import {
	IonContent,
	IonHeader,
	IonGrid,
	IonPage,
	IonTitle,
	IonToolbar,
	IonItem,
	IonLabel,
} from "@ionic/react";
import "./Tab3.css";

const Tab3: React.FC = () => {
	const styles = {
		height: "100%",
	};
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Info</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Tab 3</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonGrid style={styles}>
					<h3 className="ion-justify-content-center">
						Application Created by
					</h3>

					<IonItem
						target="blank"
						href="http://cristiantorresalfaro.blogspot.com/"
						className="ion-justify-content-center ion-align-items-center"
					>
						<IonLabel>Cristian Torres</IonLabel>
					</IonItem>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Tab3;

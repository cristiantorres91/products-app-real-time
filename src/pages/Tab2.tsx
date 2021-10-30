import {
	IonButton,
	IonCol,
	IonContent,
	IonHeader,
	IonInput,
	IonItem,
	IonLabel,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

const Tab2: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Add Products</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Tab 2</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonRow class="ion-justify-content-center">
					<IonCol
						size="12"
						size-xs="12"
						size-sm="6"
						size-md="6"
						size-lg="6"
					>
						<form>
							<IonItem>
								<IonLabel position="floating">
									Name
								</IonLabel>
								<IonInput v-model="name" />
							</IonItem>
							<IonItem>
								<IonLabel position="floating">
									Category
								</IonLabel>
								<IonInput v-model="category" />
							</IonItem>
							<IonItem>
								<IonLabel position="floating">
									Price
								</IonLabel>
								<IonInput
									type="number"
									v-model="price"
								></IonInput>
							</IonItem>
							<div className="ion-text-center ion-padding-top">
								<IonButton
									type="submit"
									color="success"
									shape="round"
								>
									Add
								</IonButton>
							</div>
						</form>
					</IonCol>
				</IonRow>
			</IonContent>
		</IonPage>
	);
};

export default Tab2;

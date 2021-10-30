import { loadingController } from "@ionic/core";
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
import { ChangeEvent, useState } from "react";
import api from "../api-endpoint";

type FormElement = ChangeEvent<HTMLInputElement>;

interface IProduct {
	name: string;
	category: string;
	price: number;
}

const Tab2: React.FC = () => {
	const [form, setForm] = useState<IProduct>({
		name: "",
		category: "",
		price: 0,
	});

	const handleChange = (e: FormElement) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async () => {
		if (form.name.length > 2) {
			const loading = await loadingController.create({
				cssClass: "my-custom-class",
				message: "Add...",
			});
			try {
				await loading.present();

				//post data api
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: form.name,
						category: form.category,
						price: form.price,
					}),
				};
				const response = await fetch(
					`${api}/api/product`,
					requestOptions
				);
				const data = await response.json();
				console.log(data);
				setForm({ name: "", category: "", price: 0 });
			} catch (error) {
				console.log(error);
			} finally {
				await loading.dismiss();
			}
		}
	};

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
						<form
							onSubmit={e => {
								e.preventDefault();
								handleSubmit();
							}}
						>
							<IonItem>
								<IonLabel position="floating">
									Name
								</IonLabel>
								<IonInput
									name="name"
									onIonChange={(e: any) => handleChange(e)}
									value={form.name}
								/>
							</IonItem>
							<IonItem>
								<IonLabel position="floating">
									Category
								</IonLabel>
								<IonInput
									name="category"
									onIonChange={(e: any) => handleChange(e)}
									value={form.category}
								/>
							</IonItem>
							<IonItem>
								<IonLabel position="floating">
									Price
								</IonLabel>
								<IonInput
									type="number"
									name="price"
									onIonChange={(e: any) => handleChange(e)}
									value={form.price}
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

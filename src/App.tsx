import { Redirect, Route } from "react-router-dom";
import {
	IonApp,
	IonIcon,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
	addCircleOutline,
	informationCircleOutline,
	homeOutline,
} from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Route exact path="/home">
						<Tab1 />
					</Route>
					<Route exact path="/addproduct">
						<Tab2 />
					</Route>
					<Route path="/info">
						<Tab3 />
					</Route>
					<Route exact path="/">
						<Redirect to="/home" />
					</Route>
				</IonRouterOutlet>
				<IonTabBar slot="bottom">
					<IonTabButton tab="tab1" href="/home">
						<IonIcon icon={homeOutline} />
					</IonTabButton>
					<IonTabButton tab="tab2" href="/addproduct">
						<IonIcon icon={addCircleOutline} />
					</IonTabButton>
					<IonTabButton tab="tab3" href="/info">
						<IonIcon icon={informationCircleOutline} />
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</IonReactRouter>
	</IonApp>
);

export default App;

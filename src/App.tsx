import { Redirect, Route } from "react-router-dom";
import {
    IonIcon,
    IonLabel,
    IonPage,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import SettingPage from "./pages/SettingPage";
import { home as homeIcon, settings as settingsIcon } from "ionicons/icons";
import ExploreContainer from "./components/ExploreContainer";
import Item from "./components/Item";

setupIonicReact();

const App: React.FC = () => {
    return (
        <IonPage>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path="/entry">
                            <Home />
                        </Route>
                        <Route exact path="/entry/:id">
                            <Item />
                        </Route>
                        <Route exact path="/settings">
                            <SettingPage />
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/entry" />
                        </Route>
                    </IonRouterOutlet>

                    <IonTabBar slot="bottom">
                        <IonTabButton href="/entry" tab="entry">
                            <IonIcon icon={homeIcon} />
                            <IonLabel>Home</IonLabel>
                        </IonTabButton>
                        <IonTabButton href="/settings" tab="settings">
                            <IonIcon icon={settingsIcon} />
                            <IonLabel>Settings</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </IonPage>
    );
};

export default App;

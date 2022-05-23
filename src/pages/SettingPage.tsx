import {
    IonContent,
    IonHeader,
    IonPage,
    IonRouterLink,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import "./Home.css";

const SettingPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Setting</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                This is setting page. Go to the{" "}
                <IonRouterLink routerLink="/entry">Home</IonRouterLink>
            </IonContent>
        </IonPage>
    );
};

export default SettingPage;

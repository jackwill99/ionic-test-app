import {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonPage,
    IonRouterLink,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { entries } from "../data";
import "./Home.css";

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    {entries.map((entry) => (
                        <IonItem
                            key={entry.id}
                            button
                            href={`/entry/${entry.id}`}
                        >
                            {entry.description}
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Home;

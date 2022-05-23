import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import React from "react";
import { useParams } from "react-router";
import { entries } from "../data";

interface RouteParams {
    id: string;
}

const Item: React.FC = () => {
    const { id } = useParams<RouteParams>();
    const entry = entries.filter((entry) => entry.id === id);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/entry" />
                    </IonButtons>
                    <IonTitle>{entry[0].title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {entry[0].description}
            </IonContent>
        </IonPage>
    );
};

export default Item;

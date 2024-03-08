import './ExploreContainer.css';
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
   <IonCard>
      <IonCardHeader>
        <IonCardTitle>Hello JM JALS</IonCardTitle>
        <IonCardSubtitle>Im Jefferson Lags</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>JM is my name, late game is my game</IonCardContent>
    </IonCard>
  );
};

export default ExploreContainer;

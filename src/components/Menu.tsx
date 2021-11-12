import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {settingsOutline,settingsSharp,bicycleOutline, bicycleSharp,peopleOutline, peopleSharp,calendarOutline, calendarSharp,personOutline, personSharp,homeSharp, homeOutline, heartOutline, heartSharp, cloudUploadOutline, cloudUploadSharp,logInOutline,logInSharp,} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/page/Inicio',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Deportes',
    url: '/page/Deportes',
    iosIcon: bicycleOutline,
    mdIcon: bicycleSharp
  },
  {
    title: 'Atletas',
    url: '/page/Atletas',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: 'Perfiles',
    url: '/page/Perfiles',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Entrenadores',
    url: '/page/Entrenadores',
    iosIcon: personOutline,
    mdIcon: personSharp
  },
  {
    title: 'Planes',
    url: '/page/Planes',
    iosIcon: calendarOutline,
    mdIcon: calendarSharp
  },
 
];

const opciones: AppPage[] = [
  {
    title: 'Configuracion',
    url: '/page/Configuracion',
    iosIcon: settingsOutline,
    mdIcon: settingsSharp
  },
  {
    title: 'Sincronizar',
    url: '/page/Sincronizar',
    iosIcon: cloudUploadOutline,
    mdIcon: cloudUploadSharp
  },
  {
    title: 'Login',
    url: '/page/Login',
    iosIcon: logInOutline,
    mdIcon: logInSharp
  },
 
];



const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>PeriodizatonAPP</IonListHeader>
          <IonNote>Periodiza tus</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}

          
        </IonList>

         <IonList id="labels-list">
          <IonListHeader>Opciones</IonListHeader>        

          {opciones.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList> 
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

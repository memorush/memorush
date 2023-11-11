import React from 'react';
import {
  Outlet
} from 'react-router-dom';
import Contacts from './components/contacts/contacts.component';
import DeveloperComponent from './components/developer/developer.component';
import DownloadComponent from './components/download/download.component';
import Features from './components/features/features.component';
import HeroComponent from './components/hero/hero.component';
import NavigationComponent from './components/navigation/navigation.component';
import ScreenshotsComponent from './components/screenshots/screenshots.component';
import styles from './main.module.scss';
import ExplanationsComponent from './components/explanation/explanation.component';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Outlet />
      <NavigationComponent />
      <HeroComponent />
      <Features />
      <ExplanationsComponent/>
      <ScreenshotsComponent />
      <DownloadComponent />
      <Contacts />
    </div>
  )
}

export default MainPage;

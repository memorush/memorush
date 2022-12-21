import React from 'react';
import {
  Outlet
} from 'react-router-dom';
import Contacts from './components/contacts/contacts.component';
import DeveloperComponent from './components/developer/developer.component';
import DownloadComponent from './components/download/download.component';
import Features from './components/features/features.component';
import GalleryComponent from './components/gallery/gallery.component';
import HeroComponent from './components/hero/hero.component';
import NavigationComponent from './components/navigation/navigation.component';
import ScreenshotsComponent from './components/screenshots/screenshots.component';
import styles from './main.module.css';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Outlet />
      <NavigationComponent />
      <HeroComponent />
      <Features />
      <GalleryComponent />
      <ScreenshotsComponent />
      <DownloadComponent />
      <DeveloperComponent />
      <Contacts />
    </div>
  )
}

export default MainPage;

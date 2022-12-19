import React from 'react';
import {
  Outlet
} from 'react-router-dom';
import Contacts from './components/contacts/contacts.component';
import Developer from './components/developer/developer.component';
import Download from './components/download/download.component';
import Features from './components/features/features.component';
import Gallery from './components/gallery/gallery.component';
import Hero from './components/hero/hero.component';
import Navigation from './components/navigation/navigation.component';
import Screenshots from './components/screenshots/screenshots.component';
import styles from './main.module.css';

const Main = () => {
  return (
    <div className={styles.container}>
      <Outlet />
      <Navigation />
      <Hero />
      <Features />
      <Gallery />
      <Screenshots />
      <Download />
      <Developer />
      <Contacts />
    </div>
  )
}

export default Main;

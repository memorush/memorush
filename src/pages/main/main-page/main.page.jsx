import React from 'react';
import {
  Outlet
} from 'react-router-dom';
import Contacts from '../main-components/contacts/contacts.component';
import Developer from '../main-components/developer/developer.component';
import Download from '../main-components/download/download.component';
import Features from '../main-components/features/features.component';
import Gallery from '../main-components/gallery/gallery.component';
import Hero from '../main-components/hero/hero.component';
import Navigation from '../main-components/navigation/navigation.component';
import Screenshots from '../main-components/screenshots/screenshots.component';
import Testimonial from '../main-components/testimonial/testimonial.component';
import styles from './main.module.css';

const Main = () => {

  return (
    <div className={styles.container}>
      <Outlet />
      <Navigation />
      <Hero />
      <Features />
      <Gallery />
      <Testimonial />
      <Screenshots />
      <Download />
      <Developer />
      <Contacts />
    </div>
  )
}

export default Main;

import Contacts from '../../components/main/contacts/contacts.component'
import Developer from '../../components/main/developer/developer.component';
import Features from '../../components/main/features/features.component';
import Footer from '../../components/common/footer/footer.component';
import Gallery from '../../components/main/gallery/gallery.component';
import Header from '../../components/main/header/header.component';
import Hero from '../../components/main/hero/hero.component';
import Subscribe from '../../components/main/subscribe/subscribe.component';
import Testmonial from '../../components/main/testimonial/testimonial.component';
import Sidebar from '../../components/main/sidebar/sidebar.component';
import SignUp from '../../components/main/sign-up/sign-up';

import {
  Route
} from 'react-router-dom';

import styles from './main.module.css';

import React from 'react';

const Main = () => {
  return (
    <div className={styles.container}>
      <Route path={"/main/registration"} component={SignUp} />
      <Header />
      <Sidebar />
      <Hero />
      <Features />
      <Gallery />
      <Developer />
      <Subscribe />
      <Testmonial />
      <Contacts />
      <Footer />
    </div>
  )
}

export default Main;
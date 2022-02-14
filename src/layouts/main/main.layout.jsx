import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  Route
} from 'react-router-dom';
import Footer from '../../components/common/footer/footer.component';
import Contacts from '../../components/main/contacts/contacts.component';
import Developer from '../../components/main/developer/developer.component';
import Features from '../../components/main/features/features.component';
import Gallery from '../../components/main/gallery/gallery.component';
import Header from '../../components/main/header/header.component';
import Hero from '../../components/main/hero/hero.component';
import Sidebar from '../../components/main/sidebar/sidebar.component';
import SignUp from '../../components/main/sign-up/sign-up';
import styles from './main.module.css';

const Main = () => {

  return (
    <>
      <Route path={"/main/registration"} component={SignUp} />
      <Header />
      <Sidebar />
      <Hero />
      <Features />
      <Gallery />
      <Developer />
      <Contacts />
      <Footer />
    </>
  )
}

export default Main;
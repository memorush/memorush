import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  Route
} from 'react-router-dom';
import Footer from '../../components/common/footer/footer.component';
import Contacts from '../../components/main/contacts/contacts.component';
import Features from '../../components/main/features/features.component';
import Gallery from '../../components/main/gallery/gallery.component';
import Hero from '../../components/main/hero/hero.component';
import Sidebar from '../../components/main/sidebar/sidebar.component';
import SignUp from '../../components/main/sign-up/sign-up';
import SignIn from '../../components/main/sign-in/sign-in.component';
import Testimonial from '../../components/main/testimonial/testimonial.component';
import Developer from '../../components/main/developer/developer.component';
import Screenshots from '../../components/main/screenshots/screenshots.component';
import Download from '../../components/main/download/download.component';
import styles from './main.module.css';

const Main = () => {

  return (
    <>
      <Route path={"/main/registration"} component={SignUp} />
      <Route path={"/main/sign-in"} component={SignIn} />
      <Sidebar />
      <Hero />
      <Features />
      <Gallery />
      <Testimonial/>
      <Screenshots/>
      <Download/>
      <Developer/>
      <Contacts />
      <Footer />
    </>
  )
}

export default Main;
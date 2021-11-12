import Header from '../header/header';
import Hero from '../hero/hero';
import Features from '../features/features';
import Gallery from '../gallery/gallery';
import Testmonial from '../testimonial/testimonial';
import Subscribe from '../subscribe/subscribe';
import Contacts from '../contacts/contacts';
import Footer from '../footer/footer';

import style from './main.module.css';

export default function Main() {
  return (
    <div className={style.container}>
      <Header/>
      <Hero/>
      <Features/>
      <Gallery/>
      <Testmonial/>
      <Subscribe/>
      <Contacts/>
      <Footer/>
    </div>
  )
}
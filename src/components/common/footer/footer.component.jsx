import cn from 'classname';

import style from './footer.module.css';

const Footer = () => {

  return (
    <div className={cn(style.container)}>
      <h3>© All Rights Reserved</h3>
    </div>
  )
}

export default Footer;
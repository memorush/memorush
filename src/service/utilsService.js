export const scrollToElementIdHandler = (elementId) => {
    document.getElementById(elementId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
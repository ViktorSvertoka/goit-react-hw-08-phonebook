import { useEffect } from 'react';

const PhoneIcons = () => {
  useEffect(() => {
    const createPhone = () => {
      let phone = document.createElement('div');
      phone.classList.add('phone');
      phone.innerHTML = '☎️';
      phone.style.position = 'absolute';
      phone.style.zIndex = '1';

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const minSize = 1;
      const maxSize = 20;
      const minDelay = 500;
      const maxDelay = 3000;
      const minOpacity = 0.2;
      const maxOpacity = 1;

      const updatePhone = () => {
        let left = Math.random() * windowWidth;
        let top = Math.random() * windowHeight;
        let size = Math.random() * (maxSize - minSize) + minSize;
        let delay = Math.random() * (maxDelay - minDelay) + minDelay;
        let opacity = Math.random() * (maxOpacity - minOpacity) + minOpacity;

        phone.style.left = left + 'px';
        phone.style.top = top + 'px';
        phone.style.fontSize = size + 'px';
        phone.style.transitionDuration = delay + 'ms';
        phone.style.opacity = opacity;

        setTimeout(updatePhone, delay);
      };

      updatePhone();

      document.body.appendChild(phone);
    };

    let numPhone = 3;

    for (let i = 0; i < numPhone; i++) {
      createPhone();
    }
  }, []);

  return;
};

export default PhoneIcons;

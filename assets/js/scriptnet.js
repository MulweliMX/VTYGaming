// Netlify script.js

document.addEventListener('DOMContentLoaded', function () {
    fetch('/.netlify/functions/sliders')
      .then(response => response.json())
      .then(sliders => {
        const sliderContainer = document.querySelector('[data-slider-container]');
  
        sliders.forEach(slider => {
          const sliderItem = document.createElement('li');
          sliderItem.className = 'slider-item';
  
          const sliderCard = document.createElement('a');
          sliderCard.href = slider.data.link;
          sliderCard.className = 'slider-card';
  
          const sliderBanner = document.createElement('figure');
          sliderBanner.className = 'slider-banner img-holder';
          sliderBanner.style = `--width: ${slider.data.width}px; --height: ${slider.data.height}px;`;
  
          const sliderImage = document.createElement('img');
          sliderImage.src = slider.data.image;
          sliderImage.width = slider.data.width;
          sliderImage.height = slider.data.height;
          sliderImage.loading = 'lazy';
          sliderImage.alt = slider.data.title;
          sliderImage.className = 'img-cover';
  
          sliderBanner.appendChild(sliderImage);
  
          const sliderContent = document.createElement('div');
          sliderContent.className = 'slider-content';
  
          const sliderTitle = document.createElement('span');
          sliderTitle.className = 'slider-title';
          sliderTitle.textContent = slider.data.title;
  
          const sliderSubtitle = document.createElement('p');
          sliderSubtitle.className = 'slider-subtitle';
          sliderSubtitle.textContent = slider.data.subtitle;
  
          sliderContent.appendChild(sliderTitle);
          sliderContent.appendChild(sliderSubtitle);
  
          sliderCard.appendChild(sliderBanner);
          sliderCard.appendChild(sliderContent);
  
          sliderItem.appendChild(sliderCard);
  
          sliderContainer.appendChild(sliderItem);
        });
      })
      .catch(error => console.error('Error fetching data from Netlify CMS:', error));
  });
  
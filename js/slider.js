$(document).ready(function () {
  const slidesData = [
    { id: 1, name: "Мейн кун 1", price: "5 000 uan", photo: "img/mainKyne.jpg" },
    { id: 1, name: "кок залісся", price: "5 000 uan", photo: "img/mainKyne.jpg" },
    { id: 1, name: "Мейн кун 1", price: "5 000 uan", photo: "img/mainKyne.jpg" },
    { id: 1, name: "Мейн кун 1", price: "5 000 uan", photo: "img/mainKyne.jpg" },
    { id: 1, name: "Мейн кун 1", price: "5 000 uan", photo: "img/mainKyne.jpg" },
    { id: 1, name: "Мейн кун 1", price: "5 000 uan", photo: "img/mainKyne.jpg" },
    { id: 1, name: "Мейн кун 1", price: "5 000 uan", photo: "img/mainKyne.jpg" },
    { id: 1, name: "Мейн кун 1", price: "5 000 uan", photo: "img/mainKyne.jpg" },
    { id: 1, name: "Мейн кун 1", price: "5 000 uan", photo: "img/mainKyne.jpg" },
    { id: 1, name: "Мейн кун 1", price: "5 000 uan", photo: "img/mainKyne.jpg" },
  ];

  const $track = $('.recomendation__list');

   slidesData.forEach(slide => {
    const $item = $(`
      <div class="recomendation__item">
        <div class="recomendation__photo" style="background-image: url('${slide.photo}');"></div>
        <p class="recomendation__name">${slide.name}</p>
        <p class="recomendation__price">${slide.price}</p>
        <button class="recomendation__button">Додати у кошик</button>
      </div>
    `);
    $track.append($item);
  });

  const $items = $('.recomendation__item');
  const totalItems = $items.length;

  let itemsPerView = getItemsPerView();
  let currentIndex = 0;
  let maxIndex;

  function getItemsPerView() {
    const width = $(window).width();
    if (width >= 1200) return 4;
    if (width >= 900) return 3;
    if (width >= 600) return 2;
    return 1;
  }

  function updateLayout() {
    itemsPerView = getItemsPerView();
    const itemWidthPercent = 100 / itemsPerView;
    $items.css('flex-basis', itemWidthPercent + '%');

     maxIndex = totalItems - itemsPerView;
    if (maxIndex < 0) maxIndex = 0;

     if (currentIndex > maxIndex) currentIndex = maxIndex;

    updateSlider();
  }

  $('.next').click(function () {
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
       currentIndex = 0;
    }
    updateSlider();
  });

  $('.prev').click(function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
       currentIndex = maxIndex;
    }
    updateSlider();
  });


  function updateSlider() {
    const itemWidth = $items.outerWidth(true);
    const offset = currentIndex * itemWidth;
    $track.css('transform', `translateX(-${offset}px)`);
  }

  $('.next').click(function () {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  $('.prev').click(function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  $(window).resize(function () {
    updateLayout();
  });

  updateLayout();
});

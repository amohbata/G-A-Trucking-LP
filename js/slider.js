var links = document.querySelectorAll('.slider-nav-link');

var wrapper = document.querySelectorAll('.slider-wrapper');

// activeLink points to the currently active slide

var activeLink = 0;

//setting up event listeners

for (var i = 0; i < links.length; i++) {
  var link = links[i];
  link.addEventListener('click', setClickedItem, false);
  link.itemId = i;
}

// setting first item as active
links[activeLink].classList.add("active");

function setClickedItem(e) {
  removeActiveLinks();

  // stop timedSlider and start a timed slider here
  // clearInterval(initialTimedSlider);

  // if(secondaryTimedSlider) {
  //   clearInterval(secondaryTimedSlider);
  // }

  var clickedLink = e.target;
  // console.log("link selected");
  activeLink = clickedLink.itemId;

  changePosition(clickedLink);
}

function removeActiveLinks() {
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }
}

function changePosition(link) {
  link.classList.add('active');

  var position = link.getAttribute("data-pos");
  $('.slider-wrapper').css('left', position);

  // var secondaryTimedSlider = setInterval(function(){ changeSlide() }, 4000);
}

var initialTimedSlider = setInterval(function(){ changeSlide() }, 4000);


function changeSlide() {
  console.log('initial slider fired')
  if(activeLink < links.length -1) {
    activeLink++;
  } else {
    activeLink = 0;
  }

  removeActiveLinks();

  link = links[activeLink];
  console.log(links);
  console.log(activeLink);
  console.log(link);
  var position = link.getAttribute('data-pos');

  $('.slider-wrapper').css('left', position);
}

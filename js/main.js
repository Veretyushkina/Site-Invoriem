$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 2,
                margin: 32,
            },
            601: {
                items: 3,
                margin: 32,
            },
            1001: {
                items: 3,
                margin: 48,
            }
        }
    });
  });

  const videoBtn = document.querySelector('#video-btn');
  const videoPicture = document.querySelector('.video__picture');
  const videoWrapper = document.querySelector('.video');
  const video = document.querySelector('#video-file');

  videoBtn.addEventListener('click', function (){
        videoPicture.classList.add('hidden');
        videoWrapper.classList.remove('video-overlay');
        videoBtn.classList.add('hidden');

        if (video.paused) {
            video.play()
        }
  })

  video.addEventListener('click', function () {
    if (video.paused) {
        video.play()
    } else {
        videoWrapper.classList.add('video-overlay');
        videoBtn.classList.remove('hidden');
        video.pause();
    }
  })
  
  /*mobile nav*/
  const openNavbtn = document.querySelector('#openMobileNav');
  const closeNavbtn = document.querySelector('#closeMobileNav');
  const mobileNav = document.querySelector('#mobileNav');

  openNavbtn.onclick = function(){
    mobileNav.classList.remove('none')
    document.body.classList.add('no-scroll')
  }

  closeNavbtn.onclick = function(){
    mobileNav.classList.add('none')
    document.body.classList.remove('no-scroll')
  }

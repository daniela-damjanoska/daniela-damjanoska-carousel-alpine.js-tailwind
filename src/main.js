let touchstartX = 0;
let touchendX = 0;

function carouselData(slides) {
    return {
      slides,
      activeSlide: 1,
      initHandleSwipe() {
        const slider = document.getElementById('slider');

        // slider.addEventListener('mouseup', e => {
        //   touchendX = e.clientY
        // })
        // slider.addEventListener('mousedown', e => {
        //   touchstartX = e.clientY
        //   if (touchendX > touchstartX) {
        //     this.activeSlide =
        //     this.activeSlide === 1 ? this.slides.length : this.activeSlide - 1;
           
        //   }
        //   if (touchendX < touchstartX) {
        //     this.activeSlide =
        //     this.activeSlide === this.slides.length ? 1 : this.activeSlide + 1;
        //   }
        // })
        slider.addEventListener('touchstart', e => {
          touchstartX = e.changedTouches[0].screenX
        })
        slider.addEventListener('touchend', e => {
          touchendX = e.changedTouches[0].screenX
          if (touchendX < touchstartX) {
            this.activeSlide =
            this.activeSlide === 1 ? this.slides.length : this.activeSlide - 1;
           
          }
          if (touchendX > touchstartX) {
            this.activeSlide =
            this.activeSlide === this.slides.length ? 1 : this.activeSlide + 1;
          }
        })
      },
      goToPrevious() {
        this.activeSlide =
        this.activeSlide === 1 ? this.slides.length : this.activeSlide - 1;
      },
      goToNext() {
        this.activeSlide =
        this.activeSlide === this.slides.length ? 1 : this.activeSlide + 1;
      } 
    };
  }

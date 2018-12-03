!function () {
  var view = View('#mySlides')
  var controller = {
      view: null,
      swiper: null,
      swiperOptions: {
          autoplay: true,
          touchRatio: 1,
          loop: true,
          slidesPerView: 5,
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
          slidesPerView: 'auto',
          coverflow: {
              rotate: 0,// 旋转的角度
              stretch: 100,// 拉伸   图片间左右的间距和密集度
              depth: 50,// 深度   切换图片间上下的间距和密集度
              modifier: 3,// 修正值 该值越大前面的效果越明显
              slideShadows: false// 页面阴影效果
          },
      },

          bindEvents: () => {


          },


          init: function (view) {
              this.view = view
              this.initSwiper()
              this.bindEvents()

          },
          initSwiper: function () {
              this.swiper = new Swiper(
                  this.view.querySelector('.swiper-container'),
                  this.swiperOptions
              )


          }
      }

      controller.init(view)

}.
  call()

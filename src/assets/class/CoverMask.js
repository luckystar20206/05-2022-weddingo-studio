import { gsap } from 'gsap'


class CoverMask {
  constructor() {
    this.bind()
  }

  init(view) {
    this.cover =view.querySelector('.js-cover');


    this.cover.addEventListener('mouseleave', ()=>{
      gsap.set(this.cover.firstElementChild, { clipPath: 'circle(18vw at 69vw 45.0109vh);' })
    })


    this.cover.addEventListener('mousemove', (e)=>{
      this.mouse.x = e.pageX
      this.mouse.y = e.pageY
      gsap.set(this.cover.firstElementChild, { clipPath: 'circle(18vw at ' +  this.mouse.x + 'px ' + this.mouse.y + 'px)' })
    })

    this.mouse = {
      x : window.innerWidth * 70 / 100,
      y : this.cover.clientHeight / 2
    }
  }

  update() {

  }

  bind() {

  }
}

const _instance = new CoverMask()
export default _instance

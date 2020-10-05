import string from './css.js'
let n = 1
let time = 100

const run = () => {

  if (n <= string.length) {
    console.log(`${n}:${string.substring(0, n)}`)
    demo.innerHTML = string.substring(0, n)
    demo2.innerText = string.substring(0, n)
    demo2.scrollTop = demo2.scrollHeight
    n++
  } else {
    window.clearInterval(id)
    return
  }
}

const play = () => setInterval(run, time)
const pause = () => { return window.clearInterval(id) }

let id = play()

// 如何分析一段话，再恰当的时候输出来
btnPause.onclick = () => {
  pause()

}
btnPlay.onclick = () => {
  id = play()
}
btnSlow.onclik = () => {
  window.clearInterval(id)
  time = 300
  id = play()
}
btnNormal.onclick = () => {
  pause()
  time = 100
  id = play()
}
btnFast.onclick = () => {
  pause()
  time = 0
  id = play()
}
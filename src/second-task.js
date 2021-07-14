(function (){
  document.addEventListener('DOMContentLoaded',function () {
    let div = document.createElement('div')
    let input = document.createElement('input')
    let h2 = document.createElement('h2')
    div.append(input)
    div.append(h2)

    input.addEventListener('input',function () {
      stopTimer()
      startTimer()
    })

    function startTimer() {
      window.setTimeout(changeHead, 5000);
    }

    function changeHead() {
      h2.textContent = input.value
      stopTimer()
    }

    function stopTimer() {
      clearTimeout()
    }

    document.body.append(div)
  })
})()

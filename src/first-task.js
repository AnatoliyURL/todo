(function (){
  document.addEventListener('DOMContentLoaded',function () {
    let timeInput = document.getElementById('time_block__input-value')
    let resetButton = document.getElementById('time_block__btn')
    let counter = document.getElementById('time_block__time-value')
    let time = counter.innerText = timeInput.value

    timeInput.addEventListener('input',function () {
      time = timeInput.value
    })

    resetButton.addEventListener('click', function () {
      stopTimer()
      counter.innerText = timeInput.value
      startTimer()
    })

    function startTimer() {
      window.setInterval(changeTime, 1000);
    }

    function changeTime() {
      time === 0 ? stopTimer() : counter.innerText = --time
    }

    function stopTimer() {
      clearInterval()
    }

  })
})()

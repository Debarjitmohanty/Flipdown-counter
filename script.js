function updateClock(deadline) {
    const now = new Date();
    const timeDiff = deadline - now;
  
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
    document.querySelector('.days .flip-card .front').textContent = padNumber(days);
    document.querySelector('.hours .flip-card .front').textContent = padNumber(hours);
    document.querySelector('.minutes .flip-card .front').textContent = padNumber(minutes);
    document.querySelector('.seconds .flip-card .front').textContent = padNumber(seconds);
  
    setTimeout(updateClock, 1000, deadline);
  }
  
  function padNumber(num) {
    return num.toString().padStart(2, '0');
  }
  
  const deadline = new Date("feb 20, 2024 10:00:00").getTime();
  updateClock(deadline);
  

  let d=123456;
  console.log(d)
class CountdownTimer {
  constructor({ targetDate }) {
    this.targetDate = targetDate;
    this.refs = {
      conteiner: document.querySelector('#timer-1'),
      deis: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
    };
  }

  calculateData(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
  }

  textContent({ days, hours, mins, secs }) {
    this.refs.deis.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
  }

  start() {
    const setId = setInterval(() => {
      const curentData = Date.now();
      const differenceData = this.targetDate - curentData;
      const timeObject = this.calculateData(differenceData);
      if (differenceData < 0) {
        clearInterval(setId);
        this.refs.deis.textContent = '00';
        this.refs.hours.textContent = '00';
        this.refs.mins.textContent = '00';
        this.refs.secs.textContent = '00';
        return;
      }
      this.textContent(timeObject);
    }, 1000);
  }
}

const start = new CountdownTimer({
  targetDate: new Date('jun 25, 2021'),
});

start.start();

class Clock {
  constructor(container) {
    this.container = container;
  }
  init() {
    setInterval(() => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes();
      const s = now.getSeconds();
      var midday;
      if (h < 12) {
        midday = "AM";
      } else {
        midday = "PM";
      }
      var day = now.getDay();
      if (day === 0) {
        day = "Sunday";
      } else if (day === 1) {
        day = "Monday";
      } else if (day === 2) {
        day = "Tuesday";
      } else if (day === 3) {
        day = "Wednesday";
      } else if (day === 4) {
        day = "Thursday";
      } else if (day === 5) {
        day = "Friday";
      } else if (day === 6) {
        day = "Saturday";
      }
      var date = now.getDate();
      var month = now.getMonth();

      if (month === 0) {
        month = "January";
      } else if (month === 1) {
        month = "Febuary";
      } else if (month === 2) {
        month = "March";
      } else if (month === 3) {
        month = "April";
      } else if (month === 4) {
        month = "May";
      } else if (month === 5) {
        month = "June";
      } else if (month === 6) {
        month = "July";
      } else if (month === 7) {
        month = "August";
      } else if (month === 8) {
        month = "September";
      } else if (month === 9) {
        month = "October";
      } else if (month === 10) {
        month = "November";
      } else if (month === 11) {
        month = "December";
      }

      var suffix = "th";
      if (date === 1 || date === 21 || date === 31) {
        suffix = "st";
      } else if (date === 2 || date === 22) {
        suffix = "nd";
      } else if (date === 3 || date === 23) {
        suffix = "rd";
      }

      const html = `
          <h2> <span>${h}</span> <span class="col">:</span> <span>${m}</span> <span class="col">:</span> <span>${s}</span> &nbsp&nbsp&nbsp&nbsp <span>${midday}</span> </h2>
        <h3 class="date">${day}, ${date}${suffix} ${month}</h3>
         
      `;

      this.container.innerHTML = html;
    }, 1000);
  }
}

const clock = new Clock(document.querySelector(".clock"));
clock.init();

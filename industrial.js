const disasters = [
  { date: "1977-03-10", title: "Oil Tanker Leak in Paradeep", link: "https://www.downtoearth.org.in/news/oil-leak-at-paradeep-threatens-marine-life-1977",
    severity: "high"
  },
  { date: "1994-11-15", title: "Chemical Plant Explosion", link: "https://www.indiatoday.in/magazine/indiascope/story/19941115-toxic-explosion-in-chemical-plant-leaves-many-injured-805659-1994-11-15", severity: "high" },
  { date: "2002-06-28", title: "Gas Leak in Angul", link: "https://www.thehindu.com/news/national/other-states/gas-leak-odisha/article65883862.ece", severity: "medium" },
  { date: "2018-12-05", title: "Blast at Metal Factory", link: "https://www.ndtv.com/india-news/odisha-plant-blast-7-workers-injured-in-explosion-at-steel-plant-in-odisha-1958152", severity: "medium" },
  { date: "2024-01-10", title: "Fire in Fertilizer Unit", link: "https://www.business-standard.com/article/current-affairs/fire-breaks-out-at-odisha-fertilizer-plant-no-casualty-reported-124011000111_1.html", severity: "low" },
];

function populateDisasters() {
  const list = document.getElementById('disasterList');
  const filter = document.getElementById('filterSelect');
  const stats = document.getElementById('stats');
  list.innerHTML = "";

  // Add year options
  let years = [...new Set(disasters.map(d => d.date.split('-')[0]))];
  years.sort().forEach(year => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    filter.appendChild(option);
  });

  filter.onchange = () => renderList(filter.value);
  renderList('all');
}

function renderList(year) {
  const list = document.getElementById('disasterList');
  const stats = document.getElementById('stats');
  list.innerHTML = "";

  const filtered = year === 'all' ? disasters : disasters.filter(d => d.date.startsWith(year));

  let count = { high: 0, medium: 0, low: 0 };

  filtered.forEach(disaster => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${disaster.date}:</strong> <a href="${disaster.link}" target="_blank" style="color: ${
      disaster.severity === 'high' ? 'red' : disaster.severity === 'medium' ? 'yellow' : 'lightgreen'
    }">${disaster.title}</a>`;
    list.appendChild(li);
    count[disaster.severity]++;
  });

  stats.innerHTML = `
    <br><strong>Total Incidents:</strong> ${filtered.length}<br>
    High: ${count.high} | Medium: ${count.medium} | Low: ${count.low}
  `;
}

function runSafetyCheck() {
  const percent = Math.floor(Math.random() * 101);
  const label = percent > 75 ? "Safe" : percent > 40 ? "Moderate" : "Critical";

  document.getElementById('safetyPercent').textContent = `${percent}%`;
  document.getElementById('safetyLabel').textContent = label;

  const circle = document.getElementById('circle');
  circle.style.borderColor = label === "Safe" ? "limegreen" : label === "Moderate" ? "yellow" : "red";

  const sound = document.getElementById("alarmSound");
  sound.play();
}

function updateClock() {
  const now = new Date();
  const dateTimeStr = now.toLocaleString();
  document.getElementById("datetime").textContent = `Current Time: ${dateTimeStr}`;
}

setInterval(updateClock, 1000);
window.onload = () => {
  updateClock();
  populateDisasters();
};

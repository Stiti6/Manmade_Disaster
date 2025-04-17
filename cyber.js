// Display current date and time
function updateTime() {
    const now = new Date();
    const datetime = now.toLocaleString();
    document.getElementById('datetime').textContent = `Current Time: ${datetime}`;
  }
  setInterval(updateTime, 1000);
  
  // Simulate a cyber safety check
  function checkSafety() {
    const status = document.getElementById('status-message');
    
    const random = Math.random();
    if (random < 0.3) {
      status.textContent = "⚠️ Cyber Attack Detected! Immediate action required!";
      status.style.color = "red";
      alert("⚠️ Alert! Suspicious activity found on your device!");
    } else {
      status.textContent = "✅ Your system appears to be safe.";
      status.style.color = "lightgreen";
    }
  }
  
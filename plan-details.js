const plans = {
  "4gb": {
    name: "4 GB RAM Plan",
    features: [
      "Up to 20 Players",
      "1 Server Slot",
      "Basic Support",
      "Fast SSD Storage",
      "99.9% Uptime",
      "DDoS Protection"
    ]
  },
  "8gb": {
    name: "8 GB RAM Plan",
    features: [
      "Up to 40 Players",
      "2 Server Slots",
      "Priority Support",
      "SSD Storage",
      "Modpack Ready",
      "Daily Backups"
    ]
  },
  "12gb": {
    name: "12 GB RAM Plan",
    features: [
      "Unlimited Players",
      "Free Subdomain",
      "Advanced Support",
      "Full Plugin Access",
      "Modpack + Vanilla Ready",
      "Daily Auto-Backups"
    ]
  },
  "16gb": {
    name: "16 GB RAM Plan",
    features: [
      "Unlimited Players",
      "24/7 Uptime Guarantee",
      "Premium Support",
      "Auto Modpack Installs",
      "Server Console Access",
      "Daily Backups + Restore"
    ]
  },
  "32gb": {
    name: "32 GB RAM Plan",
    features: [
      "Max Performance",
      "All Features Included",
      "Unlimited Everything",
      "High-Priority Support",
      "Dedicated Resources",
      "Free Migration"
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const planKey = params.get("plan");

if (plans[planKey]) {
  document.getElementById("plan-name").textContent = plans[planKey].name;
  const list = document.getElementById("plan-features");
  plans[planKey].features.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    list.appendChild(li);
  });
} else {
  document.getElementById("plan-name").textContent = "Plan Not Found";
  document.getElementById("plan-features").innerHTML = "<li>Please return to the homepage and select a valid plan.</li>";
}

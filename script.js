document.addEventListener("DOMContentLoaded", function () {
  console.log("Events Page Loaded");

  // Event Popup Data
  const eventData = {
    hackathon: {
      title: "🚀 Hackathon 2025",
      description: "Innovate, compete, and win big prizes!",
      date: "March 10, 2025",
      location: "SRM Auditorium",
    },
    "ai-workshop": {
      title: "🤖 AI & Machine Learning Workshop",
      description: "Learn AI from industry experts!",
      date: "March 15, 2025",
      location: "Innovation Lab, Block C",
    },
    "startup-fair": {
      title: "💡 Startup Connect",
      description: "Network with investors and pitch ideas.",
      date: "March 20, 2025",
      location: "Startup Incubation Center",
    },
  };

  // Open Popup
  window.openPopup = function (eventKey) {
    document.getElementById("popup-title").innerText =
      eventData[eventKey].title;
    document.getElementById("popup-description").innerText =
      eventData[eventKey].description;
    document.getElementById("popup-date").innerText = eventData[eventKey].date;
    document.getElementById("popup-location").innerText =
      eventData[eventKey].location;
    document.getElementById("event-popup").style.display = "flex";
  };

  // Close Popup
  window.closePopup = function () {
    document.getElementById("event-popup").style.display = "none";
  };
});

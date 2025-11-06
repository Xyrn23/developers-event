const items = [
  { start: "08:30 AM", end: "09:30 AM", title: "Keynote: AI-Driven Cloud Infrastructure" },
  { start: "09:45 AM", end: "11:00 AM", title: "Deep Dives: Kubernetes, Data Analytics, Security" },
  { start: "11:15 AM", end: "12:30 PM", title: "Product Demos & Networking" },
  { start: "12:30 PM", end: "01:30 PM", title: "Lunch" },
  { start: "01:30 PM", end: "03:00 PM", title: "Workshops: Scaling with GCP" },
  { start: "03:15 PM", end: "04:30 PM", title: "Fireside Chat: The Future of Enterprise Cloud" }
];

const jsonString = JSON.stringify(items);
console.log(jsonString);

// Define the data
const data = [
  {
    city: "London",
    uvIndex: 5,
    whiteBurners: "high",
    whiteTanners: "medium",
    naturallyBrown: "low",
    naturallyBlack: "no risk"
  },
  {
    city: "Manchester",
    uvIndex: 6,
    whiteBurners: "high",
    whiteTanners: "medium",
    naturallyBrown: "medium",
    naturallyBlack: "low"
  },
  {
    city: "Birmingham",
    uvIndex: 6,
    whiteBurners: "high",
    whiteTanners: "medium",
    naturallyBrown: "medium",
    naturallyBlack: "low"
  },
  {
    city: "Leeds",
    uvIndex: 6,
    whiteBurners: "high",
    whiteTanners: "medium",
    naturallyBrown: "medium",
    naturallyBlack: "low"
  },
  {
    city: "Glasgow",
    uvIndex: 6,
    whiteBurners: "high",
    whiteTanners: "medium",
    naturallyBrown: "medium",
    naturallyBlack: "low"
  },
  {
    city: "Southampton",
    uvIndex: 7,
    whiteBurners: "very high",
    whiteTanners: "high",
    naturallyBrown: "medium",
    naturallyBlack: "medium"
  },
  {
    city: "Liverpool",
    uvIndex: 7,
    whiteBurners: "very high",
    whiteTanners: "high",
    naturallyBrown: "medium",
    naturallyBlack: "medium"
  },
  {
    city: "Newcastle",
    uvIndex: 7,
    whiteBurners: "very high",
    whiteTanners: "high",
    naturallyBrown: "medium",
    naturallyBlack: "medium"
  },
  {
    city: "Nottingham",
    uvIndex: 5,
    whiteBurners: "high",
    whiteTanners: "medium",
    naturallyBrown: "low",
    naturallyBlack: "no risk"
  },
  {
    city: "Sheffield",
    uvIndex: 5,
    whiteBurners: "high",
    whiteTanners: "medium",
    naturallyBrown: "low",
    naturallyBlack: "no risk"
  },
  // ... rest of the cities ...
];

// Set up the canvas
function setup() {
  createCanvas(1200, 600);
  background(255);

  // Calculate the maximum UV index
  const maxUVIndex = Math.max(...data.map(item => item.uvIndex));

  // Define the colors for each risk level
  const riskColors = {
    "no risk": color(0, 255, 0),
    low: color(0, 255, 0),
    medium: color(255, 255, 0),
    high: color(255, 165, 0),
    "very high": color(255, 0, 0)
  };

  // Set up the bar chart
  const barWidth = (width - 200) / data.length;
  const chartHeight = height - 100;
  const chartY = height - chartHeight;

  // Draw the label above the key element
  textAlign(CENTER);
  textSize(16);
  fill(0);
  text("Risk on Skin Type", width / 2, chartY - 40);

  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    // Calculate the bar height based on the UV index
    const barHeight = map(item.uvIndex, 0, maxUVIndex, 0, chartHeight);

    // Draw the bar
    fill(riskColors[item.whiteBurners]);
    rect(i * barWidth, chartY + (chartHeight - barHeight), barWidth, barHeight);

    // Draw the city label
    textAlign(CENTER);
    textSize(12);
    fill(0);
    text(item.city, (i + 0.5) * barWidth, height - 30);
  }

  // Draw the risk legend
  let legendX = width - 150;
  let legendY = chartY;

  for (const riskLevel in riskColors) {
    const colorValue = riskColors[riskLevel];

    fill(colorValue);
    rect(legendX, legendY, 20, 20);

    fill(0);
    textAlign(LEFT, CENTER);
    textSize(12);
    text(riskLevel, legendX + 30, legendY + 10);

    legendY += 30;
  }
}

// Render the chart
function draw() {
  // No animation required, so draw() is empty
}

// Run the setup and draw functions
setup();
draw();

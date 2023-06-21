let qualificationDistance = 200;
let attempts = [120, 150, 160, 201, 203, 180, 202];
let qualified = false;
let averageBest = 0;

attempts.sort((a, b) => b - a);

// Get the best three attempts and calculate their average
let bestThree = attempts.slice(0, 3);
averageBest = bestThree.reduce((sum, value) => sum + value, 0) / 3;

// Check if the athlete has qualified
if (averageBest >= qualificationDistance) {
  qualified = true;
} else {
  qualified = false;
}
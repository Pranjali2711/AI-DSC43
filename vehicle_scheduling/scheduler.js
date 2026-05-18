const vehicles = [
  {
    TaskID: "1",
    Duration: 1,
    Impact: 5,
  },
  {
    TaskID: "2",
    Duration: 6,
    Impact: 2,
  },
  {
    TaskID: "3",
    Duration: 5,
    Impact: 9,
  },
  {
    TaskID: "4",
    Duration: 6,
    Impact: 10,
  },
];

const mechanicHours = 10;

function knapsack(tasks, capacity) {
  const n = tasks.length;

  const dp = Array(n + 1)
    .fill()
    .map(() =>
      Array(capacity + 1).fill(0)
    );

  for (let i = 1; i <= n; i++) {
    const duration =
      tasks[i - 1].Duration;

    const impact =
      tasks[i - 1].Impact;

    for (let w = 0; w <= capacity; w++) {
      if (duration <= w) {
        dp[i][w] = Math.max(
          impact +
            dp[i - 1][w - duration],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

const result = knapsack(
  vehicles,
  mechanicHours
);

console.log(
  "Maximum Operational Impact:",
  result
);
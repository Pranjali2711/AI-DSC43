const {
  Log,
} = require("../logging_middleware/logger");

const notifications = [
  {
    Type: "Placement",
    Message: "Google Hiring",
  },
  {
    Type: "Result",
    Message: "Mid Sem Result",
  },
  {
    Type: "Event",
    Message: "Tech Fest",
  },
];

const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

notifications.sort((a, b) => {
  return (
    weights[b.Type] -
    weights[a.Type]
  );
});

Log(
  "backend",
  "info",
  "service",
  JSON.stringify(
    notifications,
    null,
    2
  )
);
function matchWinner(teamAGoals, teamBGoals) {
  // Write your code here…
  if (typeof teamAGoals === "number" && typeof teamBGoals === "number") {
    if (teamAGoals > teamBGoals) {
      return "Team A Won";
    } else if (teamAGoals < teamBGoals) {
      return "Team B Won";
    } else if (teamAGoals == teamBGoals) {
      return "Draw";
    }
  } else {
    return "Invalid";
  }
}

let result = matchWinner(2, 1);
console.log(result);
result = matchWinner(1, 3);
console.log(result);
result = matchWinner(2, 2);
console.log(result);
result = matchWinner("helo", 2);
console.log(result);
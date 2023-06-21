let usersByDay =[812, 1360, 657, 1247, 165];
console.log(usersByDay);

for (let i = 0; i <= usersByDay.length - 2; i++) {
  let minValue = usersByDay[i];

  for (let j = i + 1; j <= usersByDay.length - 1; j++) {
    if (usersByDay[j] < minValue) {
      minValue = usersByDay[j];
      let swap = usersByDay[i];
      usersByDay[i] = minValue;
      usersByDay[j] = swap;
    }
  }
}
console.log(usersByDay);
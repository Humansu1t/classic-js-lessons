let calculateMiles = function (distance, isBusinessClass) {
    let percent = 0.18;
    if (isBusinessClass) {
      percent += 0.04;
    }
    if (distance > 3500) {
      percent += 0.15;
    }
    return distance * percent;
  };
  
  let calculateFlights = function (distance, isBusinessClass, milesTarget) {
    let miles = calculateMiles(distance, isBusinessClass);
    let flights = Math.ceil(milesTarget / miles);
    return flights;
  };
  
  // Добавляйте массив и цикл сюда
  let targets = [3000, 7500, 15000];
  for (let i = 0; i < targets.length; i++) {
    let flightsVariantFirst = calculateFlights(3118, true, targets[i]);
    let flightsVariantSecond = calculateFlights(3617, false, targets[i]);
    
    console.log('Необходимое количество полётов в бизнес-классе до Валенсии: ' + flightsVariantFirst);
    console.log('Необходимое количество полётов в экономе до Лиссабона: ' + flightsVariantSecond);
    
    if (flightsVariantFirst > flightsVariantSecond) {
      console.log('Быстрей накопишь полётами в экономе до Лиссабона! Количество полётов: ' + flightsVariantSecond);
    } else {
      console.log('Быстрей накопишь полётами в бизнесе до Валенсии! Количество полётов: ' + flightsVariantFirst);
    }
  }
  
  
  
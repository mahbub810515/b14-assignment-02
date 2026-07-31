let elevatorWeightSafetyChecker='';
function isElevatorSafe(weights) {
  // Write your code here
  if(Array.isArray(weights)){
    let totalWeight=0;
    for(let weight of weights){  
        totalWeight+=weight;
    }
    if(totalWeight<=400){
        return true;
    }else{
        return false;
    }
  }else{
    return "Invalid";
  }
}

let result= isElevatorSafe([60, 75, 50]);
console.log(result)
result= isElevatorSafe([90, 100, 95, 120]);
console.log(result)
result= isElevatorSafe([400]);
console.log(result)
result= isElevatorSafe("60,75,50");
console.log(result)
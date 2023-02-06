function distanceFromHqInBlocks(number) {
    if (number >= 42) {
      return number - 42
    }
    else {
      return 42 - number
    }
}
  console.log(distanceFromHqInBlocks(50))
  
  
function distanceFromHqInFeet(number) {
    distanceFromHqInBlocks(number)
      if (number >= 42) {
      return (number - 42) *264
    }
    else {
      return (42 - number) *264
    } 
}
console.log(distanceFromHqInFeet(50))

function distanceTravelledInFeet(start, destination){
    
    if (destination>start){
        return (destination - start)*264
    }
    else{
        return (start-destination)*264
    }
}
function calculatesFarePrice(start, destination){
    distanceTravelledInFeet(start, destination)
       
    if ((start-destination || destination-start)*264 <= 400){
            return 0
        }
        else if(400<((start-destination || destination-start)*264)<=2000){
            return (((start-destination || destination-start)*264)* 0.02)-8
        }
        else if(2000<((start-destination || destination-start)*264)<=2500){
            return 25
        }
        else{
            return 'cannot travel that far'
        }
     }


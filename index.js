class Driver {
  constructor (name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
    }

  yearsExperienceFromBeginningOf (year) {
    return new Date(year) - this.startDate.getFullYear()
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled () {
    let verDist;
    let horDist;
    let totalDist;
    let horDistOne;
    let horDistTwo;
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    if (this.beginningLocation.vertical > this.endingLocation.vertical) {
    verDist = this.beginningLocation.vertical - this.endingLocation.vertical
  } else {
    verDist = this.endingLocation.vertical - this.beginningLocation.vertical
  }
    for (let i = 0; i < eastWest.length; i++) {
      if (this.beginningLocation.horizontal === eastWest[i]) {
         horDistOne = i
      }
    }
    for (let j = 0; j < eastWest.length; j++) {
      if (this.endingLocation.horizontal === eastWest[j]) {
         horDistTwo = j
      }
    }
    if (horDistOne > horDistTwo) {
      horDist = horDistOne - horDistTwo
    } else {
      horDist = horDistTwo - horDistOne
    }
    return totalDist = verDist + horDist

  }

  estimatedTime (peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
    return this.blocksTravelled() / 3
  }
  }
}

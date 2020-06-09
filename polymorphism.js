// why would I use polymorphism for this? non polymorphism solution here:
// class CountryMinimumAgeChecker{
//   constructor(countryName, drivingAge, votingAge, drinkingAge) {
//       this.countryName = countryName
//       this.drivingAge = drivingAge
//       this.votingAge = votingAge
//       this.drinkingAge = drinkingAge
//   }
//   isOfDrivingAge(value){
//     return value >= this.drivingAge
//   }
//   isOfVotingAge(value){
//     return value >= this.votingAge
//   }
//   isOfDrinkingAge(value){
//     return value >= this.drinkingAge
//   }
// }

// usaChecker = new CountryMinimumAgeChecker("USA", 16, 18, 21)
// canadaChecker = new CountryMinimumAgeChecker("Canada", 16, 18, 19)
// franceChecker = new CountryMinimumAgeChecker("France", 15, 18, 18)

// silly long polymorphism solution here:
class CountryMinimumAgeChecker{
  constructor(countryName, drivingAge, votingAge, drinkingAge) {
      this.countryName = countryName
      this.drivingAge = drivingAge
      this.votingAge = votingAge
      this.drinkingAge = drinkingAge
  }
  isOfDrivingAge(value){
    return value >= this.drivingAge
  }
  isOfVotingAge(value){
    return value >= this.votingAge
  }
  isOfDrinkingAge(value){
    return value >= this.drinkingAge
  }
}
class USAChecker extends CountryMinimumAgeChecker{
    constructor(drivingAge, votingAge, drinkingAge) {
        super("USA", drivingAge, votingAge, drinkingAge)
    }
}
class CanadaChecker extends CountryMinimumAgeChecker{
    constructor(drivingAge, votingAge, drinkingAge) {
        super("Canada", drivingAge, votingAge, drinkingAge)
    }
}
class FranceChecker extends CountryMinimumAgeChecker{
    constructor(drivingAge, votingAge, drinkingAge) {
        super("France", drivingAge, votingAge, drinkingAge)
    }
}

usaChecker = new USAChecker("USA", 16, 18, 21)
canadaChecker = new CanadaChecker("Canada", 16, 18, 19)
franceChecker = new FranceChecker("France", 15, 18, 18)

checkerArray = [usaChecker, canadaChecker, franceChecker]

function checkAge(person) {
    console.log(`Age: ${person.age}`)
    for (const checker of checkerArray) {
        console.log(`${person.name} can drive in ${checker.countryName}: ${checker.isOfDrivingAge(person.age)}`)
        console.log(`${person.name} can vote in ${checker.countryName}: ${checker.isOfVotingAge(person.age)}`)
        console.log(`${person.name} can drink in ${checker.countryName}: ${checker.isOfDrinkingAge(person.age)}`)
    }
}

dude = {name: "Lebowski", age: 40}
kid = {name: "Charlie", age: 12}
teen = {name: "Sandy", age: 17}
collegeStudent = {name: "Chad", age: 21}

personArray = [dude, kid, teen, collegeStudent]

function checkAges(arrayOfPeople) {
    for (const person of arrayOfPeople) {
        checkAge(person)
    }
}

checkAges(personArray)
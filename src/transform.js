//1) JS file should exist, and exported value should be a function
//2) an empty array results in an empty object
//3) filters out people under the age of 18
//4) only contains non-empty groups
//5) groups array of people by age


let result = {}

const groupAdultsByAgeRange = function (people) {
    if (people.length === 0) { return result }
    const under18 = people.filter(x => x.age >= 18)
    if (under18.length === 0) { return result }
    const firstGroup = people.filter(y => y.age <= 20 && y.age >= 18)
    const secondGroup = people.filter(z => z.age > 20 && z.age <= 30)
    const thirdGroup = people.filter(k => k.age > 30 && k.age <= 40)
    const forthGroup = people.filter(l => l.age > 40 && l.age <= 50)
    const fifthGroup = people.filter(m => m.age > 50)
    if (firstGroup.length > 0) { result["20 and younger"] = firstGroup }
    if (secondGroup.length > 0) { result["21-30"] = secondGroup }
    if (thirdGroup.length > 0) { result["31-40"] = thirdGroup }
    if (forthGroup.length > 0) { result["41-50"] = forthGroup }
    if (fifthGroup.length > 0) { result["51 and older"] = fifthGroup }

    return result;



}


module.exports = { groupAdultsByAgeRange }
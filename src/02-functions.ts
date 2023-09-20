import {Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

// Function that increments the age of all friends in array
function allOlder(friends: Friend[]) : string[] {
    // Define new, empty array
    const newAge: string[] = [];
    //Loop through all friends in array
    friends.forEach((friend) => {
        // Increment the age
        friend.age += 1
        // Push to new array
        newAge.push(`${friend.name} is now ${friend.age}`);
    });
    // Return new array
    return newAge;
}

console.log(older(friends[0]))
console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { //Inferred retun type
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

//function to add a colleague to colleague array.
function addColleague(
    colls: Colleague[],
    name: string,
    department: string,
    email: string,
): Colleague {
    const newColleague: Colleague = { //create new colleague
        name, department, contact: { email, 
            extension : highestExtension(colls).contact.extension + 1 //increment extension
        },
    };
    colls.push(newColleague); //push new colleague to array
    return newColleague;
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
    const sorted = colleagues.sort(sorter); //Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) =>
    ({ name: ce.name, email: ce.contact.email}));
    return result
}

console.log(sortColleagues(colleagues.current, (a,b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(colleagues.current, (a,b) => a.name.length - b.name.length));

//function to find friends
function findFriends(friends: Friend[], matchCriterion:(friend: Friend) => boolean): Friend[] {
    //intitialise empty matchingFriends array
    const criterionSatisfyingFriends: Friend[] = [];
    for (const friend of friends) {
        if (matchCriterion(friend)) {
            criterionSatisfyingFriends.push(friend);
        }
    }
    //return array of friends that match the criterion
    return criterionSatisfyingFriends;
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Ki'))); //altered invocation for updated friends names
console.log(findFriends(friends, (friend) => friend.age < 35));
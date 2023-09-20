import {Friend, Colleague } from './myTypes'
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
function highestExtension(cs: Colleague[]): Colleague {
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
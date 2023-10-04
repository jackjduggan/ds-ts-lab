import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, FriendPartial, EventPass, FCIntersection } from "./myTypes";

function updateFriend(friend: Friend, updates: FriendPartial ) : Friend {
  return { ...friend, ...updates}
}

console.log(updateFriend(friends[0], {
  phone: '08712345',
  dob: new Date("1998-10-22")
}))

function secureFindFriends(
    friends: Friend[],
    criteria: (f: Friend) => boolean
  ): SecureFriendContact[] {
    const matches = friends.filter(criteria);
    return matches.map((f) => {
      const secure: SecureFriendContact = {
        name: f.name,
        phone: f.phone,
      };
      return secure;
    });
  }
  let result = secureFindFriends(
      friends,
      (f: Friend) => f.age < 30
  )
  console.log(result)
  //result[0].phone = '08654321'


  function generateEventPass(colleague: Colleague): EventPass {
    const passCode = Math.round(Math.random() * (1000 - 1) + 1);
    return {
      name: colleague.name,
      department: colleague.department,
      passCode: passCode,
    };
  }
  console.log(generateEventPass(colleagues.current[0]));

  // Function that aims to find elements that exist in both the 'friends' and 'colleagues' arrays.
  function intersection(friends: Friend[], colleagues: Colleague[]): FCIntersection[] {
    let result: FCIntersection[] = [];
    friends.reduce((res, friend) => { //iterates over the array
      const colleague = colleagues.find((col) => col.name === friend.name);
      if (colleague) {
        // Colleague is also a Friend
        res.push({
            name: friend.name,
            age: friend.age,
            department: colleague.department,
            phone: friend.phone,
            contact: {
                email: colleague.contact.email,
                extension: colleague.contact.extension
            }
        })
      }
      return res;
    }, result);
    return result;
  }
  
  console.log(intersection(friends, colleagues.current));
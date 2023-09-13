// (Optional) Change the names below to your friends.

import { Friend, Colleague, ColleagueHistory } from "./myTypes";

                // Added Friend Data Type Declaration
const friend1: Friend = {
    name: "Hasan Berk",
    phone: "087-12345",
    age: 25,
  };
                // Added Friend Data Type Declaration
  const friend2: Friend = {
    name: "Killian Halpin",
    phone: "086--12345",
    age: 31,
  };
 
  //   -------------------
  const colleague1: Colleague = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2: Colleague = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3: Colleague = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };

                    // Added Friend Data Type Declaration
  export const friends: Friend[] = [friend1, friend2];
  //console.log(friends[1]);

  export const colleagues: ColleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };
  
  //console.log(colleagues.current[0]);
export interface Friend {
    name: string;
    phone: string;
    dob? : Date; // New
    age: number
    interests? : string[] // New
}

export interface Colleague {
    name: string;
    department: string;
    contact: {
      email: string;
      extension: number
    } 
  }

export interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}

export interface EmailContact {
  name: string;
  email: string
}

export type Department = "Engineering" | "Finance" | "HR";
export interface ColleagueV2 {
  name: string;
  department: Department;    // *****
  contact: {
    email: string;
    extension: number;
    slack?: string;
  };
}

export type Buddy = Friend | ColleagueV2;
export type Administrator = Buddy | string | undefined

export type BuddyList = {
  name: string;
  administrator: Administrator;
  members: Buddy[];
};

// Utility types
export type FriendPartial = Partial<Friend>

// Type for gaining access to an event, e.g. concert
export type EventPass = Omit<Colleague, "contact"> & {
  passCode : number;
}

// Make person's properties immutable.
export type SecureFriendContact = Readonly<Pick<Friend,"name" | "phone" > >

// Type that combines the properties of both 'Friend' and 'Colleague'
export type FCIntersection = {
  name: string;
  age: number;
  department: string,
  phone: string,
  contact: {
    email: string;
    extension: number;
  };
}
// 3. **Repository Layer** (`repositories/`)
//    - Extract data access logic
//    - Abstract the in-memory storage
//    - Make it easy to swap to a real database later

import { User } from '../types/user.types';




// In-memory storage - 
let users: User[] = [
  { id: "user1", username: 'john_doe', email: 'john@example.com', name: 'John Doe', age: 30 },
  { id: "user2", username: 'jane_smith', email: 'jane@example.com', name: 'Jane Smith', age: 25 },
];
export class UserRepository {
  getAllUsers(): User[] {
    return users;
  }
    getUserById(id: string): User | undefined {
    return users.find(u => u.id === id);
  }
    createUser(user: User): User {
    users.push(user);
    return user;
  }
}







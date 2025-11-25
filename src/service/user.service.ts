// 4. **Service Layer** (`services/`)
//    - Extract business logic
//    - Implement duplicate checking

import { User } from '../types/user.types';
import { UserRepository } from '../repository/user_repository';
export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }
    getUserById(id: string): User | undefined {
    return this.userRepository.getUserById(id);
  }
    createUser(user: User): User | null {
    const existingUser = this.userRepository.getUserById(user.id);
    if (existingUser) {
      return null;
    }
    return this.userRepository.createUser(user);
  }
}




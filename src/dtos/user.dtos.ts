// 2. **DTOs** (Data Transfer Objects) (`dtos/`)
//    - Create DTOs for request/response
//    - Add validation schemas with zod
import { z } from 'zod';
import { User } from '../types/user.types';
export const CreateUserDTO = z.object({
    id: z.string().min(1, 'ID is required'),
    username: z.string().min(1, 'Username is required'),
    email: z.string().email('Invalid email address'),
    name: z.string().min(1, 'Name is required'),
    age: z.number().optional().nullable(),
});

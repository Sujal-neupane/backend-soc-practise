// 1. **Types/Interfaces** (`types/` or `models/`)
//    - Extract user type definition
//    - Create proper interfaces
export interface User {
    id: string;
    username: string;
    email: string;
    name: string;
    age?: number | null;
}

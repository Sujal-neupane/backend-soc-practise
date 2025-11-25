// 5. **Controller Layer** (`controllers/`)
//    - Extract route handlers
//    - Handle data validation
//    - Handle HTTP-specific logic
//    - Manage request/response
import { Request, Response } from 'express';
import { UserService } from '../service/user.service';
import { CreateUserDTO } from '../dtos/user.dtos';
import { z } from 'zod';


export class UserController {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  } 
  getUserById = (req: Request, res: Response) => {
    const id = req.params.id;
    const user = this.userService.getUserById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.json(user);
  };
  createUser = (req: Request, res: Response) => {
    const parseResult = CreateUserDTO.safeParse(req.body);
    try{
             const parsedBook= CreateUserDTO.safeParse(req.body);
        // auto validation
        if(!parsedBook.success){
            return res.status(400).json({errors: parsedBook.error});
        }
        const user = parsedBook.data;
    const createdUser = this.userService.createUser(user);
    if (!createdUser) {
      return res.status(409).json({ error: 'User with this ID already exists' });
    }
    }catch(error){
        return res.status(500).json({error: 'Internal Server Error'});
    }
    return res.status(201).json(CreateUserDTO);
  }
}

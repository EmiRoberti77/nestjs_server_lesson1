import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      firstName: 'Emi',
      lastName: 'Roberti',
      email: 'emi@emi.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Smith',
      email: 'emi@smith.com',
      role: 'INTERN',
    },
    {
      id: 3,
      firstName: 'Gavin',
      lastName: 'Shocks',
      email: 'emi@gavin.com',
      role: 'ENGINEER',
    },
    {
      id: 4,
      firstName: 'Mike',
      lastName: 'Sheredon',
      email: 'mike@sheredon.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      firstName: 'Paul',
      lastName: 'Hugs',
      email: 'pauk@hugs.com',
      role: 'ADMIN',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }
  findOne(id: number) {
    if (id) {
      return this.users.find((user) => user.id === id);
    }
    return this.users[0];
  }
}

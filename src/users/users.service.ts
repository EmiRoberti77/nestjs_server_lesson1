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

  create(user: {
    firstName: string;
    lastName: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    const usersByHighestId = [...this.users].sort((a, b) => (b.id = a.id));
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updateUser: {
      firstName?: string;
      lastName?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUser };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}

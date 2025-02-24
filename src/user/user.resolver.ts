import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  createUser(@Args('email') email: string, @Args('password') password: string, @Args('role') role: string): Promise<User> {
    const user = new User();
    user.email = email;
    user.password = password;
    user.role = role;
    return this.userService.create(user);
  }
}
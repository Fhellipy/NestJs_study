export abstract class UsersRepository {
  abstract create(name: string, userFunction: string): Promise<void>;
}

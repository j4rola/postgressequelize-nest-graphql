import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  userName: string;

  @Column
  passWord: string;

  @Column
  posts: string; 
  
}
import {
  AllowNull,
  Column,
  DataType,
  Unique,
  Default,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  BeforeUpdate,
  BeforeCreate,
  Validate,
  BeforeSave

} from "sequelize-typescript";
import bcrypt from "bcryptjs"

@Table({
  tableName: "users",
})
export class Users extends Model {
  @PrimaryKey
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  email!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  
  password!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  fullName!: string;

  @AllowNull(false)
  @Column(DataType.STRING)  
  profile!: string;


  @BeforeUpdate
  @BeforeCreate
  static async hashPassword(user: Users) {   
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

  }


  /* @BeforeSave
  static async hashPassword(instance: Users) {
    if (instance.changed('password')) { // Only hash if password has changed
      const salt = await bcrypt.genSalt(10);
      instance.password = await bcrypt.hash(instance.password, salt);
    }
  } */
}



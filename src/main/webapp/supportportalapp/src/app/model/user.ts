export class User{

  public  id: number | undefined;
  public  userId: string | undefined;
  public  firstName: string;
  public  lastName: string;
  public  username:string;
  public  email: string;
  public  profileImageUrl: string | undefined;
  public  logInDateDisplay: Date | undefined;
  public  joinDate: Date | undefined;
  public  role: string;
  public  authorities: [];
  public  active: boolean;
  public  notLocked: boolean;

  constructor() {
    this.firstName = '';
    this.lastName  = '';
    this.username  = '';
    this.email  = '';
    this.active = false;
    this.notLocked = false;
    this.role = '';
    this.authorities = [];
  }
}

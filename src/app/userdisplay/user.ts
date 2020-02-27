 export class user {
  public constructor(
    public user_id: number,
    public user_email: string,
    public password: string,
    public fname:string,
    public lname:string,
    public address:string,
    public city:string,
    public pincode:number,
    public mob_no:string,
    public gender:string,
    public img:string,
    public type: string
  ) {}
}

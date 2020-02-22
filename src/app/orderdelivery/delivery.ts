export class delivery
{
  constructor(
    public order_delivery_id:number,
    public fk_order_id:number,
    public dm_user_id:number,
    public comment:string,
    public delivery_status:string,
    public date:string,
    public dig_sign:string,
     public user_email: string,
    public fname: string,
    public lname: string,
    public address: string,
    public city: string,
    public pincode: number,
    public mob_no: string,
    public gender: string
  ){}
}

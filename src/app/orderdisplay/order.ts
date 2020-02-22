import { delivery } from '../orderdelivery/delivery';

export class orderdetails {
  public constructor(
    public order_details_id: number,
    public fk_order_id: number,
    public fk_pro_id: number,
    public sp_instruction: string,
    public order_id: number,
    public amount: number,
    public date: string,
    public deposite: number,
    public payment_method: number,
    public fk_user_id: number,
    public pro_name: string,
    public rent: number,
    public info: string,
    public size: string,
    public color: string,
    public user_email: string,
    public fname: string,
    public lname: string,
    public address: string,
    public city: string,
    public pincode: number,
    public mob_no: string,
    public gender: string,
    public deliverydata?:delivery,
  ) {}
}

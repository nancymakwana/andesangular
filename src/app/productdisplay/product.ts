export class product {
  constructor(
    public pro_id: number,
    public pro_name: string,
    public info: string,
    public size: string,
    public color: string,
    public rent: number,
    public soh: number,
    public sp_instruction: string,
    public fk_cat_id: number,
    public cat_name?: string,
    public pro_img_id?:number,
    public img1?:string,
    // public img2?:string,
    // public img3?:string,
  ) {}
}

import { IBirthday } from "./IBirthday";
export class ClassBirthday{
    public CelebrantName: string;
    public img: string;
    public Email: string;
    public Date: string;
    public Title: string;
    
    constructor(item: IBirthday){
        this.CelebrantName = item.CelebrantName;
        this.img = item.img;
        this.Email = item.Email;
        this.Date = item.Date;
        this.Title = item.Title;
       
    }
}
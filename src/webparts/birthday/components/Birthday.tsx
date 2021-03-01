import * as React from 'react';
import styles from './Birthday.module.scss';
import { IBirthdayProps } from './IBirthdayProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Carousel from 'nuka-carousel';
import * as jQuery from 'jquery';
import pnp from 'sp-pnp-js';
import { Web } from "sp-pnp-js";
import { ClassBirthday } from "./ClassBirthday";
import { IBirthday } from "./IBirthday";
import { sp } from "@pnp/sp";
import "@pnp/sp/sputilities";

export default class Birthday extends React.Component<IBirthdayProps, any> {
  public constructor(props:IBirthdayProps, any)
  {
      super(props);
      this.state={
          items:[]
      }
     
      // this._mailer = this._mailer.bind(this);
      }
 
  public render(): React.ReactElement<IBirthdayProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <div className={ styles.birthday }>
        <h4>Birthdays</h4>
       <Carousel>
       {
        this.state.items.map(function(item:IBirthday){
    return(
      <div className={styles.birthdays}>
      <div className={styles.circle}>
      <img src={item.img} />
      </div> 
      <h4>{item.CelebrantName}</h4>
      <h4>{item.Date}</h4>

      {/* {
       _mailer(){  
        if (this.state.items.Email) {  
          sp.utility.sendEmail({  
            Body: "Happy Birthday to You",  
            Subject: "Happy Birthday",  
            To: [this.state.items.Email],  
          }).then((i) => {  
              console.log("Message Sent Succesfully");
          }).catch((i) => {  
            console.log("Error Sending Message");
          });  
        }  
         }
      } */}
      <a href={"mailto:" + item.Email} className={styles.btn}>Wish Happy Birthday</a>
    </div> 
 )  
})

}
      </Carousel>
      </div>
    );
  }
   
public componentDidMount() {
  // debugger;
  this._Birthday();
 
  


}
private _Birthday(): void {
  let date = new Date();
let dd = date.getDate();
let mm = date.getMonth()+1; 
let yyyy = date.getFullYear();
let today = mm+'/'+dd+'/'+yyyy;
  let web = new Web(this.props.context.pageContext.web.absoluteUrl);  
  web.lists.getByTitle(`Birthdays`).items.select("Date").filter(`Date eq '${today}'`).get()
    .then((response) => {
      let UsersCollection = response.map((item) => new ClassBirthday(item));
      let UsersCard = UsersCollection;
      this.setState({ items: UsersCard });
    });
}

// private _mailer(): void {  
//   if (this.state.items.Email) {  
//     sp.utility.sendEmail({  
//       Body: "Happy Birthday to You",  
//       Subject: "Happy Birthday",  
//       To: [this.state.items.Email],  
//     }).then((i) => {  
//         console.log("Message Sent Succesfully");
//     }).catch((i) => {  
//       console.log("Error Sending Message");
//     });  
//   }  
//    }


 //Send Mail using PNP Js  
private SendAnEmilUsingPnpJs(): void {  
  
 
} 




}

import { WebPartContext } from "@microsoft/sp-webpart-base"; 
export interface IBirthdayProps {
  description: string;
  CelebrantName: string;
  img: string;
  Email: string;
  Date: string;
  Title: string;
  context:WebPartContext; 
}

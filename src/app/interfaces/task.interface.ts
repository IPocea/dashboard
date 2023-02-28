import { IEmployee } from "./employee.interface";

export interface ITask {
  id: number;
  user: IEmployee;
  date: string;
  tag: string;
  duration: number;
  timeMeasure: string;
  description: string;
  estimateAmount: number;
  estimateMeasureType: string;
  estimateCurrency: string;
  ammount: number;
  amountCurrency: string;
}
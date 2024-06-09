import { Employee } from "../employee/Employee";

export type Payroll = {
  amount: number | null;
  createdAt: Date;
  employee?: Employee | null;
  id: string;
  payDate: Date | null;
  status: string | null;
  updatedAt: Date;
};

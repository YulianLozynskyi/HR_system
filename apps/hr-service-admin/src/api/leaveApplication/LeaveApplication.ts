import { Employee } from "../employee/Employee";

export type LeaveApplication = {
  createdAt: Date;
  employee?: Employee | null;
  endDate: Date | null;
  id: string;
  reason: string | null;
  startDate: Date | null;
  status: string | null;
  updatedAt: Date;
};

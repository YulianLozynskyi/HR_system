import { Department } from "../department/Department";
import { LeaveApplication } from "../leaveApplication/LeaveApplication";
import { Payroll } from "../payroll/Payroll";

export type Employee = {
  createdAt: Date;
  department?: Department | null;
  email: string | null;
  firstName: string | null;
  hireDate: Date | null;
  id: string;
  lastName: string | null;
  leaveApplications?: Array<LeaveApplication>;
  payrolls?: Array<Payroll>;
  phoneNumber: string | null;
  position: string | null;
  salary: number | null;
  updatedAt: Date;
};

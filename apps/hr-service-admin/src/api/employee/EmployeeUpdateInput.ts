import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { LeaveApplicationUpdateManyWithoutEmployeesInput } from "./LeaveApplicationUpdateManyWithoutEmployeesInput";
import { PayrollUpdateManyWithoutEmployeesInput } from "./PayrollUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  hireDate?: Date | null;
  lastName?: string | null;
  leaveApplications?: LeaveApplicationUpdateManyWithoutEmployeesInput;
  payrolls?: PayrollUpdateManyWithoutEmployeesInput;
  phoneNumber?: string | null;
  position?: string | null;
  salary?: number | null;
};

import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { LeaveApplicationCreateNestedManyWithoutEmployeesInput } from "./LeaveApplicationCreateNestedManyWithoutEmployeesInput";
import { PayrollCreateNestedManyWithoutEmployeesInput } from "./PayrollCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  hireDate?: Date | null;
  lastName?: string | null;
  leaveApplications?: LeaveApplicationCreateNestedManyWithoutEmployeesInput;
  payrolls?: PayrollCreateNestedManyWithoutEmployeesInput;
  phoneNumber?: string | null;
  position?: string | null;
  salary?: number | null;
};

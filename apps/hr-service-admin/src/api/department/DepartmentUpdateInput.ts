import { EmployeeUpdateManyWithoutDepartmentsInput } from "./EmployeeUpdateManyWithoutDepartmentsInput";

export type DepartmentUpdateInput = {
  employees?: EmployeeUpdateManyWithoutDepartmentsInput;
  location?: string | null;
  name?: string | null;
};

import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaveApplicationListRelationFilter } from "../leaveApplication/LeaveApplicationListRelationFilter";
import { PayrollListRelationFilter } from "../payroll/PayrollListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type EmployeeWhereInput = {
  department?: DepartmentWhereUniqueInput;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  hireDate?: DateTimeNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  leaveApplications?: LeaveApplicationListRelationFilter;
  payrolls?: PayrollListRelationFilter;
  phoneNumber?: StringNullableFilter;
  position?: StringNullableFilter;
  salary?: FloatNullableFilter;
};

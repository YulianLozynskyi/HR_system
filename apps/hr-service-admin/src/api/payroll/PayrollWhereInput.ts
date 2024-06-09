import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PayrollWhereInput = {
  amount?: FloatNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  payDate?: DateTimeNullableFilter;
  status?: StringNullableFilter;
};

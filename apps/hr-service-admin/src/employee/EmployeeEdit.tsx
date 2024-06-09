import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { DepartmentTitle } from "../department/DepartmentTitle";
import { LeaveApplicationTitle } from "../leaveApplication/LeaveApplicationTitle";
import { PayrollTitle } from "../payroll/PayrollTitle";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="department.id"
          reference="Department"
          label="department"
        >
          <SelectInput optionText={DepartmentTitle} />
        </ReferenceInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <DateTimeInput label="hireDate" source="hireDate" />
        <TextInput label="lastName" source="lastName" />
        <ReferenceArrayInput
          source="leaveApplications"
          reference="LeaveApplication"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeaveApplicationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="payrolls"
          reference="Payroll"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PayrollTitle} />
        </ReferenceArrayInput>
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="position" source="position" />
        <NumberInput label="salary" source="salary" />
      </SimpleForm>
    </Edit>
  );
};

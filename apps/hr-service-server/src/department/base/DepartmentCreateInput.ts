/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmployeeCreateNestedManyWithoutDepartmentsInput } from "./EmployeeCreateNestedManyWithoutDepartmentsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DepartmentCreateInput {
  @ApiProperty({
    required: false,
    type: () => EmployeeCreateNestedManyWithoutDepartmentsInput,
  })
  @ValidateNested()
  @Type(() => EmployeeCreateNestedManyWithoutDepartmentsInput)
  @IsOptional()
  @Field(() => EmployeeCreateNestedManyWithoutDepartmentsInput, {
    nullable: true,
  })
  employees?: EmployeeCreateNestedManyWithoutDepartmentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { DepartmentCreateInput as DepartmentCreateInput };

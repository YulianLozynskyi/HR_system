import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LeaveApplicationService } from "./leaveApplication.service";
import { LeaveApplicationControllerBase } from "./base/leaveApplication.controller.base";

@swagger.ApiTags("leaveApplications")
@common.Controller("leaveApplications")
export class LeaveApplicationController extends LeaveApplicationControllerBase {
  constructor(
    protected readonly service: LeaveApplicationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

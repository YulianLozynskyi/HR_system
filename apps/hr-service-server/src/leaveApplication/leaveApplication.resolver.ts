import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LeaveApplicationResolverBase } from "./base/leaveApplication.resolver.base";
import { LeaveApplication } from "./base/LeaveApplication";
import { LeaveApplicationService } from "./leaveApplication.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LeaveApplication)
export class LeaveApplicationResolver extends LeaveApplicationResolverBase {
  constructor(
    protected readonly service: LeaveApplicationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

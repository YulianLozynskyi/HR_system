import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LeaveApplicationModuleBase } from "./base/leaveApplication.module.base";
import { LeaveApplicationService } from "./leaveApplication.service";
import { LeaveApplicationController } from "./leaveApplication.controller";
import { LeaveApplicationResolver } from "./leaveApplication.resolver";

@Module({
  imports: [LeaveApplicationModuleBase, forwardRef(() => AuthModule)],
  controllers: [LeaveApplicationController],
  providers: [LeaveApplicationService, LeaveApplicationResolver],
  exports: [LeaveApplicationService],
})
export class LeaveApplicationModule {}

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { LeaveApplicationService } from "../leaveApplication.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { LeaveApplicationCreateInput } from "./LeaveApplicationCreateInput";
import { LeaveApplication } from "./LeaveApplication";
import { LeaveApplicationFindManyArgs } from "./LeaveApplicationFindManyArgs";
import { LeaveApplicationWhereUniqueInput } from "./LeaveApplicationWhereUniqueInput";
import { LeaveApplicationUpdateInput } from "./LeaveApplicationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LeaveApplicationControllerBase {
  constructor(
    protected readonly service: LeaveApplicationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LeaveApplication })
  @nestAccessControl.UseRoles({
    resource: "LeaveApplication",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createLeaveApplication(
    @common.Body() data: LeaveApplicationCreateInput
  ): Promise<LeaveApplication> {
    return await this.service.createLeaveApplication({
      data: {
        ...data,

        employee: data.employee
          ? {
              connect: data.employee,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        endDate: true,
        id: true,
        reason: true,
        startDate: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [LeaveApplication] })
  @ApiNestedQuery(LeaveApplicationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "LeaveApplication",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async leaveApplications(
    @common.Req() request: Request
  ): Promise<LeaveApplication[]> {
    const args = plainToClass(LeaveApplicationFindManyArgs, request.query);
    return this.service.leaveApplications({
      ...args,
      select: {
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        endDate: true,
        id: true,
        reason: true,
        startDate: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LeaveApplication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LeaveApplication",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async leaveApplication(
    @common.Param() params: LeaveApplicationWhereUniqueInput
  ): Promise<LeaveApplication | null> {
    const result = await this.service.leaveApplication({
      where: params,
      select: {
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        endDate: true,
        id: true,
        reason: true,
        startDate: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: LeaveApplication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LeaveApplication",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateLeaveApplication(
    @common.Param() params: LeaveApplicationWhereUniqueInput,
    @common.Body() data: LeaveApplicationUpdateInput
  ): Promise<LeaveApplication | null> {
    try {
      return await this.service.updateLeaveApplication({
        where: params,
        data: {
          ...data,

          employee: data.employee
            ? {
                connect: data.employee,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          employee: {
            select: {
              id: true,
            },
          },

          endDate: true,
          id: true,
          reason: true,
          startDate: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: LeaveApplication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LeaveApplication",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteLeaveApplication(
    @common.Param() params: LeaveApplicationWhereUniqueInput
  ): Promise<LeaveApplication | null> {
    try {
      return await this.service.deleteLeaveApplication({
        where: params,
        select: {
          createdAt: true,

          employee: {
            select: {
              id: true,
            },
          },

          endDate: true,
          id: true,
          reason: true,
          startDate: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

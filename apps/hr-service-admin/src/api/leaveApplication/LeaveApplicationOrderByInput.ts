import { SortOrder } from "../../util/SortOrder";

export type LeaveApplicationOrderByInput = {
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  reason?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};

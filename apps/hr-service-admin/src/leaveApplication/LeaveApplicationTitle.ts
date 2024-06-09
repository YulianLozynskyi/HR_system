import { LeaveApplication as TLeaveApplication } from "../api/leaveApplication/LeaveApplication";

export const LEAVEAPPLICATION_TITLE_FIELD = "status";

export const LeaveApplicationTitle = (record: TLeaveApplication): string => {
  return record.status?.toString() || String(record.id);
};

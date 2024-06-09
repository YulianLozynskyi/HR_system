import { Payroll as TPayroll } from "../api/payroll/Payroll";

export const PAYROLL_TITLE_FIELD = "status";

export const PayrollTitle = (record: TPayroll): string => {
  return record.status?.toString() || String(record.id);
};

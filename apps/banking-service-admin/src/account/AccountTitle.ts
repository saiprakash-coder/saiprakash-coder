import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "accNumber";

export const AccountTitle = (record: TAccount): string => {
  return record.accNumber?.toString() || String(record.id);
};

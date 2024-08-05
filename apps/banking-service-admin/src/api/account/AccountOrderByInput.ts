import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  accBalance?: SortOrder;
  accNumber?: SortOrder;
  accountNumber?: SortOrder;
  accountType?: SortOrder;
  balance?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

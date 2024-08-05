import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountWhereInput = {
  accBalance?: FloatNullableFilter;
  accNumber?: StringNullableFilter;
  accountNumber?: StringNullableFilter;
  accountType?: "Option1";
  balance?: FloatNullableFilter;
  id?: StringFilter;
};

import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="acc_balance" source="accBalance" />
        <TextInput label="acc_number" source="accNumber" />
        <TextInput label="account_number" source="accountNumber" />
        <SelectInput
          source="accountType"
          label="account_type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="balance" source="balance" />
      </SimpleForm>
    </Create>
  );
};

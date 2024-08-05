import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

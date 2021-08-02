import FormField from "./FormField";

const BillingDetailsFields = () => {
  return (
    <>
      <FormField
        name="name"
        label="Name"
        type="text"
        placeholder="Name"
        required
      />
    </>
  );
};

export default BillingDetailsFields;

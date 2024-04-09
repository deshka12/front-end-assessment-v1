import React from "react";
import { FormGroup, Input, Label, FormFeedback } from "reactstrap";
import PropTypes from "prop-types";

const CustomInput = ({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  checked,
  disabled,
  options = [],
  multiple,
  invalid,
  errorMessage,
}) => {
  if (type === "checkbox") {
    return (
      <FormGroup check>
        <Label check>
          <Input
            name={name}
            type={type}
            id={name}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
          />
          {label}
        </Label>
      </FormGroup>
    );
  }

  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input
        invalid={invalid}
        name={name}
        type={type}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        multiple={multiple}
      >
        {options.length
          ? options.map((v, index) => (
              <option key={index} value={v}>
                {v}
              </option>
            ))
          : null}
      </Input>
      <FormFeedback>{errorMessage}</FormFeedback>
    </FormGroup>
  );
};

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  multiple: PropTypes.bool,
  invalid: PropTypes.bool,
  errorMessage: PropTypes.string,
};
export default CustomInput;

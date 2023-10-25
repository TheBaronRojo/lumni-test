import { useEffect, useState } from "react";
import fieldsStyles from "../Fields.module.css";
import styles from "./SelectFieldWithLoading.module.css";
import Select from "../Select";
import { ISelectFieldProps } from "@view/common/Fields/SelectField";

export interface ISelectFieldWithLoadingProps extends ISelectFieldProps {
  loading?: boolean;
}

const SelectFieldWithLoading = (props: ISelectFieldWithLoadingProps) => {

  const {disabled, options, loading , ...selectProps} = props;
  const [pendingValue, setPendingValue] = useState(null as null | string);

  const handleOptionsChange = () => {
    if (pendingValue) {
      if (props.options.length > 0)
        setPendingValue(null);
      if (
        pendingValue != null
        && props.value != pendingValue
        && props.options.find(x => x.value == pendingValue)
        && props.onChange
      ) {
        props.onChange({ type: "change", target: { value: pendingValue, name: props.name } })
      }
    }
    else if (props.value && !props.options.find(x => x.value == props.value)) {
      setPendingValue(props.value);
      if (props.onChange)
        props.onChange({ type: "change", target: { value: "", name: props.name } })
    }
  };

  useEffect(handleOptionsChange, [props.options]);

  return (
    <div>
      {props.label &&
        <label className={fieldsStyles.label + (props.error ? ` ${fieldsStyles.error}` : "")} htmlFor={props.id}>
          {props.label}
        </label>
      }
      <div 
        className={props.loading ? styles.loading : undefined} 
        style={{ width: "100%", boxSizing: "border-box" }}
      >
        <Select
          {...selectProps}
          disabled={props.disabled || props.loading}
          style={{ width: "100%", boxSizing: "border-box" }}
        >
          <option value=""></option>
          {props.options.map(x => (
            <option key={x.value} value={x.value}>
              {x.text}
            </option>
          ))}
        </Select>
      </div>
    </div>
  )
};

export default SelectFieldWithLoading;

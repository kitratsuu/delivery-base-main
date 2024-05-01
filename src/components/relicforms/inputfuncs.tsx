import React from "react";
import { RelicFormFieldRef } from "./form";

export const useRelicInputController = () => React.useRef<RelicInputRef>(null);

export interface RelicInputRef extends RelicFormFieldRef {
  get value(): any;
  set value(value: string);
  get numberValue(): number;
  get element(): HTMLInputElement | null;
  validate(): boolean;
  setError(error: string | null): void;
}

export interface RelicInputProps {
  id?: string;
  label?: string;
  type?:
    | "text"
    | "password"
    | "number"
    | "email"
    | "tel"
    | "url"
    | "date"
    | "month"
    | "checkbox"
    | "submit"
    | "time"
    | "datetime-local";
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  validator?: (value: string) => string | null;
  autoComplete?: string;
  onSubmit?: (v: string) => void;
  formNoValidate?: boolean;
  className?: string;
  defaultValue?: string;
}

export const Input = React.forwardRef<RelicFormFieldRef, RelicInputProps>(
  (props, ref) => {
    const [active, setActive] = React.useState(false);

    const inputRef = React.useRef<HTMLInputElement>(null);
    const [error, setError] = React.useState<string | null>(
      props.error ?? null
    );

    React.useImperativeHandle(ref, () => ({
      get value() {
        return inputRef.current?.value || "";
      },
      set value(value) {
        if (inputRef.current) {
          inputRef.current.value = value;
        }
      },
      get numberValue() {
        return parseFloat(inputRef.current?.value || "0");
      },
      get element() {
        return inputRef.current;
      },
      validate() {
        setError(null);
        if (inputRef.current) {
          let res: string | null = null;
          if (props.disabled) {
            return true;
          }
          if (props.validator) {
            res = props.validator(inputRef.current.value);
          }
          if (res == null) {
            return true;
          }
          setError(res);
          return false;
        }
        return true;
      },
      setError(error: string | null) {
        setError(error);
      },
    }));

    React.useEffect(() => {
      if (inputRef.current) {
        const v = inputRef.current.value;
        setActive(!!v);
      }
    }, []);

    return (
      <div
        style={{
          opacity: props.disabled ? 0.5 : undefined,
        }}
        className="relative border rounded bg-black/5  border-surfaceVariant border-opacity-25 transition-all"
      >
        <input
          ref={inputRef}
          placeholder={props.placeholder}
          id={props.id}
          className={[
            "outline-none w-full rounded bg-transparent text-sm transition-all duration-200 ease-in-out p-2",
            active ? "pt-6" : "",
          ].join(" ")}
          name={props.label}
          type={props.type}
          disabled={props.disabled}
          autoComplete={props.autoComplete ?? "off"}
          formNoValidate={props.formNoValidate}
          onChange={(e) => {
            const val = e.target.value;
            setActive(!!val);
            setError(null);
            props.onChange && props.onChange(e);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              props.onSubmit && props.onSubmit(e.currentTarget.value);
            }
          }}
        />
        <label
          className={[
            "absolute top-0 left-0 flex items-center text-surface60 text-opacity-50 p-2 transition-all duration-200 ease-in-out pointer-events-none",
            active ? "text-xs" : "text-sm",
          ].join(" ")}
          htmlFor={props.label}
        >
          {props.label}
        </label>

        {error && <div className="text-xs text-error px-2 pb-1">{error}</div>}
      </div>
    );
  }
);

export const SimpleInput = React.forwardRef<RelicFormFieldRef, RelicInputProps>(
  (props, ref) => {
    const [active, setActive] = React.useState(false);

    const inputRef = React.useRef<HTMLInputElement>(null);
    const [error, setError] = React.useState<string | null>(
      props.error ?? null
    );

    React.useImperativeHandle(ref, () => ({
      get value() {
        return inputRef.current?.value || "";
      },
      set value(value) {
        if (inputRef.current) {
          inputRef.current.value = value;
        }
      },
      get numberValue() {
        return parseFloat(inputRef.current?.value || "0");
      },
      get element() {
        return inputRef.current;
      },
      validate() {
        setError(null);
        if (inputRef.current) {
          let res: string | null = null;
          if (props.disabled) {
            return true;
          }
          if (props.validator) {
            res = props.validator(inputRef.current.value);
          }
          if (res == null) {
            return true;
          }
          setError(res);
          return false;
        }
        return true;
      },
      setError(error: string | null) {
        setError(error);
      },
    }));

    React.useEffect(() => {
      if (inputRef.current) {
        const v = inputRef.current.value;
        setActive(!!v);
      }
    }, []);

    return (
      <div className={` ${props.className}`}>
        <input
          ref={inputRef}
          placeholder={props.placeholder}
          id={props.id}
          className={"outline-none w-full rounded bg-transparent text-base"}
          name={props.label}
          type={props.type}
          defaultValue={props.defaultValue}
          disabled={props.disabled}
          autoComplete={props.autoComplete ?? "off"}
          formNoValidate={props.formNoValidate}
          onChange={(e) => {
            const val = e.target.value;
            setActive(!!val);
            setError(null);
            props.onChange && props.onChange(e);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              props.onSubmit && props.onSubmit(e.currentTarget.value);
            }
          }}
        />
        {/* <label
          className={[
            'absolute top-0 left-0 flex items-center text-surface60 text-opacity-50 p-2 transition-all duration-200 ease-in-out pointer-events-none',
            active ? 'text-xs' : 'text-sm',
          ].join(' ')}
          htmlFor={props.label}
        >
          {props.label}
        </label> */}

        {error && <div className="text-xs text-error px-2 pb-1">{error}</div>}
      </div>
    );
  }
);

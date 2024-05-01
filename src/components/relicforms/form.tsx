import React, { useRef } from "react";
declare module "react" {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

export type RelicFormFieldRef = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  get value(): any;
  set value(value: string);
  get numberValue(): number;
  get element(): HTMLElement | null;
  validate(): boolean;
  setError(error: string | null): void;
};

export type RelicInputType = string | number;

export interface RelicFormHookObj<T = { [key: string]: RelicInputType }> {
  formRef: React.RefObject<RelicFormRef>;
  fieldRefs: { [key in keyof T]: React.RefObject<RelicFormFieldRef> };
  fields: T;
}

export function useRelicForm<T = { [key: string]: RelicInputType }>(
  fields: T
): RelicFormHookObj<T> {
  const formRef = React.useRef<RelicFormRef>(null);
  const refs = {} as { [key in keyof T]: React.RefObject<RelicFormFieldRef> };
  //
  for (const key in fields) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    refs[key] = React.useRef<RelicFormFieldRef>(null);
  }
  //
  return {
    formRef,
    fieldRefs: refs,
    fields,
  } as RelicFormHookObj<T>;
}

///
///
///

export type RelicFormRef = {
  validateForm(): boolean;
  submitForm(): void;
};

interface _Props<T = { [key: string]: RelicInputType }> {
  formHookObj?: RelicFormHookObj<T>;
  children: React.ReactNode;
  className?: string;
  autoValidate?: boolean;
  onSubmit?: (data: T, event?: React.FormEvent<HTMLFormElement>) => void;
  // disabled?: boolean;
}
function _Form<T = { [key: string]: RelicInputType }>(
  props: _Props<T>,
  ref: React.ForwardedRef<RelicFormRef>
) {
  const allRef = useRef<HTMLFormElement>(null);
  React.useImperativeHandle(props.formHookObj?.formRef, () => ({
    validateForm() {
      let valid = true;
      for (const key in props.formHookObj?.fieldRefs) {
        const _v =
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (props.formHookObj?.fieldRefs as any)[key].current?.validate() ??
          true;

        valid = valid && _v;
      }
      return valid;
    },
    submitForm() {
      if (props.onSubmit) {
        if (
          (props.autoValidate ?? true) &&
          !props.formHookObj?.formRef.current?.validateForm()
        ) {
          return;
        }

        const data = {} as T;
        for (const key in props.formHookObj?.fieldRefs) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (data as any)[key] = (props.formHookObj?.fieldRefs as any)[
            key
          ].current?.value;
        }

        //
        if (props.onSubmit) {
          props.onSubmit(data as T, undefined);
        }
      }
      // allRef.current!.dispatchEvent(new Event('submit'));
    },
  }));

  React.useEffect(() => {
    for (const key in props.formHookObj?.fieldRefs) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const f = (props.formHookObj?.fieldRefs as any)[
        key
      ] as React.RefObject<RelicFormFieldRef>;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (f.current && (props.formHookObj?.fields as any)[key]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        f.current.value = (props.formHookObj?.fields as any)[key];
      }
    }
  }, [props.formHookObj?.fieldRefs, props.formHookObj?.fields]);

  return (
    <form
      className={props.className}
      ref={allRef}
      onSubmit={(e) => {
        e.preventDefault();

        if (
          (props.autoValidate ?? true) &&
          !props.formHookObj?.formRef.current?.validateForm()
        ) {
          return;
        }

        const data = {} as T;
        for (const key in props.formHookObj?.fieldRefs) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (data as any)[key] = (props.formHookObj?.fieldRefs as any)[
            key
          ].current?.value;
        }

        //
        if (props.onSubmit) {
          props.onSubmit(data as T, e);
        }
      }}
    >
      {props.children}
    </form>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Form = React.forwardRef(_Form) as <T = { [key: string]: any }>(
  props: _Props<T> & { ref?: React.ForwardedRef<RelicFormRef> }
) => ReturnType<typeof _Form>;

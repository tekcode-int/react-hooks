import { Form, FormInstance, InputNumber } from "antd";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import NavbarComponent from "../../component/NavbarComponent";

interface IProps {}
interface IFormValues {
  valueA?: number;
  valueB?: number;
  result?: number;
}

const CalculatorView: FunctionComponent<IProps> = (props) => {
  // states
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);

  // refs
  const formRef = useRef<FormInstance | null>(null);

  const onSubmit = useCallback((formEvent: IFormValues) => {
    const { valueA, valueB } = formEvent;

    if (!isNaN(valueA as any)) {
      setValueA(valueA as number);
    }

    // @ts-ignore
    if (!isNaN(valueB as any)) {
      setValueB(valueB as number);
    }
  }, []);

  useEffect(() => {
    const newResult = valueA + valueB;

    formRef.current?.setFieldsValue({ result: newResult });
  }, [valueA, valueB]);

  return useMemo(
    () => (
      <div className="text-center">
        <NavbarComponent />

        <Form
          ref={formRef}
          onValuesChange={onSubmit}
          initialValues={{ result: 0, valueA, valueB }}
        >
          <Form.Item label="Value A" name="valueA">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Value B" name="valueB">
            <InputNumber />
          </Form.Item>

          <Form.Item name="result">
            <InputNumber readOnly />
          </Form.Item>
        </Form>
      </div>
    ),
    [valueA, valueB, onSubmit]
  );
};

export default CalculatorView;

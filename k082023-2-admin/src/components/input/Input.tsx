import { Input as BaseInput, InputProps } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./style.css";

type IInputProps = InputProps & {
  error?: boolean;
  errorMessage?: string;
  $type?: "text" | "password";
};

const Input = ({
  error = false,
  errorMessage,
  $type = "text",
  ...rest
}: IInputProps) => {
  switch ($type) {
    case "text":
      return (
        <div className="input__container">
          {error && (
            <div >
              <InfoCircleOutlined style={{ color: "red" }} />
            </div>
          )}
          <BaseInput {...rest} />
          <div className="inpur_LG"
          style={{ color: "red" }}>
          {errorMessage && errorMessage}
          </div>
        </div>
      );
    case "password":
      return (
        <div className="input__container">
          {error && (
            <div>
              <InfoCircleOutlined style={{ color: "red" }} />
            </div>
          )}
          <BaseInput.Password {...rest} />
          <div className="inpur_LG" 
          style={{ color: "red" }}>
           {errorMessage && errorMessage}
          </div>
        </div>
      );
  }
};

export default Input;

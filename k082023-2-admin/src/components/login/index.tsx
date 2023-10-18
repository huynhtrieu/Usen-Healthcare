import { useState } from "react";
import { Button, Modal } from "antd";
import LoginContainer from "./styled";
import LoginForm from "./login-form";

const Login = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const onToggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <LoginContainer>
      <Button onClick={onToggleModal}>Login</Button>
      <Modal
        open={isShowModal}
        footer={false}
        closeIcon={false}
      >
        <LoginForm onLoginSuccess={onToggleModal} onCancel={onToggleModal} />
      </Modal>
    </LoginContainer>
  );
};

export default Login;

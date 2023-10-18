/* eslint-disable no-unused-vars */
import { Modal } from 'antd';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
interface ConfirmModalProps {
  title: string;
  content: string;
  onOk?: () => void;
  onCancel?: () => void;
}

interface UseConfirmModal {
  showConfirm: (props: ConfirmModalProps) => void;
}

const useConfirmModal = (): UseConfirmModal => {
  const { t } = useTranslation("common");
  const [_, setVisible] = useState(false);

  const showConfirm = ({
    title,
    content,
    onOk,
    onCancel,
  }: ConfirmModalProps) => {
    Modal.confirm({
      title ,
      content,
      onOk: () => {
        onOk && onOk();
        setVisible(false);
      },
      onCancel: () => {
        onCancel && onCancel();
        setVisible(false);
      },
      okText:  t("delete.Okay"),
      cancelText:  t("delete.Cancel"),
    });

    setVisible(true);
  };

  return {
    showConfirm,
  };
};

export default useConfirmModal;

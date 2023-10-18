/* eslint-disable no-unused-vars */
import { useToastContext } from "@/contexts/ToastContext";
import { RcFile } from "antd/es/upload";
import { UploadProps } from "antd/lib/upload";
import { useEffect, useState } from "react";
import { StyledUpload, StyledUploadContainer } from "./styled";
import { useTranslation } from "react-i18next";
type TUpload = UploadProps & {
  onChangeCustom?: (file: RcFile | undefined) => void;
  maxFileSize?: number;
};

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const SingleUpload = ({
  listType = "picture",
  maxCount = 1,
  children,
  onChangeCustom,
  maxFileSize = 10,
  ...rest
}: TUpload) => {
  const toast = useToastContext();
  const { t } = useTranslation("creat");
  const [imageUrl, setImageUrl] = useState<string>();
  const [selectedFile, setSelectedFile] = useState<RcFile | undefined>(
    undefined
  );
  const beforeUpload = (file: RcFile) => {
   
    //1024 kilobytes đổi qua mb 
    const isLt2M = file.size / 1024 / 1024 < maxFileSize;
    if (!isLt2M) {
      toast?.error({ message: `${(t("message_creat.MB_img"))} < ${maxFileSize}MB` });
    } else {
      setSelectedFile(file);
      getBase64(file, (url) => {
        setImageUrl(url);
      });
    }

    return false;
  };

  useEffect(() => {
    onChangeCustom && onChangeCustom(selectedFile);
  }, [selectedFile]);

  return (
    <StyledUploadContainer>
      <div className="image-container">
        {imageUrl && (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        )}
      </div>
      <StyledUpload
        listType={listType}
        maxCount={maxCount}
        beforeUpload={beforeUpload}
        showUploadList={false}
        {...rest}
      >
        {children}
      </StyledUpload>
    </StyledUploadContainer>
  );
};

export default SingleUpload;

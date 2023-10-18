import { RcFile } from "antd/es/upload";
import { createNewFileName } from "./new-file-name";
import { v4 as uuidv4 } from "uuid";

export function cloneFile(originalFile: File) {
  // Tạo một đối tượng File mới
  const newFile = new File(
    [originalFile],
    createNewFileName(originalFile.name, uuidv4()),
    {
      type: originalFile.type,
      lastModified: originalFile.lastModified,
    }
  );

  return newFile as RcFile;
}
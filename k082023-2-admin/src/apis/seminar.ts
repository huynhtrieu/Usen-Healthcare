import { privateInstance } from ".";

export const uploadImg = async (
  fileName: string,
  folderPath: string,
  fileType: string
) => {
  return await privateInstance.post("/api/admin/seminar/create/presignUrl", {
    fileName: fileName,
    folderPath: folderPath,
    contentType: fileType,
  });
};

export const createSeminar = async (payload: any) => {
  return await privateInstance.post("/api/admin/seminar/create", payload);
};

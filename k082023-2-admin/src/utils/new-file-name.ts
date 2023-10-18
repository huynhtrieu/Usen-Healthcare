export const createNewFileName = (fileName: string, randomString: string) => {
  const fileNameWithExtension = fileName;
  const fileExtension = fileNameWithExtension.split(".").pop(); // Lấy đuôi file
  const fileNameWithoutExtension = fileNameWithExtension.replace(
    /\.[^/.]+$/,
    ""
  ); // Lấy tên file (không bao gồm đuôi)
  const newFileName = `${fileNameWithoutExtension}-${randomString}.${fileExtension}`;
  return newFileName;
};

import { FilePicker } from "react-file-picker";
import { Pencil } from "@phosphor-icons/react";
import { uploadFile } from "config/APIs/files";
import { logError } from "helpers/utils/common/logError";
import { useState } from "react";

function QuestAddImage({ onAdd }) {
  const [adding, setAdding] = useState(false);
  const handleFilePickerError = (err) => {
    console.log("File Picker Error", err);
    const message = `Please select an appropriate image file!`;
  };

  const handleFilePicker = async (pickedFile) => {
    setAdding(true);
    try {
      let res = await uploadFile({ file: pickedFile });
      if (res.data) {
        let data = res.data?.data;
        onAdd(data);
      }
    } catch (e) {
      logError("Upload file", e);
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="w-7 h-7 rounded-full flex flex-row items-center justify-center bg-primary-blue-100 absolute top-2 right-2">
      <FilePicker
        extensions={["png", "jpeg", "jpg", "svg"]}
        onChange={handleFilePicker}
        onError={handleFilePickerError}
        maxSize={6000}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {adding ? (
          <div className="w-5 h-5 rounded-full bg-transparent border border-t-0 border-primary-blue-700 animate-spin" />
        ) : (
          <Pencil size={20} className="text-primary-blue-700" />
        )}
      </FilePicker>
    </div>
  );
}

export default QuestAddImage;

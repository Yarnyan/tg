import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { styleEditModal } from "../../../style/editModal";

type Props = {
    onClose: () => void;
};

type FormValues = {
    photo: FileList;
};

export default function EditPhotoModal({ onClose }: Props) {
    const { handleSubmit, control, setValue, watch } = useForm<FormValues>();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const watchPhoto = watch("photo");

    const onSubmit = (data: FormValues) => {
        console.log(data.photo);
        onClose();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedImage(URL.createObjectURL(file));
            setValue("photo", e.target.files);
        }
    };

    return (
        <Box sx={{ ...styleEditModal, backgroundColor: "#252525" }} tabIndex={0}>
            <div className="p-[16px] w-full h-full">
                <p className="text-[16px] font-normal text-[var(--callsBarCallNameColor)]">Edit photo</p>
                <div className="w-full flex justify-center mt-[20px]">
                    <label htmlFor="photoInput" className="cursor-pointer">
                        <img
                            src={selectedImage || "/image/1.jpg"} // Если есть выбранное фото, показываем его
                            alt="Profile"
                            className="w-[120px] h-[120px] rounded-full"
                        />
                    </label>
                    <input
                        type="file"
                        id="photoInput"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="mt-[20px] flex w-full justify-end">
                    <button
                        className="text-[var(--callsBarCallNameColor)] px-[16px] py-[8px] rounded-[20px]"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="ml-[8px] bg-[var(--createModalHoverColorButton)] text-[var(--callsBarCallNameColor)] px-[16px] py-[8px] rounded-[20px]"
                        onClick={handleSubmit(onSubmit)}
                    >
                        Save
                    </button>
                </div>
            </div>
        </Box>
    );
}

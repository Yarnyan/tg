import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { nextStep } from "../../../../store/reducers/stepsSlice";
import { useAppDispatch } from "../../../../hooks/redux";

type Props = {
    onClose: () => void
}

type Inputs = {
    name: string;
}

const CreateGroupModal = ({ onClose }: Props) => {

    const dispatch = useAppDispatch();

    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
    });

    const formMethods = useForm<Inputs>({
        resolver: yupResolver(schema),
    });

    const {
        register,
        handleSubmit,
    } = formMethods;

    const handleCreate = (data: any) => {
        console.log(data)
    }

    const nextPage = () => {
        dispatch(nextStep());
    }

    return (
        <div className='w-full p-[16px]'>
            <p className="text-[16px] font-medium text-[var(--storiesBarMenuTextColor)]">Create group</p>
            <div className="mt-[16px] flex items-center justify-center">
                <div className="w-[120px] h-[120px] rounded-full border-dashed border-2 border-[var(--iconsColor)] flex items-center justify-center">
                    <AddAPhotoIcon className="text-[var(--iconsColor)]" />
                </div>
            </div>
            <div>
                <p className="text-[14px] font-medium text-[var(--callsBarCallDateColor)] mt-[16px]">Group name</p>
                <div>
                    <FormProvider {...formMethods}>
                        <form onSubmit={handleSubmit(handleCreate)}>
                            <input type="text" {...register("name", { required: true })} placeholder="Title..." className="mt-[8px] h-[46px] w-full rounded-[20px] p-[16px] bg-[var(--chatsBarItemColor)] text-[var(--callsBarCallNameColor)]"/>
                        </form>
                    </FormProvider>
                </div>
            </div>
            <div className="mt-[16px] flex justify-end">
                <button className="p-[16px] hover:bg-[var(--createModalHoverColorButton)] rounded-[20px] duration-500 text-[var(--createModalTextColorButton)] font-semibold text-[14px]" onClick={onClose}>Cancel</button>
                <button className="p-[16px] hover:bg-[var(--createModalHoverColorButton)] rounded-[20px] ml-[12px] duration-500 text-[var(--createModalTextColorButton)] font-semibold text-[14px]" onClick={() => nextPage()}>Next</button>
            </div>
        </div>
    );
}

export default CreateGroupModal;
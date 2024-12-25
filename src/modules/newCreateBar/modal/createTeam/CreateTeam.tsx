import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IContact } from "../../types/types";
import ContactModal from "../../components/ContactModal";

type Props = {
    onClose: () => void
}

type Inputs = {
    name: string;
}

const CreateTeamModal = ({ onClose }: Props) => {

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

    const items: IContact[] = [
        {
            id: 1,
            name: 'Mary',
            src: '/image/1.jpg',
            last: 'last seen today at 17:00',
        },
        {
            id: 2,
            name: 'Sofia Morgan',
            src: '/image/1.jpg',
            last: 'Online',
        },
        {
            id: 3,
            name: 'Daniel',
            src: '/image/1.jpg',
            last: 'last seen yesterday at 11:30',
        },
        {
            id: 3,
            name: 'Daniel',
            src: '/image/1.jpg',
            last: 'last seen yesterday at 11:30',
        },
        {
            id: 3,
            name: 'Daniel',
            src: '/image/1.jpg',
            last: 'last seen yesterday at 11:30',
        },
        {
            id: 3,
            name: 'Daniel',
            src: '/image/1.jpg',
            last: 'last seen yesterday at 11:30',
        },
        {
            id: 3,
            name: 'Daniel',
            src: '/image/1.jpg',
            last: 'last seen yesterday at 11:30',
        },
        {
            id: 3,
            name: 'Daniel',
            src: '/image/1.jpg',
            last: 'last seen yesterday at 11:30',
        },
        {
            id: 3,
            name: 'Daniel',
            src: '/image/1.jpg',
            last: 'last seen yesterday at 11:30',
        },
    ]

    return (
        <div className='w-full p-[16px]'>
            <div>
                <p className="text-[16px] font-medium text-[var(--storiesBarMenuTextColor)]">Create team</p>
                <p className="text-[14px] font-medium text-[var(--callsBarCallDateColor)] mt-[16px]">Team name</p>
                <div>
                    <FormProvider {...formMethods}>
                        <form onSubmit={handleSubmit(handleCreate)}>
                            <input type="text" {...register("name", { required: true })} placeholder="Title..." className="mt-[8px] h-[46px] w-full rounded-[20px] p-[16px] bg-[var(--chatsBarItemColor)] text-[var(--callsBarCallNameColor)]" />
                        </form>
                    </FormProvider>
                </div>
            </div>
            <div className="mt-[12px] flex items-center flex flex-col">
                <div className="flex items-center justify-between w-full">
                    <input type="text" placeholder="Invite user by contact or username... " className="mt-[8px] h-[46px] w-full rounded-[20px] p-[16px] bg-[var(--chatsBarItemColor)] text-[var(--callsBarCallNameColor)] font-normal text-[14px]" />
                    <button className="px-[16px] py-[6px] bg-[var(--createModalHoverColorButton)] rounded-[20px] text-[var(--createModalTextColorButton)] font-normal text-[14px] ml-[12px] h-[46px]">Invite</button>
                </div>
                <div className="overflow-y-scroll max-h-[250px] mt-[12px] scrollbar-hidden flex flex-col w-full">
                    {items.map((item: IContact) => <ContactModal contact={item} key={item.id} />)}
                </div>
            </div>
            <div className="mt-[16px] flex justify-end">
                <button className="p-[16px] hover:bg-[var(--createModalHoverColorButton)] rounded-[20px] duration-500 text-[var(--createModalTextColorButton)] font-semibold text-[14px]" onClick={onClose}>Cancel</button>
                <button className="p-[16px] hover:bg-[var(--createModalHoverColorButton)] rounded-[20px] ml-[12px] duration-500 text-[var(--createModalTextColorButton)] font-semibold text-[14px]" onClick={() => console.log('g')}>Next</button>
            </div>
        </div>
    );
}

export default CreateTeamModal;
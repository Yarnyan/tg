import { nextStep, prevStep } from "../../../../store/reducers/stepsSlice";
import { useAppDispatch } from "../../../../hooks/redux";
import ContactModal from "../../components/ContactModal";
import { IContact } from "../../types/types";
type Props = {

}


const AddContactsModal = ({ }: Props) => {

    const dispatch = useAppDispatch();

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
        ]

    return (
        <div className='w-full p-[16px] flex flex-col'>
            <div className='mt-[16px] w-full flex flex-col'>
                <p className="text-[16px] font-medium text-[var(--storiesBarMenuTextColor)]">Add members</p>
                <div className='mt-[16px] flex'>
                    <input
                        type="text"
                        placeholder='Search...'
                        className='w-full h-[46px] rounded-l-[20px] bg-[var(--chatsBarItemColor)] pl-[16px] no-outline text-[var(--chatsBarTextColor)]'
                    />
                    <div className='h-[46px] flex justify-center items-center p-4 rounded-r-[20px] bg-[var(--chatsBarItemColor)]'>
                        <img src="/icons/SearchIcon.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-y-scroll max-h-[478px] mt-[12px] scrollbar-hidden">
                {items.map((item: IContact) => <ContactModal contact={item} key={item.id} />)}
            </div>
            <div className="mt-[8px] flex justify-end">
                <button className="p-[16px] hover:bg-[var(--createModalHoverColorButton)] rounded-[20px] duration-500 text-[var(--createModalTextColorButton)] font-semibold text-[14px]" onClick={() => dispatch(prevStep())}>Back</button>
                <button className="p-[16px] hover:bg-[var(--createModalHoverColorButton)] rounded-[20px] ml-[12px] duration-500 text-[var(--createModalTextColorButton)] font-semibold text-[14px]" onClick={() => dispatch(nextStep())}>Create</button>
            </div>
        </div>
    );
}

export default AddContactsModal;
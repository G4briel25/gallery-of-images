type Props = {
    image: string,
    closeModal: () => void;
};

export const Modal = ({image, closeModal}: Props) => {
    return (
        <>
            <div onClick={closeModal} className="fixed right-0 left-0 bottom-0 top-0 flex justify-center items-center bg-black/90">
                <img src={`/assets/${image}`} className="max-w-screen max-h-screen"/>
            </div>
            <div onClick={closeModal} className="fixed top-5 right-5 cursor-pointer bg-white p-2 rounded-full">
                <img src="/icon-X/marca.png" width="30px" height="30px"/>
            </div>
        </>
    );
};
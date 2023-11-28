import { PhotoList } from "@/data/PhotoList";
import { PhotoItem } from "@/components/PhotoItem";
import { useState } from "react";
import { Modal } from "./Modal";

export const Section = () => {
        const [showModal, setShowModal] = useState(false); //Modal abre e fecha
        const [imageOfModal, setImageOfModal] = useState(''); //Variável onde armazenará a imagem

        //Função de click para executar o showModal
        const openModal = (id: number) => {
            const photo = PhotoList.find(item => item.id === id);
            
            if(photo) {
                setImageOfModal(photo.url); //A imagem seta dentro do imageModal
                setShowModal(true); //Modal abre
            };

        };
        
        const closeModal = () => {
            setShowModal(false);
        };

    return (
        <div>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {PhotoList.map(item => 
                    <PhotoItem 
                        key={item.id}
                        photo={item}
                        onClick={() => openModal(item.id)}
                    />
                )}
            </section>

            {showModal &&
                <Modal image={imageOfModal} closeModal={closeModal}/>
            }
        </div>
    );
        
}
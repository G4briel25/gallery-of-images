import { Section } from "./Section";

export const Base = () => {
    return (
        <div className="md:mt-24 md:mb-16 flex items-center justify-center">
        
            <div className="container max-w-5xl bg-white m-3.5 p-7 rounded-lg shadow-gray-900 shadow-xl">
            <p className="my-4 md:my-8 text-xl md:text-2xl text-center font-bold">
                GALERIA DE FOTOS
            </p>
            
            <Section/>
            </div>
        </div>
    );
};
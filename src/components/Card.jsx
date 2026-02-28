import { useState } from 'react';
import Bullets from './Bullets'

const Card = ({ title, tldr, intro, body, img }) => {
    
    // state for if card is open or closed
    const [isActive, setIsActive] = useState(false);

    return (
        <div onClick={() => setIsActive(!isActive)} className="cursor-pointer border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
            <h2 className="text-xl font-bold text-black">
                {title}
            </h2>

            {/* if card is collapsed */}
            {!isActive && (
                <div className="mt-2 ml-6 text-gray-500">
                    {/* bullet points in the short desc */}
                    {tldr.map((datum, idx) => (
                        <li key={idx}>
                            {datum}
                        </li>
                    ))}
                </div>
            )}

            {/* if card is expanded */}
            {isActive && (
                <div className="mt-2 space-y-4">
                    {/*<p className="text-gray-700">
                        {body}
                    </p>
                    {img && (
                        <img src={img} alt={title} className="w-full rounded-lg object-cover" />
                    )}*/}
                    <p className="text-gray-700">
                        {intro}
                    </p>
                    <div className="ml-6">
                        {body.map((datum, idx) => (
                            <Bullets key={idx} {...datum} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
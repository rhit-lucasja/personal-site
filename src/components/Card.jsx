import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Bullet from './Bullet'

const Card = ({ title, tldr, intro, body, img }) => {
    
    // state for if card is open or closed
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
            <h2 className="text-xl font-bold text-black">
                {title}
            </h2>

            {/* if card is collapsed - forms baseline */}
            <AnimatePresence>
                {!isActive && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0}} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
                        <div className="mt-2 ml-6 text-gray-800">
                            {/* bullet points in the short desc */}
                            {tldr.map((datum, idx) => (
                                <li key={idx}>
                                    {datum}
                                </li>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* if card is expanded - animated */}
            <AnimatePresence>
                {isActive && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
                        <div className="mt-2 overflow-hidden">
                            {/* image within the info card, if provided */}
                            {img && (
                                <img src={img} alt={title} className="float-right max-h-72 object-contain rounded-lg ml-4 mb-2" />
                            )}

                            {/* text within the info card */}
                            <div className="text-gray-800">
                                <p>
                                    {intro}
                                </p>
                                <div className="ml-6">
                                    {body.map((datum, idx) => (
                                        <Bullet key={idx} {...datum} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* button to expand/collapse */}
            <div className="flex justify-center mt-4">
                <button onClick={() => setIsActive(!isActive)} className="cursor-pointer text-gray-400 hover:text-red-900 transition-all text-xl">
                    {isActive ? '⮝' : '⮟'}
                </button>
            </div>
        </div>
    );
};

export default Card;
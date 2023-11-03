"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface FlashCardProps {}

export function FlashCard({}: FlashCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <motion.div
            onClick={handleClick}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.5 }}
            className="w-96 h-64 rounded-lg shadow-lg bg-slate-100 p-4 flex items-center justify-center cursor-pointer"
            style={{
                transformStyle: "preserve-3d",
            }}
        >
            <motion.div
                style={{
                    backfaceVisibility: "revert-layer",
                    scaleX: isFlipped ? -1 : 1,
                }}
            >
                Qual o maior estado do Brasil?
            </motion.div>
        </motion.div>
    );
}

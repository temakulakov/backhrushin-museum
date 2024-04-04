import { motion } from "framer-motion";

interface VerticaleLineProps {
    background: string;
}

const VerticalLine = ({ background }: VerticaleLineProps) => {
    return (
        <motion.div
            style={{
                width: "1.5px",
                height: "200px", // Высота начального состояния линии равна 0
                backgroundColor: background,
            }}
            initial={{ scaleY: 0 }} // Начальное состояние: линия вытянута вдоль оси Y
            animate={{ scaleY: 1 }} // Конечное состояние: линия полностью отрисована
            transition={{ duration: 0.4 }} // Длительность анимации
        />
    );
};

export default VerticalLine;
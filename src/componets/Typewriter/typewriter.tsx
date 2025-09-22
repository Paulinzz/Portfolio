import { Typography, type TypographyProps } from "@mui/material";
import { useEffect, useState } from "react";

type Variant = TypographyProps["variant"];

interface TypewriterProps {
  text: string;
  delay: number;
  variant?: Variant;
  color?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay, variant = "body1", color }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // reseta o typewriter quando o texto muda
  useEffect(() => {
    setCurrentText("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex >= text.length) return;
    const timeout = setTimeout(() => {
      setCurrentText(prev => prev + text[currentIndex]);
      setCurrentIndex(i => i + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text]);

  return (
    <Typography variant={variant} color={color} textAlign="center">
      {currentText}
    </Typography>
  );
};

export default Typewriter;

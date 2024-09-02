import { Box, keyframes } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const animation = keyframes`
  from {
    scale: 1
  }

  to {
    scale: 1.05
  }
`

const GameCardContainer = ({ children }: Props) => {
  const myAmazingAnimation = `${animation} 1 0.5s`
  return (
    <Box 
      _hover={{
        animation: myAmazingAnimation
      }}

      borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;

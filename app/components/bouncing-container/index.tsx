import { Box } from "@chakra-ui/react";
import { ComponentProps, ReactNode } from "react";
import { MotionBox } from "../motion-box";

export function BouncingContainer({
  children,
  ...props
}: { children: ReactNode } & ComponentProps<typeof Box>) {
  return (
    <Box {...props}>
      <MotionBox
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        // @ts-expect-error
        transition={{ times: [0, 0.8, 1], repeat: Infinity, duration: 2 }}
      >
        {children}
      </MotionBox>
    </Box>
  );
}

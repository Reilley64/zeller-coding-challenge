import {Box, Flex, Text, useRadio, UseRadioProps} from "@chakra-ui/react";
import {ReactNode} from "react";

function RadioOption(props: UseRadioProps & { children: ReactNode }) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />

      <Flex
        {...checkbox}
        data-testid={"radio-" + props.value}
        sx={{
          alignItems: "center",
          py: 2,
          px: 3,

          borderRadius: "md",

          cursor: "pointer",

          _checked: {
            background: "blueAlpha.300",

            "& .checkmark-outer": {
              borderColor: "blue.500",

              "& .checkmark-inner": {
                background: "blue.500",
              },
            },
          },
        }}
      >
        <Box
          className="checkmark-outer"
          sx={{
            h: "16px",
            mr: 2,
            p: 0.5,
            w: "16px",

            borderRadius: "50%",
            borderColor: "gray.200",
            borderWidth: 1
          }}
        >
          <Box className="checkmark-inner" sx={{ h: "100%", w: "100%", borderRadius: "50%" }} />
        </Box>

        <Text as="span">{props.children}</Text>
      </Flex>
    </Box>
  );
}

export default RadioOption;

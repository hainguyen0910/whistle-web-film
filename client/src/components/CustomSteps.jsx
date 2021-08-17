import { Button, Center, Icon, Text } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import React from 'react';
import { MdArrowBack, MdArrowForward, MdCheckCircle } from 'react-icons/md';

function CustomSteps({ steps, disabledNextStep, setDisabledNextStep }) {
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 0,
  });
  if (activeStep === 1) {
    setDisabledNextStep(false);
  }
  return (
    <>
      <Steps state="loading" activeStep={activeStep}>
        {steps.map(({ label, component, icon, description }) => (
          <Step label={label} key={label} icon={icon} description={description}>
            {component}
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Center flexDir="column">
          <Icon as={MdCheckCircle} color="green.500" w="500px" h="500px" />
          <Text fontSize="2xl" fontWeight="md">
            Sign up and Payment successfully!!!
          </Text>
          <Button
            rightIcon={<MdArrowForward />}
            mt="1rem"
            colorScheme="teal"
            size="lg"
          >
            Watch now!
          </Button>
        </Center>
      ) : (
        <Center
          mt="2rem"
          w="100%"
          alignItems="center"
          justifyContent="space-around !important"
        >
          {activeStep > 0 && activeStep < steps.length && (
            <Button
              leftIcon={<MdArrowBack />}
              colorScheme="teal"
              size="md"
              onClick={prevStep}
              variant="outline"
            >
              Prev
            </Button>
          )}
          {activeStep >= 0 && activeStep < steps.length && (
            <Button
              rightIcon={<MdArrowForward />}
              colorScheme="teal"
              size="md"
              onClick={nextStep}
              disabled={disabledNextStep}
            >
              Next
            </Button>
          )}
        </Center>
      )}
    </>
  );
}

export default CustomSteps;

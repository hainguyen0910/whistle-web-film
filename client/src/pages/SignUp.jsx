import {
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import CardPayment from 'components/CardPayment';
import CustomModal from 'components/CustomModal';
import CustomSteps from 'components/CustomSteps';
import Logo from 'components/Logo';
import ServicePack from 'components/ServicePack';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import { FiClipboard, FiDollarSign, FiUser } from 'react-icons/fi';
import * as yup from 'yup';

const Blur = (props) => (
  <Icon
    width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
    zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
    height="560px"
    viewBox="0 0 528 560"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="71" cy="61" r="111" fill="#F56565" />
    <circle cx="244" cy="106" r="139" fill="#ED64A6" />
    <circle cy="291" r="139" fill="#ED64A6" />
    <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
    <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
    <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
    <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
  </Icon>
);

const contentPacks = [
  {
    title: 'Personal',
    price: 70,
    unit: 'month',
    features: [
      'Lorem, ipsum dolor.',
      'Lorem, ipsum dolor.',
      'Lorem, ipsum dolor.',
    ],
  },
  {
    title: 'Family',
    price: 100,
    unit: 'month',
    features: [
      'Lorem, ipsum dolor.',
      'Lorem, ipsum dolor.',
      'Lorem, ipsum dolor.',
      'Lorem, ipsum dolor.',
      'Lorem, ipsum dolor.',
    ],
  },
  {
    title: 'Personal',
    price: 70,
    unit: 'month',
    features: [
      'Lorem, ipsum dolor.',
      'Lorem, ipsum dolor.',
      'Lorem, ipsum dolor.',
    ],
  },
];

function SignUp() {
  const [packSelected, setPackSelected] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  const [disabledNextStep, setDisabledNextStep] = useState(true);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //State of the payment
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const handleClick = () => {
    setShow(!show);
  };

  const validationSchemaSignUp = yup.object().shape({
    username: yup
      .string()
      .required('Username cannot be blank!!!')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        'Minimum of 6 characters, at least one letter and one number',
      ),
    email: yup.string().email().required('Email cannot be blank!!!'),
    password: yup
      .string()
      .required('Password cannot be blank!!!')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
        'Minimum of 6 characters, at least one uppercase letter, one lowercase letter, and one number',
      ),
  });

  const SignUpForm = (
    <Center mt="2rem">
      <Stack spacing={4}>
        <Formik
          initialValues={{ username, email, password }}
          validationSchema={validationSchemaSignUp}
        >
          {(props) => {
            const { setFieldValue } = props;
            if (
              props.isValid &&
              !props.errors.password &&
              props.values.email &&
              props.values.username &&
              props.values.password
            )
              setTimeout(() => setDisabledNextStep(false), 0);
            else {
              setTimeout(() => setDisabledNextStep(true), 0);
            }

            return (
              <Form>
                <Field name="username">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.username && form.touched.username}
                      mt="1rem"
                    >
                      <FormLabel
                        htmlFor="username"
                        display="flex"
                        alignItems="center"
                      >
                        <Text mr={1}>Username</Text>
                        <Icon
                          as={BsFillExclamationCircleFill}
                          color="red.300"
                        />
                      </FormLabel>
                      <Input
                        w="20rem"
                        {...field}
                        id="username"
                        onChange={(e) => {
                          setUsername(e.target.value);
                          setFieldValue('username', e.target.value);
                        }}
                      />
                      <FormErrorMessage maxW="20rem">
                        {form.errors.username}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                      mt="1rem"
                    >
                      <FormLabel
                        htmlFor="email"
                        display="flex"
                        alignItems="center"
                      >
                        <Text mr={1}>Email</Text>
                        <Icon
                          as={BsFillExclamationCircleFill}
                          color="red.300"
                        />
                      </FormLabel>
                      <Input
                        w="20rem"
                        {...field}
                        id="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setFieldValue('email', e.target.value);
                        }}
                      />
                      <FormErrorMessage maxW="20rem">
                        {form.errors.email}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                      mt="1rem"
                    >
                      <FormLabel
                        htmlFor="password"
                        display="flex"
                        alignItems="center"
                      >
                        <Text mr={1}>Password</Text>
                        <Icon
                          as={BsFillExclamationCircleFill}
                          color="red.300"
                        />
                      </FormLabel>

                      <InputGroup size="md" maxW="20rem">
                        <Input
                          w="20rem"
                          pr="4.5rem"
                          type={show ? 'text' : 'password'}
                          placeholder="6+ characters, A-Z, a-z, 0-9"
                          {...field}
                          id="password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                            setFieldValue('password', e.target.value);
                          }}
                        />
                        <InputRightElement width="4.5rem">
                          <Button
                            type="button"
                            h="1.75rem"
                            size="sm"
                            onClick={handleClick}
                          >
                            {show ? 'Hide' : 'Show'}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage maxW="20rem">
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Form>
            );
          }}
        </Formik>
      </Stack>
    </Center>
  );

  const ListPack = (
    <Center>
      {/* {setDisabledNextStep(false)} */}
      {contentPacks.map((item, index) => (
        <ServicePack
          {...item}
          key={index}
          keyIndex={index}
          isSelected={index === packSelected && true}
          setIsSelected={setPackSelected}
        />
      ))}
    </Center>
  );

  const Payment = (
    <Flex w="100%" justifyContent="space-between">
      <ServicePack {...contentPacks[packSelected]} />
      <CardPayment
        content={{
          number,
          setNumber,
          name,
          setName,
          expiry,
          setExpiry,
          cvc,
          setCvc,
        }}
        setDisabledNextStep={setDisabledNextStep}
      />
    </Flex>
  );

  const steps = [
    {
      label: 'Step 1',
      description: 'Information',
      icon: FiUser,
      component: SignUpForm,
      disabled: false,
    },
    {
      label: 'Step 2',
      description: 'Service pack',
      icon: FiClipboard,
      component: ListPack,
      disabled: false,
    },
    {
      label: 'Step 3',
      description: 'Pay',
      icon: FiDollarSign,
      component: Payment,
      disabled: false,
    },
  ];

  return (
    <Stack color="#1a202c" minH="100vh">
      <Flex
        justify="space-between"
        p="4"
        align="center"
        zIndex="1"
        position="relative"
      >
        <Logo />
        <Button colorScheme="teal" onClick={onOpen}>
          Sign In
        </Button>
      </Flex>

      <Divider />

      <Heading
        lineHeight={1.1}
        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
        textAlign="center"
      >
        <Text
          as="span"
          bgGradient="linear(to-r, red.400,pink.400)"
          bgClip="text"
        >
          SIGN UP
        </Text>
      </Heading>

      <VStack width="100%">
        <Flex w="50%" flexDir="column">
          <CustomSteps
            steps={steps}
            disabledNextStep={disabledNextStep}
            setDisabledNextStep={setDisabledNextStep}
          />
        </Flex>
      </VStack>

      <Blur position="absolute" style={{ filter: 'blur(70px)' }} />

      {/* Modal sign in */}
      <CustomModal
        title="Sign In"
        isOpen={isOpen}
        onClose={onClose}
        // onClick={() => alert(123)}
        closeButton={false}
      >
        <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
          <Stack align="center">
            <Heading fontSize="2xl">Sign in to your account</Heading>
            <Text fontSize="lg" color="gray.600">
              Ready to{' '}
              <Link color="blue.400" href="/">
                watch?
              </Link>
              ✌️
            </Text>
          </Stack>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Username</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={5}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                justify="flex-end"
              >
                <Link color="blue.400" href="/">
                  Forgot password?
                </Link>
              </Stack>
              <Button
                bg="green.400"
                color="white"
                _hover={{
                  bg: 'green.500',
                }}
              >
                Sign in
              </Button>
              <Text fontSize="lg" color="gray.600">
                Don&apos;t have account,{' '}
                <Link color="blue.400" href="/">
                  sign up now?
                </Link>
                ✌️
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </CustomModal>
    </Stack>
  );
}

export default SignUp;

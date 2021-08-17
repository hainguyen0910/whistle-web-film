import {
  Box,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import Card from 'react-credit-cards';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from 'utils/payment';
import * as yup from 'yup';

function CardPayment({ content, setDisabledNextStep }) {
  const { number, setNumber, name, setName, expiry, setExpiry, cvc, setCvc } =
    content;

  const [focused, setFocused] = useState('');

  const validationSchemaPayment = yup.object().shape({
    number: yup
      .number()
      .typeError('You must specify a number')
      .required('Card number cannot be blank!!!'),
    name: yup.string().required('Name cannot be blank!!!'),
    expiry: yup.string().required('Valid thru cannot be blank!!!'),
    cvc: yup
      .number('Please enter number!!!')
      .typeError('You must specify a number')
      .required('CVC cannot be blank!!!'),
  });

  const handleInputFocus = ({ target }) => {
    setFocused(target.name);
  };

  const handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      setNumber(formatCreditCardNumber(target.value));
    } else if (target.name === 'expiry') {
      setExpiry(formatExpirationDate(target.value));
    } else if (target.name === 'cvc') {
      setCvc(formatCVC(target.value));
    } else {
      setName(target.value);
    }
  };

  return (
    <Box m="2rem 1rem" p="1rem 4rem">
      <Card
        number={number && number}
        name={name && name}
        expiry={expiry && expiry}
        cvc={cvc && cvc}
        focused={focused}
        preview
        issuer="visa"
      />
      <Center mt="2rem">
        <Stack spacing={4}>
          <Formik
            initialValues={{ number, name, expiry, cvc }}
            validationSchema={validationSchemaPayment}
          >
            {(props) => {
              const { setFieldValue } = props;
              if (
                props.isValid &&
                !props.errors.number &&
                props.values.name &&
                props.values.expiry &&
                props.values.cvc
              )
                setTimeout(() => setDisabledNextStep(false), 0);
              else {
                setTimeout(() => setDisabledNextStep(true), 0);
              }
              return (
                <Form>
                  <Field name="number">
                    {({ field, form }) => (
                      <FormControl
                        mt="1rem"
                        isInvalid={form.errors.number && form.touched.number}
                      >
                        <FormLabel
                          htmlFor="number"
                          display="flex"
                          alignItems="center"
                        >
                          <Text mr={1}>Card number</Text>
                          <Icon
                            as={BsFillExclamationCircleFill}
                            color="red.300"
                          />
                        </FormLabel>
                        <Input
                          {...field}
                          type="tel"
                          name="number"
                          value={number}
                          onChange={(e) => {
                            setFieldValue(
                              'number',
                              formatCreditCardNumber(e.target.value),
                            );
                            handleInputChange(e);
                          }}
                          onFocus={handleInputFocus}
                        />
                        <FormErrorMessage maxW="20rem">
                          {form.errors.number}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="name">
                    {({ field, form }) => (
                      <FormControl
                        mt="1rem"
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel
                          htmlFor="name"
                          display="flex"
                          alignItems="center"
                        >
                          <Text mr={1}>Name</Text>
                          <Icon
                            as={BsFillExclamationCircleFill}
                            color="red.300"
                          />
                        </FormLabel>
                        <Input
                          {...field}
                          value={name}
                          type="text"
                          name="name"
                          onFocus={handleInputFocus}
                          onChange={(e) => {
                            setFieldValue('name', e.target.value);
                            handleInputChange(e);
                          }}
                        />
                        <FormErrorMessage maxW="20rem">
                          {form.errors.name}
                          123
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <HStack
                    spacing="4"
                    justifyContent="space-between"
                    alignItems="flex-end"
                  >
                    <Field name="expiry">
                      {({ field, form }) => (
                        <FormControl
                          mt="1rem"
                          isInvalid={form.errors.expiry && form.touched.expiry}
                        >
                          <FormLabel
                            htmlFor="expiry"
                            display="flex"
                            alignItems="center"
                          >
                            <Text mr={1}>ValidThru</Text>
                            <Icon
                              as={BsFillExclamationCircleFill}
                              color="red.300"
                            />
                          </FormLabel>
                          <Input
                            {...field}
                            value={expiry}
                            type="tel"
                            name="expiry"
                            placeholder="MM/YY"
                            onFocus={handleInputFocus}
                            onChange={(e) => {
                              setFieldValue(
                                'expiry',
                                formatExpirationDate(e.target.value),
                              );
                              handleInputChange(e);
                            }}
                          />
                          <FormErrorMessage maxW="20rem">
                            {form.errors.expiry}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="cvc">
                      {({ field, form }) => (
                        <FormControl
                          mt="1rem"
                          isInvalid={form.errors.cvc && form.touched.cvc}
                        >
                          <FormLabel
                            htmlFor="cvc"
                            display="flex"
                            alignItems="center"
                          >
                            <Text mr={1}>CVC</Text>
                            <Icon
                              as={BsFillExclamationCircleFill}
                              color="red.300"
                            />
                          </FormLabel>
                          <Input
                            {...field}
                            type="tel"
                            name="cvc"
                            value={cvc}
                            onFocus={handleInputFocus}
                            onChange={(e) => {
                              setFieldValue('cvc', formatCVC(e.target.value));
                              handleInputChange(e);
                            }}
                          />
                          <FormErrorMessage maxW="20rem">
                            {form.errors.cvc}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </HStack>
                </Form>
              );
            }}
          </Formik>
        </Stack>
      </Center>
    </Box>
  );
}

export default CardPayment;

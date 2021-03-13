import React, { useState } from 'react';
import {
  Button,
  Flex,
  FormLabel,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper, Stack
} from '@chakra-ui/react';


export default function Home() {
  const [numOfGlasses, setNumOfGlasses] = useState('');
  const [glassVolume, setGlassVolume] = useState('');

  function getSpoons(numOfGlasses) {
    return 14 * numOfGlasses / 7;
  }

  function getWater(numOfGlasses, glassVolume) {
    if (numOfGlasses > 1) {
      return 14.285714285714 * glassVolume * numOfGlasses / 100;
    } else {
      return glassVolume / 7;
    }
  }

  function getMilk(numOfGlasses, glassVolume) {
    if (numOfGlasses > 1) {
      return 85.714285714286 * glassVolume * numOfGlasses / 100;
    } else {
      return glassVolume - getWater(numOfGlasses, glassVolume);
    }
  }


  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('O botão foi clicado.');

    return (
      console.log(`
      Ingredientes: \n
        [+] ${getSpoons(numOfGlasses)} colheres de pó de capuccino. (Tamanho_da_colher = "sopa")
        [+] ${getWater(numOfGlasses, glassVolume)}ml de água.
        [+] ${getMilk(numOfGlasses, glassVolume)}ml de leite.`
      )
    );

  }




  return (
    <Flex
      as="main"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        as="form"
        onSubmit={handleSubmit}
        backgroundColor="orange.800"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%"
        maxW="400px"
      >
        <Stack>
          <Heading color="yellow.50" textAlign="center" marginBottom={6}>
            Receita de Capuccino
            </Heading>
          <FormLabel color="yellow.50" htmlFor="numOfGlasses">
            Número de copos
          </FormLabel>
          <NumberInput
            name="numOfGlasses"
            color="yellow.100"
            focusBorderColor="yellow.50"
            marginBottom={6}
            onChange={e => setNumOfGlasses(e)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormLabel color="yellow.50" htmlFor="glassVolume">
            Volume do copo em ml
          </FormLabel>
          <NumberInput
            name="glassVolume"
            color="yellow.100"
            focusBorderColor="yellow.50"
            onChange={e => setGlassVolume(e)}

          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Stack>
        <Button
          type="submit"
          backgroundColor="yellow.50"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'yellow.300' }}
          focusBorderColor="yellow.50"
        >
          CALCULAR
        </Button>
      </Flex>
    </Flex >
  );
}

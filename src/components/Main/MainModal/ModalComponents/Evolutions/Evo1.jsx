import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
//Styles
import s from '../../MainModal.module.scss';
export const Evo1 = ({ evochain, setPokemon }) => {
  return (
    <>
      <Flex
        w={['100%', '25%']}
        cursor="pointer"
        alignItems="center"
        justifyContent="center"
        onClick={() => setPokemon(evochain.evo1)}
        flexDirection="column"
      >
        <Image
          w={['75px', '100%']}
          src={evochain.evo1.sprites.other['official-artwork'].front_default}
        />
        <Text className={s.evochainName}>{evochain.evo1.name}</Text>
        <Box className={s.types}>
          {evochain.evo1.types.map((type, i) => {
            return (
              <Box
                margin="0 5px"
                w="50px"
                // chakra styles
                background={`${type.type.name}`}
                key={i}
                display="flex"
                justifyContent="center"
                borderRadius="7px"
              >
                <Text
                  h="20px"
                  alignItems="center"
                  textTransform="uppercase"
                  display="flex"
                  fontFamily="exo"
                  fontSize="10px"
                  opacity="0.6"
                  fontWeight="700"
                >
                  {type.type.name}
                </Text>
              </Box>
            );
          })}
        </Box>
      </Flex>
    </>
  );
};

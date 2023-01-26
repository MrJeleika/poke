import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
//Styles
import s from '../../MainModal.module.scss';
export const Evo3 = ({ evochain, setPokemon }) => {
  return (
    <>
      {evochain.evo3.map((evo3Pokemon, i) => {
        return (
          <React.Fragment key={i}>
            <Flex
              cursor="pointer"
              w="100%"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              onClick={() => setPokemon(evo3Pokemon)}
            >
              <Image
                src={
                  evo3Pokemon.sprites.other['official-artwork'].front_default
                }
              />
              <Text className={s.evochainName}>{evo3Pokemon.name}</Text>
              <Box className={s.types}>
                {evo3Pokemon.types.map((type, i) => {
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
          </React.Fragment>
        );
      })}
    </>
  );
};

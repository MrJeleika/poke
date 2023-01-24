import { Box, Flex, Text } from '@chakra-ui/react';

import React from 'react';
//Styles
import s from '../MainModal.module.scss';
//Components
import { Evo1 } from './Evolutions/Evo1';
import { Evo2 } from './Evolutions/Evo2';
import { Evo3 } from './Evolutions/Evo3';
import { Preloader } from 'common/Preloader';

export const EvoChain = (props) => {
  const { evochain } = props;
  return (
    <>
      {/* Check if evochain exist */}
      {Object.keys(evochain).length !== 0 ? (
        <Flex
          justifyContent="space-evenly"
          flexDirection={['column', 'row']}
          alignItems="center"
        >
          <Evo1 {...props} />
          {/* Check if 2nd evolution exist */}
          {evochain.evo2[0] ? (
            <>
              <Box
                w="12.5%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Text className={s.evochainText}>{'>'}</Text>
              </Box>
              <Flex
                w="25%"
                justifyContent="center"
                flexDirection="column"
                flexWrap="wrap"
              >
                <Evo2 {...props} />
              </Flex>
              {/* Check if 3rd evolution exist */}
              {evochain.evo3.length > 0 ? (
                <>
                  <Box
                    w="12.5%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text className={s.evochainText}>{'>'}</Text>
                  </Box>
                  <Flex
                    w="25%"
                    flexDirection="column"
                    justifyContent="center"
                    flexWrap="wrap"
                  >
                    <Evo3 {...props} />
                  </Flex>
                </>
              ) : null}
            </>
          ) : null}
        </Flex>
      ) : (
        <Preloader type="evo" />
      )}
    </>
  );
};

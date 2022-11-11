import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { APIgetEvolutionChain, APIgetPokemonByName } from 'api/api';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//Styles
import s from './MainModal.module.scss';
export const MainModal = (props) => {
  const { show, setShow, pokemon } = props;
  const [evochain, setEvochain] = useState({});

  useEffect(() => {
    const getEvoChain = async () => {
      let a = await APIgetEvolutionChain(
        pokemon.evolution_chain.url.split('/')[6],
      );
      // Get img for evo chain
      let evo1, evo2, evo3;
      evo1 = await APIgetPokemonByName(a.chain.species.name);
      if (a.chain.evolves_to[0]) {
        evo2 = await APIgetPokemonByName(a.chain.evolves_to[0].species.name);
        if (a.chain.evolves_to[0].evolves_to[0]) {
          evo3 = await APIgetPokemonByName(
            a.chain.evolves_to[0].evolves_to[0].species.name,
          );
        }
      }

      setEvochain({ ...a, evo1, evo2, evo3 });
    };
    getEvoChain();
  }, []);
  console.log(evochain);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal
        className={s.modal}
        dialogClassName={s.modal2}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className={s.header} closeButton></Modal.Header>
        <Modal.Body className={s.body}>
          <img
            className={s.img}
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt=""
          />
          <div className={s.number}>#{pokemon.id}</div>
          <div className={s.name}>
            {/* Uppercase first letter */}
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </div>
          {/* Types */}
          <div className={s.types}>
            {pokemon.types.map((type, i) => {
              return (
                <Box
                  margin="0 5px"
                  w="80px"
                  // chakra styles
                  background={`${type.type.name}`}
                  key={i}
                  display="flex"
                  justifyContent="center"
                  borderRadius="7px"
                >
                  <Text
                    h="30px"
                    alignItems="center"
                    textTransform="uppercase"
                    display="flex"
                    fontFamily="exo"
                    fontSize="16px"
                    opacity="0.6"
                    fontWeight="700"
                  >
                    {type.type.name}
                  </Text>
                </Box>
              );
            })}
          </div>

          <Text className={`${s.pokedexTitle} ${s.title}`}>Pokédex entry</Text>
          <Text className={s.pokedexText}>
            {pokemon.flavor_text_entries[1].flavor_text.replace('\f', ' ')}
          </Text>

          <div className={s.parameters}>
            <div className={s.parameter}>
              <div className={`${s.parameterTitle} ${s.title}`}> Height</div>
              <div className={s.parameterValue}> {pokemon.height / 10}m</div>
            </div>
            <div className={s.parameter}>
              <div className={`${s.parameterTitle} ${s.title}`}> Weight</div>
              <div className={s.parameterValue}>{pokemon.weight / 10}kg</div>
            </div>
            <div className={s.parameter}>
              <div className={`${s.parameterTitle} ${s.title}`}>
                {' '}
                CAPTURE RATE
              </div>
              <div className={s.parameterValue}> {pokemon.capture_rate}</div>
            </div>
            <div className={s.parameter}>
              <div className={`${s.parameterTitle} ${s.title}`}> BASE EXP</div>
              <div className={s.parameterValue}>{pokemon.base_experience}</div>
            </div>
          </div>

          <div className={`${s.statsTitle} ${s.title}`}>Stats</div>
          <Flex className={s.stats}>
            <Flex className={s.stat}>
              <Box className={s.statShape} background="fighting">
                HP
              </Box>
              <Text className={s.statText}>{pokemon.stats[0].base_stat}</Text>
            </Flex>
            <Flex className={s.stat}>
              <Box background="fire" className={s.statShape}>
                ATK
              </Box>
              <Text className={s.statText}>{pokemon.stats[1].base_stat}</Text>
            </Flex>
            <Flex className={s.stat}>
              <Box background="electric" className={s.statShape}>
                DEF
              </Box>
              <Text className={s.statText}>{pokemon.stats[2].base_stat}</Text>
            </Flex>
            <Flex className={s.stat}>
              <Box className={s.statShape} background="ice">
                SPA
              </Box>
              <Text className={s.statText}>{pokemon.stats[3].base_stat}</Text>
            </Flex>
            <Flex className={s.stat}>
              <Box className={s.statShape} background="grass">
                SPO
              </Box>
              <Text className={s.statText}>{pokemon.stats[4].base_stat}</Text>
            </Flex>
            <Flex className={s.stat}>
              <Box className={s.statShape} background="fairy">
                SPD
              </Box>
              <Text className={s.statText}>{pokemon.stats[5].base_stat}</Text>
            </Flex>
            <Flex
              background="#67b4de80"
              borderRadius="20px"
              flexDirection="column"
              p="5px"
              transform="translate(0, -5px)"
            >
              <Box className={s.statShape} background="water">
                TOT
              </Box>
              <Text className={s.statText}>
                {pokemon.stats[0].base_stat +
                  pokemon.stats[1].base_stat +
                  pokemon.stats[2].base_stat +
                  pokemon.stats[3].base_stat +
                  pokemon.stats[4].base_stat +
                  pokemon.stats[5].base_stat}
              </Text>
            </Flex>
          </Flex>

          <Text className={`${s.evolutionTitle} ${s.title}`}>Evolution</Text>

          {Object.keys(evochain).length !== 0 ? (
            <Flex justifyContent="center">
              <Box w="20%">
                <Image
                  src={
                    evochain.evo1.sprites.other['official-artwork']
                      .front_default
                  }
                />
              </Box>
              {/* Check if 2nd evolution exist */}
              {evochain.evo2 ? (
                <>
                  <Box
                    w="20%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text className={s.evochainText}>
                      lvl{' '}
                      {
                        evochain.chain.evolves_to[0].evolution_details[0]
                          .min_level
                      }
                    </Text>
                  </Box>
                  <Box w="20%">
                    <Image
                      src={
                        evochain.evo2.sprites.other['official-artwork']
                          .front_default
                      }
                    />
                  </Box>
                  {/* Check if 3rd evolution exist */}
                  {evochain.evo3 ? (
                    <>
                      <Box
                        w="20%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Text className={s.evochainText}>
                          lvl{' '}
                          {
                            evochain.chain.evolves_to[0].evolves_to[0]
                              .evolution_details[0].min_level
                          }
                        </Text>
                      </Box>
                      <Box w="20%">
                        <Image
                          src={
                            evochain.evo3.sprites.other['official-artwork']
                              .front_default
                          }
                        />
                      </Box>
                    </>
                  ) : null}
                </>
              ) : null}
            </Flex>
          ) : null}
        </Modal.Body>
      </Modal>
    </>
  );
};

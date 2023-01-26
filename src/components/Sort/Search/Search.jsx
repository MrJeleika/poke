import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
// Styles
import s from './Search.module.scss';
//Misc
import { PokeballSVG } from 'components/svgs/pokeball';
export const Search = (props) => {
  const { searchPokemonByName, setPokemonList } = props;
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={(value, { resetForm }) => {
          // Check empty value
          if (value.name === '') {
            setPokemonList(0, 50);
            return null;
          }
          isFinite(+value.name) // if num
            ? searchPokemonByName(+value.name)
            : searchPokemonByName(value.name.toLowerCase());
          resetForm();
        }}
      >
        <Form className={s.form}>
          <Field
            id="name"
            name="name"
            placeholder="Search your Pokémon"
            className={s.input}
          ></Field>
          <button type="submit" className={s.button}>
            <PokeballSVG />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

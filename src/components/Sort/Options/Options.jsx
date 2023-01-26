// Styles
import s from './Options.module.scss';
//Components
import { SearchSVG } from 'components/svgs/searchSVG';
import { SelectField } from './Select/Select';
// Misc
import { Field, Form, Formik } from 'formik';
import { OptionsValidationSchema } from 'helpers/_validate';
import { Box, Flex } from '@chakra-ui/react';

export const Options = (props) => {
  const {
    state,
    setPokemonList,
    setTypeFilter1,
    setTypeFilter2,
    setWeightFilter,
    setHeightFilter,
  } = props;
  return (
    <div>
      <Formik
        initialValues={{
          from: '1',
          to: '898',
          type1: 'all',
          type2: 'all',
          weakness: '',
          height: '0 500000',
          weight: '0 500000',
        }}
        validationSchema={OptionsValidationSchema}
        onSubmit={(values) => {
          // check values
          if (+values.from > +values.to) return null;
          setPokemonList(
            values.from ? +values.from - 1 : null,
            values.to ? +values.to : null,
          );
          setTypeFilter1(values.type1);
          setTypeFilter2(values.type2);
          setWeightFilter(
            values.weight.split(' ')[0],
            values.weight.split(' ')[1],
          );
          setHeightFilter(
            values.height.split(' ')[0],
            values.height.split(' ')[1],
          );
        }}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <Flex w="100%" flexWrap="wrap">
              <div className={s.option}>
                <label htmlFor="from" className={s.label}>
                  from
                </label>
                <Field
                  id="from"
                  name="from"
                  type="text"
                  placeholder="1"
                  className={
                    errors.from && touched.from
                      ? `${s.textField} ${s.error}`
                      : s.textField
                  }
                />
                <label htmlFor="to" className={s.label}>
                  to
                </label>
                <Field
                  id="to"
                  name="to"
                  type="text"
                  placeholder="898"
                  className={
                    errors.to && touched.to
                      ? `${s.textField} ${s.error}`
                      : s.textField
                  }
                />
              </div>
              <div className={s.option}>
                <Flex
                  alignItems="center"
                  display={['block', 'flex']}
                  justifyContent={['center', 'right', 'right']}
                  w={['100%', '100%', '40%']}
                  mb={['10px', '10px', '0']}
                >
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    mb={['10px', '0', '0']}
                  >
                    <label htmlFor="type1" className={s.label}>
                      type
                    </label>
                    <Field
                      name={'type1'}
                      option="type"
                      id="type1"
                      component={SelectField}
                    />
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <label htmlFor="type2" className={s.label}>
                      type
                    </label>
                    <Field
                      name={'type2'}
                      option="type"
                      id="type2"
                      component={SelectField}
                    />
                  </Flex>
                </Flex>
                <Flex
                  alignItems="center"
                  flexDirection={['column', 'row', 'row']}
                  justifyContent={['center', 'right', 'right']}
                  w={['100%', '100%', '60%']}
                >
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    mb={['10px', '0', '0']}
                  >
                    <label htmlFor="weight" className={s.label}>
                      weight
                    </label>
                    <Field
                      option="weight"
                      name={'weight'}
                      id="weight"
                      component={SelectField}
                    />
                  </Flex>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    mb={['10px', '0', '0']}
                  >
                    <label htmlFor="height" className={s.label}>
                      height
                    </label>
                    <Field
                      option="height"
                      name={'height'}
                      id="height"
                      component={SelectField}
                    />
                  </Flex>
                  <button
                    type="submit"
                    disabled={state.isFetching}
                    className={s.button}
                  >
                    <SearchSVG />
                  </button>
                </Flex>
              </div>
            </Flex>
          </Form>
        )}
      </Formik>
    </div>
  );
};

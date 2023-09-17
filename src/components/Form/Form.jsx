import { useForm } from 'react-hook-form';

import {
  Container,
  FormLayout,
  InputWrapper,
  Layout,
  SubmitBtn,
  Terms,
  Title,
} from './styles';

const Form = () => {
  const { handleSubmit, register, formState, watch } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      inquiry: '',
      terms: false,
    },
  });
  console.log(formState.errors);
  const onSubmit = (values, e) => {
    console.log('Form Submitted:', values);
    e.target.reset();
  };

  const filledForm = watch('terms');

  return (
    <Layout>
      <Container>
        <Title>
          {formState.isSubmitSuccessful
            ? 'Hemos recibido tu consulta con exito!'
            : 'Escribenos tu consulta'}
        </Title>
        <FormLayout onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <label htmlFor="name">Nombre:</label>
            <input
              {...register('name', {
                required: {
                  value: true,
                  message: '❌ Debes introducir un nombre!',
                },
                minLength: {
                  value: 3,
                  message: 'El nombre debe tener minimo 3 letras.',
                },
              })}
              type="text"
              id="name"
            />
            {formState.errors.name ? (
              <p style={{ color: 'red' }}>{formState.errors.name.message}</p>
            ) : null}
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="phone">Teléfono:</label>
            <input
              {...register('phone', {
                required: {
                  value: true,
                  message: '❌ Debes introducir un numero de teléfono!',
                },
                maxLength: {
                  value: 12,
                  message: 'El teléfono no puede superar los 12 numeros.',
                },
              })}
              type="number"
              id="phone"
            />
            {formState.errors.phone && (
              <p style={{ color: 'red' }}>{formState.errors.phone.message}</p>
            )}
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="email">Email:</label>
            <input
              {...register('email', {
                required: {
                  value: true,
                  message: '❌ Debes introducir un email!',
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'ejemplo@email.com',
                },
              })}
              type="email"
              id="email"
            />
            {formState.errors.email && (
              <p style={{ color: 'red' }}>{formState.errors.email.message}</p>
            )}
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="inquiry">Motivo de consulta:</label>
            <textarea
              {...register('inquiry', {
                required: {
                  value: true,
                  message: '❌ Escribe tu motivo de consulta!',
                },
                minLength: {
                  value: 10,
                  message: 'Escribe al menos el asunto.',
                },
              })}
              cols="40"
              rows="4"
              id="inquiry"
            />
            {formState.errors.inquiry && (
              <p style={{ color: 'red' }}>{formState.errors.inquiry.message}</p>
            )}
          </InputWrapper>
          <Terms>
            <label htmlFor="terms">
              Acepto los términos de tratamiento de datos aqui procesados.
            </label>
            <input
              {...register('terms', { required: true })}
              type="checkbox"
              id="terms"
            />
          </Terms>
          {filledForm === true && formState.isDirty ? (
            <>
              <SubmitBtn disabled={!formState.isDirty}>
                Enviar
                {/* {formState.isSubmitSuccessful ? 'Enviado!' : 'Enviar'} */}
                {/* {formState.isSubmitSuccessful ? 'Hemos recibido tu consulta!' : 'Enviar'} */}
              </SubmitBtn>
            </>
          ) : null}
        </FormLayout>
      </Container>
    </Layout>
  );
};

export default Form;

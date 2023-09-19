import { useForm } from 'react-hook-form';

import { SubmitBtn } from '../../Atoms/Button';
import { Input } from '../../Atoms/Input';
import { Label } from '../../Atoms/Label';
import { TextArea } from '../../Atoms/TextArea';
import { Title } from '../../Atoms/Title';
import { Container, FormLayout, InputWrapper, Layout, Terms } from './styles';

const Form = () => {
  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      inquiry: '',
      terms: false,
    },
  });

  const onSubmit = (values, e) => {
    e.target.reset();
  };

  return (
    <Layout>
      <Container>
        <Title
          $color="transparent"
          $fontFamily="'Philosopher', Helvetica, sans-serif"
          $fontSize="48px"
          $padding="0 0 2rem 0"
          $background="conic-gradient(
          from 180deg at 50% 50%,
          rgb(135, 231, 173) 19.64deg,
          rgb(31, 86, 95) 183.37deg
        )"
          $bgClip="text"
          $bgClipKit="text !important"
          $textFillColorKit="transparent"
          $whiteSpace="normal"
          $textAlign="center"
          $fontSizeMobileL="36px"
          $textWrapMobileL="wrap"
        >
          {formState.isSubmitSuccessful
            ? 'Hemos recibido tu consulta con exito!'
            : 'Escríbenos tu consulta'}
        </Title>
        <FormLayout onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Label htmlFor="name">Nombre:</Label>
            <Input
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
            <Label htmlFor="phone">Teléfono:</Label>
            <Input
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
            <Label htmlFor="email">Email:</Label>
            <Input
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
            <Label htmlFor="inquiry">Motivo de consulta:</Label>
            <TextArea
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
            {formState.errors.terms && (
              <p style={{ color: 'red' }}>{formState.errors.terms.message}</p>
            )}
            <Label htmlFor="terms">
              Acepto los términos de tratamiento de datos aqui procesados.
            </Label>
            <Input
              {...register('terms', {
                required: {
                  value: true,
                  message: '❌ Debes aceptar los términos!',
                },
              })}
              type="checkbox"
              id="terms"
            />
          </Terms>
          <SubmitBtn disabled={!formState.isDirty}>Enviar</SubmitBtn>
        </FormLayout>
      </Container>
    </Layout>
  );
};

export default Form;

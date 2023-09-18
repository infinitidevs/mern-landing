/**
 * @vitest-environment jsdom
 */

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';

import Form from '../../components/Templates/Form/Form';

describe('Form', () => {
  test('should render the form without errors', () => {
    render(<Form />);
    expect(screen.getByLabelText('Nombre:')).toBeInTheDocument();
    expect(screen.getByLabelText('Teléfono:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Motivo de consulta:')).toBeInTheDocument();
    expect(
      screen.getByLabelText(
        'Acepto los términos de tratamiento de datos aqui procesados.',
      ),
    ).toBeInTheDocument();
  });
  test('should have correct labels and input types for each form field', () => {
    render(<Form />);
    expect(screen.getByLabelText('Nombre:')).toHaveAttribute('type', 'text');
    expect(screen.getByLabelText('Teléfono:')).toHaveAttribute('type', 'number');
    expect(screen.getByLabelText('Email:')).toHaveAttribute('type', 'email');
    expect(screen.getByLabelText('Motivo de consulta:')).toHaveAttribute('rows', '4');
    expect(
      screen.getByLabelText(
        'Acepto los términos de tratamiento de datos aqui procesados.',
      ),
    ).toHaveAttribute('type', 'checkbox');
  });
  test('should submit the form successfully when all fields are filled out', async () => {
    render(<Form />);
    const nameInput = screen.getByLabelText('Nombre:');
    const phoneInput = screen.getByLabelText('Teléfono:');
    const emailInput = screen.getByLabelText('Email:');
    const inquiryInput = screen.getByLabelText('Motivo de consulta:');
    const termsInput = screen.getByLabelText(
      'Acepto los términos de tratamiento de datos aqui procesados.',
    );

    userEvent.type(nameInput, 'John Doe');
    userEvent.type(phoneInput, '1234567890');
    userEvent.type(emailInput, 'test@example.com');
    userEvent.type(inquiryInput, 'Test inquiry');
    userEvent.click(termsInput);

    userEvent.click(screen.getByText('Enviar'));
  });
  test('should submit the form successfully when all fields are filled out and display the correct submit message', async () => {
    render(<Form />);
    const nameInput = screen.getByLabelText('Nombre:');
    const phoneInput = screen.getByLabelText('Teléfono:');
    const emailInput = screen.getByLabelText('Email:');
    const inquiryInput = screen.getByLabelText('Motivo de consulta:');
    const termsCheckbox = screen.getByLabelText(
      'Acepto los términos de tratamiento de datos aqui procesados.',
    );
    const submitButton = screen.getByRole('button', { name: 'Enviar' });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(inquiryInput, { target: { value: 'Test inquiry' } });
    fireEvent.click(termsCheckbox);
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText('Hemos recibido tu consulta con exito!'),
      ).toBeInTheDocument();
    });
  });
  test('should submit form multiple times without errors', () => {
    render(<Form />);
    const nameInput = screen.getByLabelText('Nombre:');
    const phoneInput = screen.getByLabelText('Teléfono:');
    const emailInput = screen.getByLabelText('Email:');
    const inquiryInput = screen.getByLabelText('Motivo de consulta:');
    const termsCheckbox = screen.getByLabelText(
      'Acepto los términos de tratamiento de datos aqui procesados.',
    );
    const submitButton = screen.getByRole('button', { name: 'Enviar' });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(inquiryInput, { target: { value: 'Test inquiry' } });
    fireEvent.click(termsCheckbox);
    fireEvent.click(submitButton);

    fireEvent.change(nameInput, { target: { value: 'Jane Smith' } });
    fireEvent.change(phoneInput, { target: { value: '0987654321' } });
    fireEvent.change(emailInput, { target: { value: 'test2@example.com' } });
    fireEvent.change(inquiryInput, { target: { value: 'Another inquiry' } });
    fireEvent.click(termsCheckbox);
    fireEvent.click(submitButton);
  });
  test('should disable submit button when all required fields are empty', () => {
    render(<Form />);
    const submitButton = screen.getByRole('button', { name: 'Enviar' });
    expect(submitButton).toBeDisabled();
  });
  test('should disable submit button until all required fields are filled out and terms checkbox is checked', () => {
    render(<Form />);

    const submitButton = screen.getByRole('button', { name: 'Enviar' });
    expect(submitButton).toBeDisabled();

    const nameInput = screen.getByLabelText('Nombre:');
    const phoneInput = screen.getByLabelText('Teléfono:');
    const emailInput = screen.getByLabelText('Email:');
    const inquiryInput = screen.getByLabelText('Motivo de consulta:');
    const termsCheckbox = screen.getByLabelText(
      'Acepto los términos de tratamiento de datos aqui procesados.',
    );

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(inquiryInput, { target: { value: 'Test inquiry' } });
    fireEvent.click(termsCheckbox);
    expect(submitButton).toBeEnabled();
  });
  test('should disable submit button when form is pristine', () => {
    render(<Form />);
    const submitButton = screen.getByRole('button', { name: 'Enviar' });

    expect(submitButton).toBeDisabled();
  });
  test('should render the form with a submit button', () => {
    render(<Form />);
    expect(screen.getByText('Enviar')).toBeInTheDocument();
  });
});

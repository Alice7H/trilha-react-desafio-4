import { InputHTMLAttributes } from 'react';
import { Control } from 'react-hook-form';
import { IFormLogin } from '../../pages/Login/types';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<IFormLogin, any>
  name: "email" | "password";
  errorMessage?: string;
}
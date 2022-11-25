import { MouseEventHandler } from 'react';

export interface IButtonProps  {
	title: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
}
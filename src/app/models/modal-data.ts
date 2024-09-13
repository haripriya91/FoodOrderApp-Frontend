import { ModalType } from './modal-type';

export interface ModalData {
  type: ModalType;
  title: string;
  content?: string;
}

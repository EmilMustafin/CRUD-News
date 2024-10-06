import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Icons } from '@/shared/assets';
import styles from './modal.module.scss';
import { Icon } from '../../icon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modal_overlay}>
      <div className={styles.modal} ref={modalRef}>
        <button className={styles.modal_close} onClick={onClose}>
          <Icon icon={Icons.CROSS} />
        </button>
        {title && <h2 className={styles.modal_title}>{title}</h2>} {children}
      </div>
    </div>,
    document.body,
  );
};

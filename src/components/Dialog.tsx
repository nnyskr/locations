import {
  useRef,
  HTMLProps,
  EventHandler,
  SyntheticEvent,
  useEffect,
} from 'react';
import classNames from 'classnames';
import '../styles/dialog.css';

export default function Dialog({
  open,
  className,
  ...props
}: HTMLProps<HTMLDialogElement>) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      if (ref?.current?.showModal) {
        ref?.current?.showModal();
      }
    } else {
      if (ref?.current?.close) {
        ref.current.close();
      }
    }
  }, [open]);

  const handleCancel: EventHandler<SyntheticEvent<HTMLDialogElement>> = (
    event
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <dialog
        ref={ref}
        onCancel={handleCancel}
        className={classNames('dialog', className)}
        {...props}
      />
    </>
  );
}

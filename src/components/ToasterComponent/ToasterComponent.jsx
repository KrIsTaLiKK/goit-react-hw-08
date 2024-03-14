import { Toaster } from 'react-hot-toast';
import css from './ToasterComponent.module.css';

export const ToasterComponent = () => {
  return (
    <Toaster
      toastOptions={{
        className: `${css.toast}`,
      }}
    />
  );
};

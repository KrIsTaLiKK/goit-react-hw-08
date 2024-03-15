import { Toaster } from 'react-hot-toast';

const ToasterComponent = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: '#1f222f',
          border: '1px solid rgb(28, 28, 177)',
          padding: '20px',
          color: '#ffffff',
          fontSize: '20px',
          textAlign: 'center',
        },
      }}
    />
  );
};

export default ToasterComponent;

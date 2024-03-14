import { Helmet } from 'react-helmet-async';

const HelmetComponent = ({ children }) => {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
};

export default HelmetComponent;

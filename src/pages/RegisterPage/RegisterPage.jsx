import HelmetComponent from '../../components/HelmetComponent/HelmetComponent';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Section from '../../components/Section/Section';

const RegisterPage = () => {
  return (
    <Section>
      <HelmetComponent>Sign Up</HelmetComponent>
      <RegisterForm />
    </Section>
  );
};

export default RegisterPage;

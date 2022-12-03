import App from 'next/app';
import PropTypes from 'prop-types';
import '../styles/global.scss';
import Layout from '../src/components/Layout/Layout';

function MainApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

MainApp.getStaticProps = async (MainAppContext) => (
  { ...await App.getStaticProps(MainAppContext) }
);

MainApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({
    initialReduxState: PropTypes.shape({})
  }).isRequired
};

export default MainApp;

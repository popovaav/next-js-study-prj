import App from 'next/app';
import PropTypes from 'prop-types';

function MainApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
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

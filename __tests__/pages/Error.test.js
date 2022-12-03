import { render } from '../settings/test-utils';
import '@testing-library/jest-dom/extend-expect';
import Error from '../../pages/_error';
import { NOT_FOUND, INTERNAL_SERVER_ERROR } from '../../src/constants/httpStatusCodes';

describe('Sidebar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<Error statusCode={NOT_FOUND} />);
  });

  test('Check error message in page', () => {
    expect(wrapper.getByText(/pageNotFound/)).toBeInTheDocument();
    wrapper.rerender(<Error statusCode={INTERNAL_SERVER_ERROR} />);
    expect(wrapper.getByText(/internalServerError/)).toBeInTheDocument();
  });

  test('Snapshot checking', () => {
    expect(wrapper.container).toMatchSnapshot();
  });
});

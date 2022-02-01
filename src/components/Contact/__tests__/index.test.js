import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact Component', () => {
  it('renders', () => {
    render(<ContactForm />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders submit button', () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId('submit')).toHaveTextContent('Submit');
  });
});

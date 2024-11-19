import { render } from '@testing-library/react';

import SimpleForm from './simple-form';

describe('SimpleForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SimpleForm />);
    expect(baseElement).toBeTruthy();
  });
});

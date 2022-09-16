import { render } from '@testing-library/react';

import Pluto from './Pluto';

describe('Pluto', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Pluto />);
    expect(baseElement).toBeTruthy();
  });
});

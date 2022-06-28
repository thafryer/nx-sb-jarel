import { render } from '@testing-library/react';

import Starburst from './starburst';

describe('Starburst', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Starburst />);
    expect(baseElement).toBeTruthy();
  });
});

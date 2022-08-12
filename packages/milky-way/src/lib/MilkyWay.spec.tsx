import { render } from '@testing-library/react';

import MilkyWay from './MilkyWay';

describe('MilkyWay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MilkyWay />);
    expect(baseElement).toBeTruthy();
  });
});

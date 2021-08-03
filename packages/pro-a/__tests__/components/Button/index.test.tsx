import React from 'react';
import { render } from '@testing-library/react';
import Button from '../../../src/components/Button';

describe('test Button', () => {
  test('test button snapshot', () => {
    const { container } = render(<Button>XXX</Button>);
    expect(container).toMatchSnapshot();
  });
});

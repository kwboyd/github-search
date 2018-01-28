import { ToLocalePipe } from './to-locale.pipe';

describe('ToLocalePipe', () => {
  it('create an instance', () => {
    const pipe = new ToLocalePipe();
    expect(pipe).toBeTruthy();
  });
});

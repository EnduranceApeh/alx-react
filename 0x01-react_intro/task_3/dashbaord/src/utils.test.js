import { getFullYear } from './utils';
import { getFooterCopy } from './utils';
import { getLatestNotification } from './utils';

describe('getFullYear function', () => {
  it('should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
});

describe('getFooterCopy function', () => {
    it('should return correct string for true argument', () => {
      expect(getFooterCopy(true)).toEqual('Footer for true');
    });
  
    it('should return correct string for false argument', () => {
      expect(getFooterCopy(false)).toEqual('Footer for false');
    });
  });

  import { getLatestNotification } from './utils';

describe('getLatestNotification function', () => {
  it('should return the correct notification message', () => {
    expect(getLatestNotification()).toEqual('Latest notification message');
  });
});
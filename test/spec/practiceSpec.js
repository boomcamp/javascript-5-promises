const isNode = new Function(`
  try {
    return this === global;
  } catch (e) {
    return false;
  }
`);

if (isNode()) {
  // test if file is running in a node process
  const fs = require('fs');
  const path = require('path');

  const filePath = path.resolve(__dirname, '../../'); // this should be the root dir
  fs.readdirSync(filePath) // eval all of the js files faking how a browser would execute
    .filter(path => {
      if (path) {
        return /\.js$/.test(path);
      } else {
        return false;
      }
    })
    .forEach(file => {
      global.eval(fs.readFileSync(`${filePath}/${file}`) + '');
    });
}

describe('Promise Practice', function() {
  describe('Problem 1', function() {
    describe('first()', () => {
      it('should be a function', function() {
        expect(first).toBeDefined();
        expect(first).toEqual(jasmine.any(Function));
      });

      it('should return a promise that resolves to "Aodhan"', function(done) {
        first().then(res => {
          expect(res).toEqual('Aodhan');
          done();
        });
      });
    });
  });

  describe('Problem 2', () => {
    describe('last()', function() {
      it('should exist and be a function', function() {
        expect(last).toBeDefined();
        expect(last).toEqual(jasmine.any(Function));
      });

      it('should return a promise that resolves to "Jake"', function(done) {
        last().then(res => {
          expect(res).toBe('Jake');
          done();
        });
      });
    });
  });

  describe('Problem - 3', function() {
    describe('toLarge()', () => {
      it('should be a function', function() {
        expect(toLarge).toBeDefined();
        expect(toLarge).toEqual(jasmine.any(Function));
      });

      it('should resolve numbers <= 10', function(done) {
        toLarge(5).then(n => {
          expect(n).toBe(5);
          done();
        });
      });

      it('should reject numbers > 10', done => {
        toLarge(11).catch(n => {
          expect(n).toBe(11);
          done();
        });
      });
    });
  });

  describe('Problem - 4', function() {
    describe('errorCatcher()', () => {
      it('should be a function', function() {
        expect(errorCatcher).toBeDefined();
        expect(errorCatcher).toEqual(jasmine.any(Function));
      });

      it('should return the error message from "promisesErrors"', done => {
        errorCatcher().then(message => {
          expect(message).toEqual('This is the error I promised');
          done();
        });
      });
    });
  });

  describe('Problem - 5', function() {
    describe('waitFor10()', () => {
      beforeEach(() => {
        jasmine.clock().install();
      });

      afterEach(() => {
        jasmine.clock().uninstall();
      });

      it('should be a function', () => {
        expect(waitFor10).toEqual(jasmine.any(Function));
      });

      it('should resolve after 10 seconds', done => {
        const resolveSpy = jasmine.createSpy('resolveSpy');
        waitFor10().then(res => {
          expect(res).toBeTruthy();
          done();
        });
        expect(resolveSpy).not.toHaveBeenCalled();
        jasmine.clock().tick(10001);
      });
    });
  });

  describe('Problem - 6', function() {
    describe('modifiedResolve', () => {
      it('should equal 20', () => {
        expect(modifiedResolve).toEqual(20);
      });
    });
  });
});

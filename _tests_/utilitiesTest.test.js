let utilities = require('../src/utilities/utilities');


/*
 * Password validation Function test
 */

 test('If invalid passsword - should return false', ()=> {
     let testPW = 'cat';

     let result = utilities.validatePassword(testPW);
     expect(result).toBeFalsy();
 })
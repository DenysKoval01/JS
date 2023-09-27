import { expect } from "chai";
import NumbersValidator from '../../app/numbers_validator.cjs'

describe('getEvenNumbersFromArray',()=>{
    let validator;
    beforeEach(()=>{validator=new NumbersValidator()});
    afterEach(()=>{validator=null});

    it('should return an array of even numbers',()=>{
        const arrayOfNumbers = [5,2,26,211,22];
        const evenNumbersArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
        expect(evenNumbersArray).to.be.eql([2,6,22]);
    })tg=

    it('should throw an error if array is not full of numbers',()=>{
        const arrayOfValues = [5,'2',11,22];
        expect(()=>{
            validator.getEvenNumbersFromArray(arrayOfValues);
        }).to.throw('[5,2,11,22] is not an array of "Numbers"');
    });
});
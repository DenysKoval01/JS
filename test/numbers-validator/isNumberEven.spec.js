import NumbersValidator from "../../app/numbers_validator.cjs";
import {expect} from "chai";

describe('isNumberEven positive test', ()=>{
  let validator;
  beforeEach(()=>{
    validator = new NumbersValidator();
  });

  it('should return true when provided with an even number',()=>{
    const validatorResults = validator.isNumberEven(4);
    expect(validatorResults).to.be.equal(true);
  });

  it('should throw an error when provided a string',()=>{
    expect(()=>{
      validator.isNumberEven('4') 
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });
});

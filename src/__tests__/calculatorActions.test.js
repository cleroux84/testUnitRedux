import { addInputs , subtractInputs, fetchRandomNumber } from '../actions/calculatorActions'
import '../setUpTests';

describe('ACTIONS - Test calculatorActions',()=>{

    it('actionCreator addInputs', () => {
        const add = addInputs(50);
        expect(add.output).toEqual(50);
        expect(add.type).toEqual("ADD_INPUTS")
    });


    it('actionCreator subtractInputs', () => {
        const subtract = subtractInputs(-50);
        expect(subtract.output).toEqual(-50);
        expect(subtract.type).toEqual("SUBTRACT_INPUTS")
    });

});


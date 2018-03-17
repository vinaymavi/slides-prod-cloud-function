const {slidesprodget} = require('./index');

test('slidesprodget respond successfully.', () => {    
    const send = jest.fn();
    const res ={
        status: ()=> ({send})
    }

    slidesprodget(null, res);
    expect(send).toHaveBeenCalled();

})
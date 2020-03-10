




















console.log ( 'Accessing function scope variables in nested function: 'myFunctionScopeVariable ); //
//we can access variables from a PARENT function. But are accessible even all the way here!
//NICE!

// Even more nesting!?
function myDoubleNestedFunction () {
    var doubleNestedVar = 'Double nested var here!';

    console.log ( doubleNestedVar); // We can access locally, right?

}

    myDoubleNestedFunction(); // Let's run and try it.



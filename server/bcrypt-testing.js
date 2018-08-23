const bcrypt = require( 'bcrypt' );
const saltRounds = 12;

bcrypt.hash( 'ducks', saltRounds ).then( hashedPassword => {
    console.log( 'the hashed password is', hashedPassword )
    bcrypt.compare( 'ducky', hashedPassword ).then( doPasswordsMatch => {
        console.log( 'doPasswordsMatch', doPasswordsMatch )
    })
}).catch( error => {
    console.log( '------------------> error', error)
})
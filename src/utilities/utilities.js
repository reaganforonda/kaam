module.exports = {
    /*
     * Validate password.  Password must be at least 8 characters long and contain number and 
     * @param password = password as stirng
     */
    validatePassword(pw) {
        var upperCaseLetters = /[A-Z]/g;
        var lowerCaseLetters = /[a-z]/g;
        var numbers = /[0-9]/g;

        if(pw.length < 8 ) {
            return false;
        } else {
            if(!pw.match(upperCaseLetters)) {
                return false;
            }
            if(!pw.match(lowerCaseLetters)){
                return false;
            }
            if(!pw.match(numbers)) {
                return false;
            }
        }

        return true;
    }
}
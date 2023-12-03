ReExp we are using for checking password
 (?=.*[a-z]) the string must contain at least 1 lowercawse alphabetical character
 (?=.*[A-Z]) the string must contain at least 1 upeercase alphabetical character
 (?=.*[0-9]) the string must contain at least 1 numerical character
 (?=.*[!@#\%\^&\*]) the string must contain at least one special character, but wer are esscaping reserved 
                    RegEc characters to avoid conflict.

(?=.{8,})   The string must be eight characters or longer.
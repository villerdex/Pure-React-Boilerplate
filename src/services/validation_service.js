

 const patternValidation = (pattern, value, errorMessage) => {
    if (!value.match(pattern)) {
        return errorMessage
    }
    return null
};

 const maxLengthValidation = (max, value, errorMessage) => {
     if (value.length > max) {
         return errorMessage
     }
     return null
 };

 const minLengthValidation = (min, value, errorMessage) => {

     if (value.length < min) {
         return errorMessage
     }
     return null
 };

 const rangeLengthValidation = (min, max, value, errorMessage) => {
     if (value.length < min && value.length > max) {
         return errorMessage
     }
     return null
 };

 const requiredValidation = (value, errorMessage) => {
     if (!value) {
         return errorMessage
     }
     return null
 };


export default {
    maxLengthValidation,
    minLengthValidation,
    rangeLengthValidation,
    requiredValidation,
    patternValidation,
};
function onSetValue(e,a,r,t){if("number"==typeof e){var n=Math.round(e);return n<=r?r:n>=t?t:n}return void 0!==a?a:r}var Cascade=require("../cascade");module.exports=Cascade.extendDataType(onSetValue);
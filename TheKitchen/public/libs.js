/*! jQuery Validation Plugin - v1.19.3 - 1/9/2021
 * https://jqueryvalidation.org/
 * Copyright (c) 2021 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}});var b=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};a.extend(a.expr.pseudos||a.expr[":"],{blank:function(c){return!b(""+a(c).val())},filled:function(c){var d=a(c).val();return null!==d&&!!b(""+d)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(a,d){b[a]="function"==typeof d&&"normalizer"!==a?d(c):d}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var a;b[this]&&(Array.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(a=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(a[0]),Number(a[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d>=c},maxlength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d<=c},rangelength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d>=c[0]&&d<=c[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var c,d={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,c){var e=a.port;"abort"===a.mode&&(d[e]&&d[e].abort(),d[e]=c)}):(c=a.ajax,a.ajax=function(b){var e=("mode"in b?b:a.ajaxSettings).mode,f=("port"in b?b:a.ajaxSettings).port;return"abort"===e?(d[f]&&d[f].abort(),d[f]=c.apply(this,arguments),d[f]):c.apply(this,arguments)}),a});
/*!
 * Glide.js v3.3.0
 * (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Glide=e()}(this,function(){"use strict";var i={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perTouch:!1,touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",throttle:10,direction:"ltr",peek:0,breakpoints:{},classes:{direction:{ltr:"glide--ltr",rtl:"glide--rtl"},slider:"glide--slider",carousel:"glide--carousel",swipeable:"glide--swipeable",dragging:"glide--dragging",cloneSlide:"glide__slide--clone",activeNav:"glide__bullet--active",activeSlide:"glide__slide--active",disabledArrow:"glide__arrow--disabled"}};var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},s=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};function y(t){return parseInt(t)}function u(t){return"string"==typeof t}function c(t){var e=void 0===t?"undefined":n(t);return"function"===e||"object"===e&&!!t}function l(t){return"function"==typeof t}function f(t){return void 0===t}function d(t){return t.constructor===Array}function p(t,e,n){Object.defineProperty(t,e,n)}function h(t,e){var n=a({},t,e);return e.hasOwnProperty("classes")&&(n.classes=a({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=a({},t.classes.direction,e.classes.direction))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=a({},t.breakpoints,e.breakpoints)),n}var v=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.events=t,this.hop=t.hasOwnProperty}return o(e,[{key:"on",value:function(t,e){if(d(t))for(var n=0;n<t.length;n++)this.on(t[n],e);this.hop.call(this.events,t)||(this.events[t]=[]);var i=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][i]}}}},{key:"emit",value:function(t,e){if(d(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);this.hop.call(this.events,t)&&this.events[t].forEach(function(t){t(e||{})})}}]),e}(),m=function(){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};r(this,n),this._c={},this._t=[],this._e=new v,this.disabled=!1,this.selector=t,this.settings=h(i,e),this.index=this.settings.startAt}return o(n,[{key:"mount",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),c(t)&&(this._c=function(t,e,n){var i={};for(var r in e)l(e[r])&&(i[r]=e[r](t,i,n));for(var o in i)l(i[o].mount)&&i[o].mount();return i}(this,t,this._e)),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];return d(t)&&(this._t=t),this}},{key:"update",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.settings=h(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){c(t)&&(this._o=t)}},{key:"index",get:function(){return this._i},set:function(t){this._i=y(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),n}();function g(){return(new Date).getTime()}function b(n,i,r){var o=void 0,s=void 0,u=void 0,a=void 0,c=0;r||(r={});var l=function(){c=!1===r.leading?0:g(),o=null,a=n.apply(s,u),o||(s=u=null)},t=function(){var t=g();c||!1!==r.leading||(c=t);var e=i-(t-c);return s=this,u=arguments,e<=0||i<e?(o&&(clearTimeout(o),o=null),c=t,a=n.apply(s,u),o||(s=u=null)):o||!1===r.trailing||(o=setTimeout(l,e)),a};return t.cancel=function(){clearTimeout(o),c=0,o=s=u=null},t}var w={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function _(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function k(t){return!!(t&&t instanceof window.HTMLElement)}var S='[data-glide-el="track"]';var H=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.listeners=t}return o(e,[{key:"on",value:function(t,e,n){var i=3<arguments.length&&void 0!==arguments[3]&&arguments[3];u(t)&&(t=[t]);for(var r=0;r<t.length;r++)this.listeners[t[r]]=n,e.addEventListener(t[r],this.listeners[t[r]],i)}},{key:"off",value:function(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];u(t)&&(t=[t]);for(var i=0;i<t.length;i++)e.removeEventListener(t[i],this.listeners[t[i]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),e}();var T=["ltr","rtl"],x={">":"<","<":">","=":"="};function t(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}function O(i,r,o){var s=[function(e,n){return{modify:function(t){return t+n.Gaps.value*e.index}}},function(t,e){return{modify:function(t){return t+e.Clones.grow/2}}},function(n,i){return{modify:function(t){if(0<=n.settings.focusAt){var e=i.Peek.value;return c(e)?t-e.before:t-e}return t}}},function(o,s){return{modify:function(t){var e=s.Gaps.value,n=s.Sizes.width,i=o.settings.focusAt,r=s.Sizes.slideWidth;return"center"===i?t-(n/2-r/2):t-r*i-e*i}}}].concat(i._t,[t]);return{mutate:function(t){for(var e=0;e<s.length;e++){var n=s[e];l(n)&&l(n().modify)&&(t=n(i,r,o).modify(t))}return t}}}var e=!1;try{var A=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassive",null,A),window.removeEventListener("testPassive",null,A)}catch(t){}var M=e,C=["touchstart","mousedown"],P=["touchmove","mousemove"],L=["touchend","touchcancel","mouseup","mouseleave"],z=["mousedown","mousemove","mouseup","mouseleave"];var j='[data-glide-el="controls[nav]"]',D='[data-glide-el^="controls"]';function E(t){return c(t)?(n=t,Object.keys(n).sort().reduce(function(t,e){return t[e]=n[e],t[e],t},{})):{};var n}var R={Html:function(e,t){var n={mount:function(){this.root=e.selector,this.track=this.root.querySelector(S),this.slides=Array.prototype.slice.call(this.wrapper.children).filter(function(t){return!t.classList.contains(e.settings.classes.cloneSlide)})}};return p(n,"root",{get:function(){return n._r},set:function(t){u(t)&&(t=document.querySelector(t)),k(t)&&(n._r=t)}}),p(n,"track",{get:function(){return n._t},set:function(t){k(t)&&(n._t=t)}}),p(n,"wrapper",{get:function(){return n.track.children[0]}}),n},Translate:function(r,o,s){var u={set:function(t){var e=O(r,o).mutate(t);o.Html.wrapper.style.transform="translate3d("+-1*e+"px, 0px, 0px)"},remove:function(){o.Html.wrapper.style.transform=""}};return s.on("move",function(t){var e=o.Gaps.value,n=o.Sizes.length,i=o.Sizes.slideWidth;return r.isType("carousel")&&o.Run.isOffset("<")?(o.Transition.after(function(){s.emit("translate.jump"),u.set(i*(n-1))}),u.set(-i-e*n)):r.isType("carousel")&&o.Run.isOffset(">")?(o.Transition.after(function(){s.emit("translate.jump"),u.set(0)}),u.set(i*n+e*n)):u.set(t.movement)}),s.on("destroy",function(){u.remove()}),u},Transition:function(n,e,t){var i=!1,r={compose:function(t){var e=n.settings;return i?t+" 0ms "+e.animationTimingFunc:t+" "+this.duration+"ms "+e.animationTimingFunc},set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout(function(){t()},this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return p(r,"duration",{get:function(){var t=n.settings;return n.isType("slider")&&e.Run.offset?t.rewindDuration:t.animationDuration}}),t.on("move",function(){r.set()}),t.on(["build.before","resize","translate.jump"],function(){r.disable()}),t.on("run",function(){r.enable()}),t.on("destroy",function(){r.remove()}),r},Direction:function(t,e,n){var i={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(x[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return p(i,"value",{get:function(){return i._v},set:function(t){-1<T.indexOf(t)&&(i._v=t)}}),n.on(["destroy","update"],function(){i.removeClass()}),n.on("update",function(){i.mount()}),n.on(["build.before","update"],function(){i.addClass()}),i},Peek:function(n,t,e){var i={mount:function(){this.value=n.settings.peek}};return p(i,"value",{get:function(){return i._v},set:function(t){c(t)?(t.before=y(t.before),t.after=y(t.after)):t=y(t),i._v=t}}),p(i,"reductor",{get:function(){var t=i.value,e=n.settings.perView;return c(t)?t.before/e+t.after/e:2*t/e}}),e.on(["resize","update"],function(){i.mount()}),i},Sizes:function(t,i,e){var n={setupSlides:function(){for(var t=this.slideWidth+"px",e=i.Html.slides,n=0;n<e.length;n++)e[n].style.width=t},setupWrapper:function(t){i.Html.wrapper.style.width=this.wrapperSize+"px"},remove:function(){for(var t=i.Html.slides,e=0;e<t.length;e++)t[e].style.width="";i.Html.wrapper.style.width=""}};return p(n,"length",{get:function(){return i.Html.slides.length}}),p(n,"width",{get:function(){return i.Html.root.offsetWidth}}),p(n,"wrapperSize",{get:function(){return n.slideWidth*n.length+i.Gaps.grow+i.Clones.grow}}),p(n,"slideWidth",{get:function(){return n.width/t.settings.perView-i.Peek.reductor-i.Gaps.reductor}}),e.on(["build.before","resize","update"],function(){n.setupSlides(),n.setupWrapper()}),e.on("destroy",function(){n.remove()}),n},Gaps:function(e,o,t){var n={apply:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style,r=o.Direction.value;i[w[r][0]]=0!==e?this.value/2+"px":"",e!==t.length-1?i[w[r][1]]=this.value/2+"px":i[w[r][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="",i.marginRight=""}}};return p(n,"value",{get:function(){return y(e.settings.gap)}}),p(n,"grow",{get:function(){return n.value*(o.Sizes.length-1)}}),p(n,"reductor",{get:function(){var t=e.settings.perView;return n.value*(t-1)/t}}),t.on(["build.after","update"],b(function(){n.apply(o.Html.wrapper.children)},30)),t.on("destroy",function(){n.remove(o.Html.wrapper.children)}),n},Move:function(t,n,i){var e={mount:function(){this._o=0},make:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;this.offset=e,i.emit("move",{movement:this.value}),n.Transition.after(function(){i.emit("move.after",{movement:t.value})})}};return p(e,"offset",{get:function(){return e._o},set:function(t){e._o=f(t)?0:y(t)}}),p(e,"translate",{get:function(){return n.Sizes.slideWidth*t.index}}),p(e,"value",{get:function(){var t=this.offset,e=this.translate;return n.Direction.is("rtl")?e+t:e-t}}),i.on(["build.before","run"],function(){e.make()}),e},Clones:function(h,v,t){var e={mount:function(){this.items=[],h.isType("carousel")&&(this.items=this.collect())},collect:function(){for(var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],e=v.Html.slides,n=h.settings,i=n.perView,r=n.classes,o=i+ +!!h.settings.peek,s=e.slice(0,o),u=e.slice(-o),a=0;a<Math.max(1,Math.floor(i/e.length));a++){for(var c=0;c<s.length;c++){var l=s[c].cloneNode(!0);l.classList.add(r.cloneSlide),t.push(l)}for(var f=0;f<u.length;f++){var d=u[f].cloneNode(!0);d.classList.add(r.cloneSlide),t.unshift(d)}}return t},append:function(){for(var t=this.items,e=v.Html,n=e.wrapper,i=e.slides,r=Math.floor(t.length/2),o=t.slice(0,r).reverse(),s=t.slice(r,t.length),u=v.Sizes.slideWidth+"px",a=0;a<s.length;a++)n.appendChild(s[a]);for(var c=0;c<o.length;c++)n.insertBefore(o[c],i[0]);for(var l=0;l<t.length;l++)t[l].style.width=u},remove:function(){for(var t=this.items,e=0;e<t.length;e++)v.Html.wrapper.removeChild(t[e])}};return p(e,"grow",{get:function(){return(v.Sizes.slideWidth+v.Gaps.value)*e.items.length}}),t.on("update",function(){e.remove(),e.mount(),e.append()}),t.on("build.before",function(){h.isType("carousel")&&e.append()}),t.on("destroy",function(){e.remove()}),e},Resize:function(t,e,n){var i=new H,r={mount:function(){this.bind()},bind:function(){i.on("resize",window,b(function(){n.emit("resize")},t.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",function(){r.unbind(),i.destroy()}),r},Build:function(n,i,t){var e={mount:function(){t.emit("build.before"),this.typeClass(),this.activeClass(),t.emit("build.after")},typeClass:function(){i.Html.root.classList.add(n.settings.classes[n.settings.type])},activeClass:function(){var e=n.settings.classes,t=i.Html.slides[n.index];t&&(t.classList.add(e.activeSlide),_(t).forEach(function(t){t.classList.remove(e.activeSlide)}))},removeClasses:function(){var e=n.settings.classes;i.Html.root.classList.remove(e[n.settings.type]),i.Html.slides.forEach(function(t){t.classList.remove(e.activeSlide)})}};return t.on(["destroy","update"],function(){e.removeClasses()}),t.on(["resize","update"],function(){e.mount()}),t.on("move.after",function(){e.activeClass()}),e},Run:function(o,n,i){var t={mount:function(){this._o=!1},make:function(t){var e=this;o.disabled||(o.disable(),this.move=t,i.emit("run.before",this.move),this.calculate(),i.emit("run",this.move),n.Transition.after(function(){e.isStart()&&i.emit("run.start",e.move),e.isEnd()&&i.emit("run.end",e.move),(e.isOffset("<")||e.isOffset(">"))&&(e._o=!1,i.emit("run.offset",e.move)),i.emit("run.after",e.move),o.enable()}))},calculate:function(){var t=this.move,e=this.length,n=t.steps,i=t.direction,r="number"==typeof y(n)&&0!==y(n);switch(i){case">":">"===n?o.index=e:this.isEnd()?o.isType("slider")&&!o.settings.rewind||(this._o=!0,o.index=0):r?o.index+=Math.min(e-o.index,-y(n)):o.index++;break;case"<":"<"===n?o.index=0:this.isStart()?o.isType("slider")&&!o.settings.rewind||(this._o=!0,o.index=e):r?o.index-=Math.min(o.index,y(n)):o.index--;break;case"=":o.index=n}},isStart:function(){return 0===o.index},isEnd:function(){return o.index===this.length},isOffset:function(t){return this._o&&this.move.direction===t}};return p(t,"move",{get:function(){return this._m},set:function(t){var e=t.substr(1);this._m={direction:t.substr(0,1),steps:e?y(e)?y(e):e:0}}}),p(t,"length",{get:function(){var t=o.settings,e=n.Html.slides.length;return o.isType("slider")&&"center"!==t.focusAt&&t.bound?e-1-(y(t.perView)-1)+y(t.focusAt):e-1}}),p(t,"offset",{get:function(){return this._o}}),t},Swipe:function(d,h,v){var n=new H,p=0,m=0,g=0,i=!1,r=!!M&&{passive:!0},t={mount:function(){this.bindSwipeStart()},start:function(t){if(!i&&!d.disabled){this.disable();var e=this.touches(t);p=null,m=y(e.pageX),g=y(e.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),v.emit("swipe.start")}},move:function(t){if(!d.disabled){var e=d.settings,n=e.touchAngle,i=e.touchRatio,r=e.classes,o=this.touches(t),s=y(o.pageX)-m,u=y(o.pageY)-g,a=Math.abs(s<<2),c=Math.abs(u<<2),l=Math.sqrt(a+c),f=Math.sqrt(c);if(!(180*(p=Math.asin(f/l))/Math.PI<n))return!1;t.stopPropagation(),h.Move.make(s*parseFloat(i)),h.Html.root.classList.add(r.dragging),v.emit("swipe.move")}},end:function(t){if(!d.disabled){var e=d.settings,n=this.touches(t),i=this.threshold(t),r=n.pageX-m,o=180*p/Math.PI,s=Math.round(r/h.Sizes.slideWidth);this.enable(),i<r&&o<e.touchAngle?(e.perTouch&&(s=Math.min(s,y(e.perTouch))),h.Direction.is("rtl")&&(s=-s),h.Run.make(h.Direction.resolve("<"+s))):r<-i&&o<e.touchAngle?(e.perTouch&&(s=Math.max(s,-y(e.perTouch))),h.Direction.is("rtl")&&(s=-s),h.Run.make(h.Direction.resolve(">"+s))):h.Move.make(),h.Html.root.classList.remove(e.classes.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),v.emit("swipe.end")}},bindSwipeStart:function(){var e=this,t=d.settings;t.swipeThreshold&&n.on(C[0],h.Html.wrapper,function(t){e.start(t)},r),t.dragThreshold&&n.on(C[1],h.Html.wrapper,function(t){e.start(t)},r)},unbindSwipeStart:function(){n.off(C[0],h.Html.wrapper,r),n.off(C[1],h.Html.wrapper,r)},bindSwipeMove:function(){var e=this;n.on(P,h.Html.wrapper,b(function(t){e.move(t)},d.settings.throttle),r)},unbindSwipeMove:function(){n.off(P,h.Html.wrapper,r)},bindSwipeEnd:function(){var e=this;n.on(L,h.Html.wrapper,function(t){e.end(t)})},unbindSwipeEnd:function(){n.off(L,h.Html.wrapper)},touches:function(t){return-1<z.indexOf(t.type)?t:t.touches[0]||t.changedTouches[0]},threshold:function(t){var e=d.settings;return-1<z.indexOf(t.type)?e.dragThreshold:e.swipeThreshold},enable:function(){return i=!1,h.Transition.enable(),this},disable:function(){return i=!0,h.Transition.disable(),this}};return v.on("build.after",function(){h.Html.root.classList.add(d.settings.classes.swipeable)}),v.on("destroy",function(){t.unbindSwipeStart(),t.unbindSwipeMove(),t.unbindSwipeEnd(),n.destroy()}),t},Images:function(t,e,n){var i=new H,r={mount:function(){this.bind()},bind:function(){i.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",function(){r.unbind(),i.destroy()}),r},Anchors:function(t,e,n){var i=new H,r=!1,o=!1,s={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",e.Html.wrapper,this.click)},unbind:function(){i.off("click",e.Html.wrapper)},click:function(t){o&&(t.stopPropagation(),t.preventDefault())},detach:function(){if(o=!0,!r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1,this.items[t].setAttribute("data-href",this.items[t].getAttribute("href")),this.items[t].removeAttribute("href");r=!0}return this},attach:function(){if(o=!1,r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0,this.items[t].setAttribute("href",this.items[t].getAttribute("data-href"));r=!1}return this}};return p(s,"items",{get:function(){return s._a}}),n.on("swipe.move",function(){s.detach()}),n.on("swipe.end",function(){e.Transition.after(function(){s.attach()})}),n.on("destroy",function(){s.attach(),s.unbind(),i.destroy()}),s},Controls:function(i,e,t){var n=new H,r=!!M&&{passive:!0},o={mount:function(){this._n=e.Html.root.querySelectorAll(j),this._c=e.Html.root.querySelectorAll(D),this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(t){var e=i.settings,n=t[i.index];n&&(n.classList.add(e.classes.activeNav),_(n).forEach(function(t){t.classList.remove(e.classes.activeNav)}))},removeClass:function(t){var e=t[i.index];e&&e.classList.remove(i.settings.classes.activeNav)},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)n.on("click",t[e],this.click),n.on("touchstart",t[e],this.click,r)},unbind:function(t){for(var e=0;e<t.length;e++)n.off(["click","touchstart"],t[e])},click:function(t){t.preventDefault(),e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir")))}};return p(o,"items",{get:function(){return o._c}}),t.on(["mount.after","move.after"],function(){o.setActive()}),t.on("destroy",function(){o.removeBindings(),o.removeActive(),n.destroy()}),o},Keyboard:function(t,e,n){var i=new H,r={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){i.on("keyup",document,this.press)},unbind:function(){i.off("keyup",document)},press:function(t){39===t.keyCode&&e.Run.make(e.Direction.resolve(">")),37===t.keyCode&&e.Run.make(e.Direction.resolve("<"))}};return n.on(["destroy","update"],function(){r.unbind()}),n.on("update",function(){r.mount()}),n.on("destroy",function(){i.destroy()}),r},Autoplay:function(e,n,t){var i=new H,r={mount:function(){this.start(),e.settings.hoverpause&&this.bind()},start:function(){var t=this;e.settings.autoplay&&f(this._i)&&(this._i=setInterval(function(){t.stop(),n.Run.make(">"),t.start()},this.time))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;i.on("mouseover",n.Html.root,function(){t.stop()}),i.on("mouseout",n.Html.root,function(){t.start()})},unbind:function(){i.off(["mouseover","mouseout"],n.Html.root)}};return p(r,"time",{get:function(){var t=n.Html.slides[e.index].getAttribute("data-glide-autoplay");return y(t||e.settings.autoplay)}}),t.on(["destroy","update"],function(){r.unbind()}),t.on(["run.before","pause","destroy","swipe.start","update"],function(){r.stop()}),t.on(["run.after","play","swipe.end"],function(){r.start()}),t.on("update",function(){r.mount()}),t.on("destroy",function(){i.destroy()}),r},Breakpoints:function(t,e,n){var i=new H,r=t.settings,o=E(r.breakpoints),s=a({},r),u={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: "+e+"px)").matches)return t[e];return s}};return a(r,u.match(o)),i.on("resize",window,b(function(){t.settings=h(r,u.match(o))},t.settings.throttle)),n.on("update",function(){o=E(o),s=a({},r)}),n.on("destroy",function(){i.off("resize",window)}),u}};return function(t){function e(){return r(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,m),o(e,[{key:"mount",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return function t(e,n,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,i)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(i):void 0}(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"mount",this).call(this,a({},R,t))}}]),e}()});

/*!
  * Bootstrap v5.0.0-beta3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t=t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t},e=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i="#"+i.split("#")[1]),e=i&&"#"!==i?i.trim():null}return e},i=t=>{const i=e(t);return i&&document.querySelector(i)?i:null},s=t=>{const i=e(t);return i?document.querySelector(i):null},n=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const s=Number.parseFloat(e),n=Number.parseFloat(i);return s||n?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0},o=t=>{t.dispatchEvent(new Event("transitionend"))},r=t=>(t[0]||t).nodeType,a=(t,e)=>{let i=!1;const s=e+5;t.addEventListener("transitionend",(function e(){i=!0,t.removeEventListener("transitionend",e)})),setTimeout(()=>{i||o(t)},s)},l=(t,e,i)=>{Object.keys(i).forEach(s=>{const n=i[s],o=e[s],a=o&&r(o)?"element":null==(l=o)?""+l:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();var l;if(!new RegExp(n).test(a))throw new TypeError(t.toUpperCase()+": "+`Option "${s}" provided type "${a}" `+`but expected type "${n}".`)})},c=t=>{if(!t)return!1;if(t.style&&t.parentNode&&t.parentNode.style){const e=getComputedStyle(t),i=getComputedStyle(t.parentNode);return"none"!==e.display&&"none"!==i.display&&"hidden"!==e.visibility}return!1},d=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),h=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?h(t.parentNode):null},f=()=>function(){},u=t=>t.offsetHeight,p=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},g=()=>"rtl"===document.documentElement.dir,m=(t,e)=>{var i;i=()=>{const i=p();if(i){const s=i.fn[t];i.fn[t]=e.jQueryInterface,i.fn[t].Constructor=e,i.fn[t].noConflict=()=>(i.fn[t]=s,e.jQueryInterface)}},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",i):i()},_=new Map;var b={set(t,e,i){_.has(t)||_.set(t,new Map);const s=_.get(t);s.has(e)||0===s.size?s.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(t,e)=>_.has(t)&&_.get(t).get(e)||null,remove(t,e){if(!_.has(t))return;const i=_.get(t);i.delete(e),0===i.size&&_.delete(t)}};const v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,E={};let T=1;const A={mouseenter:"mouseover",mouseleave:"mouseout"},L=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${T++}`||t.uidEvent||T++}function k(t){const e=O(t);return t.uidEvent=e,E[e]=E[e]||{},E[e]}function D(t,e,i=null){const s=Object.keys(t);for(let n=0,o=s.length;n<o;n++){const o=t[s[n]];if(o.originalHandler===e&&o.delegationSelector===i)return o}return null}function x(t,e,i){const s="string"==typeof e,n=s?i:e;let o=t.replace(y,"");const r=A[o];return r&&(o=r),L.has(o)||(o=t),[s,n,o]}function C(t,e,i,s,n){if("string"!=typeof e||!t)return;i||(i=s,s=null);const[o,r,a]=x(e,i,s),l=k(t),c=l[a]||(l[a]={}),d=D(c,r,o?i:null);if(d)return void(d.oneOff=d.oneOff&&n);const h=O(r,e.replace(v,"")),f=o?function(t,e,i){return function s(n){const o=t.querySelectorAll(e);for(let{target:e}=n;e&&e!==this;e=e.parentNode)for(let r=o.length;r--;)if(o[r]===e)return n.delegateTarget=e,s.oneOff&&N.off(t,n.type,i),i.apply(e,[n]);return null}}(t,i,s):function(t,e){return function i(s){return s.delegateTarget=t,i.oneOff&&N.off(t,s.type,e),e.apply(t,[s])}}(t,i);f.delegationSelector=o?i:null,f.originalHandler=r,f.oneOff=n,f.uidEvent=h,c[h]=f,t.addEventListener(a,f,o)}function S(t,e,i,s,n){const o=D(e[i],s,n);o&&(t.removeEventListener(i,o,Boolean(n)),delete e[i][o.uidEvent])}const N={on(t,e,i,s){C(t,e,i,s,!1)},one(t,e,i,s){C(t,e,i,s,!0)},off(t,e,i,s){if("string"!=typeof e||!t)return;const[n,o,r]=x(e,i,s),a=r!==e,l=k(t),c=e.startsWith(".");if(void 0!==o){if(!l||!l[r])return;return void S(t,l,r,o,n?i:null)}c&&Object.keys(l).forEach(i=>{!function(t,e,i,s){const n=e[i]||{};Object.keys(n).forEach(o=>{if(o.includes(s)){const s=n[o];S(t,e,i,s.originalHandler,s.delegationSelector)}})}(t,l,i,e.slice(1))});const d=l[r]||{};Object.keys(d).forEach(i=>{const s=i.replace(w,"");if(!a||e.includes(s)){const e=d[i];S(t,l,r,e.originalHandler,e.delegationSelector)}})},trigger(t,e,i){if("string"!=typeof e||!t)return null;const s=p(),n=e.replace(y,""),o=e!==n,r=L.has(n);let a,l=!0,c=!0,d=!1,h=null;return o&&s&&(a=s.Event(e,i),s(t).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),d=a.isDefaultPrevented()),r?(h=document.createEvent("HTMLEvents"),h.initEvent(n,l,!0)):h=new CustomEvent(e,{bubbles:l,cancelable:!0}),void 0!==i&&Object.keys(i).forEach(t=>{Object.defineProperty(h,t,{get:()=>i[t]})}),d&&h.preventDefault(),c&&t.dispatchEvent(h),h.defaultPrevented&&void 0!==a&&a.preventDefault(),h}};class j{constructor(t){(t="string"==typeof t?document.querySelector(t):t)&&(this._element=t,b.set(this._element,this.constructor.DATA_KEY,this))}dispose(){b.remove(this._element,this.constructor.DATA_KEY),this._element=null}static getInstance(t){return b.get(t,this.DATA_KEY)}static get VERSION(){return"5.0.0-beta3"}}class P extends j{static get DATA_KEY(){return"bs.alert"}close(t){const e=t?this._getRootElement(t):this._element,i=this._triggerCloseEvent(e);null===i||i.defaultPrevented||this._removeElement(e)}_getRootElement(t){return s(t)||t.closest(".alert")}_triggerCloseEvent(t){return N.trigger(t,"close.bs.alert")}_removeElement(t){if(t.classList.remove("show"),!t.classList.contains("fade"))return void this._destroyElement(t);const e=n(t);N.one(t,"transitionend",()=>this._destroyElement(t)),a(t,e)}_destroyElement(t){t.parentNode&&t.parentNode.removeChild(t),N.trigger(t,"closed.bs.alert")}static jQueryInterface(t){return this.each((function(){let e=b.get(this,"bs.alert");e||(e=new P(this)),"close"===t&&e[t](this)}))}static handleDismiss(t){return function(e){e&&e.preventDefault(),t.close(this)}}}N.on(document,"click.bs.alert.data-api",'[data-bs-dismiss="alert"]',P.handleDismiss(new P)),m("alert",P);class I extends j{static get DATA_KEY(){return"bs.button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){let e=b.get(this,"bs.button");e||(e=new I(this)),"toggle"===t&&e[t]()}))}}function M(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function R(t){return t.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}N.on(document,"click.bs.button.data-api",'[data-bs-toggle="button"]',t=>{t.preventDefault();const e=t.target.closest('[data-bs-toggle="button"]');let i=b.get(e,"bs.button");i||(i=new I(e)),i.toggle()}),m("button",I);const B={setDataAttribute(t,e,i){t.setAttribute("data-bs-"+R(e),i)},removeDataAttribute(t,e){t.removeAttribute("data-bs-"+R(e))},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter(t=>t.startsWith("bs")).forEach(i=>{let s=i.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),e[s]=M(t.dataset[i])}),e},getDataAttribute:(t,e)=>M(t.getAttribute("data-bs-"+R(e))),offset(t){const e=t.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}},position:t=>({top:t.offsetTop,left:t.offsetLeft})},H={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),parents(t,e){const i=[];let s=t.parentNode;for(;s&&s.nodeType===Node.ELEMENT_NODE&&3!==s.nodeType;)s.matches(e)&&i.push(s),s=s.parentNode;return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]}},W={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},$="next",F="prev",z="left",K="right";class Y extends j{constructor(t,e){super(t),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._indicatorsElement=H.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return W}static get DATA_KEY(){return"bs.carousel"}next(){this._isSliding||this._slide($)}nextWhenVisible(){!document.hidden&&c(this._element)&&this.next()}prev(){this._isSliding||this._slide(F)}pause(t){t||(this._isPaused=!0),H.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(o(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(t){this._activeElement=H.findOne(".active.carousel-item",this._element);const e=this._getItemIndex(this._activeElement);if(t>this._items.length-1||t<0)return;if(this._isSliding)return void N.one(this._element,"slid.bs.carousel",()=>this.to(t));if(e===t)return this.pause(),void this.cycle();const i=t>e?$:F;this._slide(i,this._items[t])}dispose(){N.off(this._element,".bs.carousel"),this._items=null,this._config=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null,super.dispose()}_getConfig(t){return t={...W,...t},l("carousel",t,U),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=40)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?K:z)}_addEventListeners(){this._config.keyboard&&N.on(this._element,"keydown.bs.carousel",t=>this._keydown(t)),"hover"===this._config.pause&&(N.on(this._element,"mouseenter.bs.carousel",t=>this.pause(t)),N.on(this._element,"mouseleave.bs.carousel",t=>this.cycle(t))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const t=t=>{!this._pointerEvent||"pen"!==t.pointerType&&"touch"!==t.pointerType?this._pointerEvent||(this.touchStartX=t.touches[0].clientX):this.touchStartX=t.clientX},e=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},i=t=>{!this._pointerEvent||"pen"!==t.pointerType&&"touch"!==t.pointerType||(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(t=>this.cycle(t),500+this._config.interval))};H.find(".carousel-item img",this._element).forEach(t=>{N.on(t,"dragstart.bs.carousel",t=>t.preventDefault())}),this._pointerEvent?(N.on(this._element,"pointerdown.bs.carousel",e=>t(e)),N.on(this._element,"pointerup.bs.carousel",t=>i(t)),this._element.classList.add("pointer-event")):(N.on(this._element,"touchstart.bs.carousel",e=>t(e)),N.on(this._element,"touchmove.bs.carousel",t=>e(t)),N.on(this._element,"touchend.bs.carousel",t=>i(t)))}_keydown(t){/input|textarea/i.test(t.target.tagName)||("ArrowLeft"===t.key?(t.preventDefault(),this._slide(z)):"ArrowRight"===t.key&&(t.preventDefault(),this._slide(K)))}_getItemIndex(t){return this._items=t&&t.parentNode?H.find(".carousel-item",t.parentNode):[],this._items.indexOf(t)}_getItemByOrder(t,e){const i=t===$,s=t===F,n=this._getItemIndex(e),o=this._items.length-1;if((s&&0===n||i&&n===o)&&!this._config.wrap)return e;const r=(n+(s?-1:1))%this._items.length;return-1===r?this._items[this._items.length-1]:this._items[r]}_triggerSlideEvent(t,e){const i=this._getItemIndex(t),s=this._getItemIndex(H.findOne(".active.carousel-item",this._element));return N.trigger(this._element,"slide.bs.carousel",{relatedTarget:t,direction:e,from:s,to:i})}_setActiveIndicatorElement(t){if(this._indicatorsElement){const e=H.findOne(".active",this._indicatorsElement);e.classList.remove("active"),e.removeAttribute("aria-current");const i=H.find("[data-bs-target]",this._indicatorsElement);for(let e=0;e<i.length;e++)if(Number.parseInt(i[e].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(t)){i[e].classList.add("active"),i[e].setAttribute("aria-current","true");break}}}_updateInterval(){const t=this._activeElement||H.findOne(".active.carousel-item",this._element);if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(t,e){const i=this._directionToOrder(t),s=H.findOne(".active.carousel-item",this._element),o=this._getItemIndex(s),r=e||this._getItemByOrder(i,s),l=this._getItemIndex(r),c=Boolean(this._interval),d=i===$,h=d?"carousel-item-start":"carousel-item-end",f=d?"carousel-item-next":"carousel-item-prev",p=this._orderToDirection(i);if(r&&r.classList.contains("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(r,p).defaultPrevented&&s&&r){if(this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(r),this._activeElement=r,this._element.classList.contains("slide")){r.classList.add(f),u(r),s.classList.add(h),r.classList.add(h);const t=n(s);N.one(s,"transitionend",()=>{r.classList.remove(h,f),r.classList.add("active"),s.classList.remove("active",f,h),this._isSliding=!1,setTimeout(()=>{N.trigger(this._element,"slid.bs.carousel",{relatedTarget:r,direction:p,from:o,to:l})},0)}),a(s,t)}else s.classList.remove("active"),r.classList.add("active"),this._isSliding=!1,N.trigger(this._element,"slid.bs.carousel",{relatedTarget:r,direction:p,from:o,to:l});c&&this.cycle()}}_directionToOrder(t){return[K,z].includes(t)?g()?t===K?F:$:t===K?$:F:t}_orderToDirection(t){return[$,F].includes(t)?g()?t===$?z:K:t===$?K:z:t}static carouselInterface(t,e){let i=b.get(t,"bs.carousel"),s={...W,...B.getDataAttributes(t)};"object"==typeof e&&(s={...s,...e});const n="string"==typeof e?e:s.slide;if(i||(i=new Y(t,s)),"number"==typeof e)i.to(e);else if("string"==typeof n){if(void 0===i[n])throw new TypeError(`No method named "${n}"`);i[n]()}else s.interval&&s.ride&&(i.pause(),i.cycle())}static jQueryInterface(t){return this.each((function(){Y.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=s(this);if(!e||!e.classList.contains("carousel"))return;const i={...B.getDataAttributes(e),...B.getDataAttributes(this)},n=this.getAttribute("data-bs-slide-to");n&&(i.interval=!1),Y.carouselInterface(e,i),n&&b.get(e,"bs.carousel").to(n),t.preventDefault()}}N.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",Y.dataApiClickHandler),N.on(window,"load.bs.carousel.data-api",()=>{const t=H.find('[data-bs-ride="carousel"]');for(let e=0,i=t.length;e<i;e++)Y.carouselInterface(t[e],b.get(t[e],"bs.carousel"))}),m("carousel",Y);const q={toggle:!0,parent:""},V={toggle:"boolean",parent:"(string|element)"};class X extends j{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=H.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);const s=H.find('[data-bs-toggle="collapse"]');for(let t=0,e=s.length;t<e;t++){const e=s[t],n=i(e),o=H.find(n).filter(t=>t===this._element);null!==n&&o.length&&(this._selector=n,this._triggerArray.push(e))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}static get Default(){return q}static get DATA_KEY(){return"bs.collapse"}toggle(){this._element.classList.contains("show")?this.hide():this.show()}show(){if(this._isTransitioning||this._element.classList.contains("show"))return;let t,e;this._parent&&(t=H.find(".show, .collapsing",this._parent).filter(t=>"string"==typeof this._config.parent?t.getAttribute("data-bs-parent")===this._config.parent:t.classList.contains("collapse")),0===t.length&&(t=null));const i=H.findOne(this._selector);if(t){const s=t.find(t=>i!==t);if(e=s?b.get(s,"bs.collapse"):null,e&&e._isTransitioning)return}if(N.trigger(this._element,"show.bs.collapse").defaultPrevented)return;t&&t.forEach(t=>{i!==t&&X.collapseInterface(t,"hide"),e||b.set(t,"bs.collapse",null)});const s=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[s]=0,this._triggerArray.length&&this._triggerArray.forEach(t=>{t.classList.remove("collapsed"),t.setAttribute("aria-expanded",!0)}),this.setTransitioning(!0);const o="scroll"+(s[0].toUpperCase()+s.slice(1)),r=n(this._element);N.one(this._element,"transitionend",()=>{this._element.classList.remove("collapsing"),this._element.classList.add("collapse","show"),this._element.style[s]="",this.setTransitioning(!1),N.trigger(this._element,"shown.bs.collapse")}),a(this._element,r),this._element.style[s]=this._element[o]+"px"}hide(){if(this._isTransitioning||!this._element.classList.contains("show"))return;if(N.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",u(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");const e=this._triggerArray.length;if(e>0)for(let t=0;t<e;t++){const e=this._triggerArray[t],i=s(e);i&&!i.classList.contains("show")&&(e.classList.add("collapsed"),e.setAttribute("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[t]="";const i=n(this._element);N.one(this._element,"transitionend",()=>{this.setTransitioning(!1),this._element.classList.remove("collapsing"),this._element.classList.add("collapse"),N.trigger(this._element,"hidden.bs.collapse")}),a(this._element,i)}setTransitioning(t){this._isTransitioning=t}dispose(){super.dispose(),this._config=null,this._parent=null,this._triggerArray=null,this._isTransitioning=null}_getConfig(t){return(t={...q,...t}).toggle=Boolean(t.toggle),l("collapse",t,V),t}_getDimension(){return this._element.classList.contains("width")?"width":"height"}_getParent(){let{parent:t}=this._config;r(t)?void 0===t.jquery&&void 0===t[0]||(t=t[0]):t=H.findOne(t);const e=`[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;return H.find(e,t).forEach(t=>{const e=s(t);this._addAriaAndCollapsedClass(e,[t])}),t}_addAriaAndCollapsedClass(t,e){if(!t||!e.length)return;const i=t.classList.contains("show");e.forEach(t=>{i?t.classList.remove("collapsed"):t.classList.add("collapsed"),t.setAttribute("aria-expanded",i)})}static collapseInterface(t,e){let i=b.get(t,"bs.collapse");const s={...q,...B.getDataAttributes(t),..."object"==typeof e&&e?e:{}};if(!i&&s.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(s.toggle=!1),i||(i=new X(t,s)),"string"==typeof e){if(void 0===i[e])throw new TypeError(`No method named "${e}"`);i[e]()}}static jQueryInterface(t){return this.each((function(){X.collapseInterface(this,t)}))}}N.on(document,"click.bs.collapse.data-api",'[data-bs-toggle="collapse"]',(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=B.getDataAttributes(this),s=i(this);H.find(s).forEach(t=>{const i=b.get(t,"bs.collapse");let s;i?(null===i._parent&&"string"==typeof e.parent&&(i._config.parent=e.parent,i._parent=i._getParent()),s="toggle"):s=e,X.collapseInterface(t,s)})})),m("collapse",X);var Q="top",G="bottom",Z="right",J="left",tt=[Q,G,Z,J],et=tt.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),it=[].concat(tt,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),st=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function nt(t){return t?(t.nodeName||"").toLowerCase():null}function ot(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function rt(t){return t instanceof ot(t).Element||t instanceof Element}function at(t){return t instanceof ot(t).HTMLElement||t instanceof HTMLElement}function lt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ot(t).ShadowRoot||t instanceof ShadowRoot)}var ct={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},s=e.attributes[t]||{},n=e.elements[t];at(n)&&nt(n)&&(Object.assign(n.style,i),Object.keys(s).forEach((function(t){var e=s[t];!1===e?n.removeAttribute(t):n.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var s=e.elements[t],n=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});at(s)&&nt(s)&&(Object.assign(s.style,o),Object.keys(n).forEach((function(t){s.removeAttribute(t)})))}))}},requires:["computeStyles"]};function dt(t){return t.split("-")[0]}function ht(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function ft(t){var e=ht(t),i=t.offsetWidth,s=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:s}}function ut(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&lt(i)){var s=e;do{if(s&&t.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function pt(t){return ot(t).getComputedStyle(t)}function gt(t){return["table","td","th"].indexOf(nt(t))>=0}function mt(t){return((rt(t)?t.ownerDocument:t.document)||window.document).documentElement}function _t(t){return"html"===nt(t)?t:t.assignedSlot||t.parentNode||(lt(t)?t.host:null)||mt(t)}function bt(t){return at(t)&&"fixed"!==pt(t).position?t.offsetParent:null}function vt(t){for(var e=ot(t),i=bt(t);i&&gt(i)&&"static"===pt(i).position;)i=bt(i);return i&&("html"===nt(i)||"body"===nt(i)&&"static"===pt(i).position)?e:i||function(t){for(var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),i=_t(t);at(i)&&["html","body"].indexOf(nt(i))<0;){var s=pt(i);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||e&&"filter"===s.willChange||e&&s.filter&&"none"!==s.filter)return i;i=i.parentNode}return null}(t)||e}function yt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var wt=Math.max,Et=Math.min,Tt=Math.round;function At(t,e,i){return wt(t,Et(e,i))}function Lt(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function Ot(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}var kt={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,s=t.name,n=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=dt(i.placement),l=yt(a),c=[J,Z].indexOf(a)>=0?"height":"width";if(o&&r){var d=function(t,e){return Lt("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:Ot(t,tt))}(n.padding,i),h=ft(o),f="y"===l?Q:J,u="y"===l?G:Z,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],g=r[l]-i.rects.reference[l],m=vt(o),_=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,b=p/2-g/2,v=d[f],y=_-h[c]-d[u],w=_/2-h[c]/2+b,E=At(v,w,y),T=l;i.modifiersData[s]=((e={})[T]=E,e.centerOffset=E-w,e)}},effect:function(t){var e=t.state,i=t.options.element,s=void 0===i?"[data-popper-arrow]":i;null!=s&&("string"!=typeof s||(s=e.elements.popper.querySelector(s)))&&ut(e.elements.popper,s)&&(e.elements.arrow=s)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},Dt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function xt(t){var e,i=t.popper,s=t.popperRect,n=t.placement,o=t.offsets,r=t.position,a=t.gpuAcceleration,l=t.adaptive,c=t.roundOffsets,d=!0===c?function(t){var e=t.x,i=t.y,s=window.devicePixelRatio||1;return{x:Tt(Tt(e*s)/s)||0,y:Tt(Tt(i*s)/s)||0}}(o):"function"==typeof c?c(o):o,h=d.x,f=void 0===h?0:h,u=d.y,p=void 0===u?0:u,g=o.hasOwnProperty("x"),m=o.hasOwnProperty("y"),_=J,b=Q,v=window;if(l){var y=vt(i),w="clientHeight",E="clientWidth";y===ot(i)&&"static"!==pt(y=mt(i)).position&&(w="scrollHeight",E="scrollWidth"),y=y,n===Q&&(b=G,p-=y[w]-s.height,p*=a?1:-1),n===J&&(_=Z,f-=y[E]-s.width,f*=a?1:-1)}var T,A=Object.assign({position:r},l&&Dt);return a?Object.assign({},A,((T={})[b]=m?"0":"",T[_]=g?"0":"",T.transform=(v.devicePixelRatio||1)<2?"translate("+f+"px, "+p+"px)":"translate3d("+f+"px, "+p+"px, 0)",T)):Object.assign({},A,((e={})[b]=m?p+"px":"",e[_]=g?f+"px":"",e.transform="",e))}var Ct={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,s=i.gpuAcceleration,n=void 0===s||s,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:dt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,xt(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,xt(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},St={passive:!0},Nt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,s=t.options,n=s.scroll,o=void 0===n||n,r=s.resize,a=void 0===r||r,l=ot(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,St)})),a&&l.addEventListener("resize",i.update,St),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,St)})),a&&l.removeEventListener("resize",i.update,St)}},data:{}},jt={left:"right",right:"left",bottom:"top",top:"bottom"};function Pt(t){return t.replace(/left|right|bottom|top/g,(function(t){return jt[t]}))}var It={start:"end",end:"start"};function Mt(t){return t.replace(/start|end/g,(function(t){return It[t]}))}function Rt(t){var e=ot(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Bt(t){return ht(mt(t)).left+Rt(t).scrollLeft}function Ht(t){var e=pt(t),i=e.overflow,s=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+n+s)}function Wt(t,e){var i;void 0===e&&(e=[]);var s=function t(e){return["html","body","#document"].indexOf(nt(e))>=0?e.ownerDocument.body:at(e)&&Ht(e)?e:t(_t(e))}(t),n=s===(null==(i=t.ownerDocument)?void 0:i.body),o=ot(s),r=n?[o].concat(o.visualViewport||[],Ht(s)?s:[]):s,a=e.concat(r);return n?a:a.concat(Wt(_t(r)))}function Ut(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function $t(t,e){return"viewport"===e?Ut(function(t){var e=ot(t),i=mt(t),s=e.visualViewport,n=i.clientWidth,o=i.clientHeight,r=0,a=0;return s&&(n=s.width,o=s.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(r=s.offsetLeft,a=s.offsetTop)),{width:n,height:o,x:r+Bt(t),y:a}}(t)):at(e)?function(t){var e=ht(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Ut(function(t){var e,i=mt(t),s=Rt(t),n=null==(e=t.ownerDocument)?void 0:e.body,o=wt(i.scrollWidth,i.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),r=wt(i.scrollHeight,i.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-s.scrollLeft+Bt(t),l=-s.scrollTop;return"rtl"===pt(n||i).direction&&(a+=wt(i.clientWidth,n?n.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(mt(t)))}function Ft(t){return t.split("-")[1]}function zt(t){var e,i=t.reference,s=t.element,n=t.placement,o=n?dt(n):null,r=n?Ft(n):null,a=i.x+i.width/2-s.width/2,l=i.y+i.height/2-s.height/2;switch(o){case Q:e={x:a,y:i.y-s.height};break;case G:e={x:a,y:i.y+i.height};break;case Z:e={x:i.x+i.width,y:l};break;case J:e={x:i.x-s.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?yt(o):null;if(null!=c){var d="y"===c?"height":"width";switch(r){case"start":e[c]=e[c]-(i[d]/2-s[d]/2);break;case"end":e[c]=e[c]+(i[d]/2-s[d]/2)}}return e}function Kt(t,e){void 0===e&&(e={});var i=e,s=i.placement,n=void 0===s?t.placement:s,o=i.boundary,r=void 0===o?"clippingParents":o,a=i.rootBoundary,l=void 0===a?"viewport":a,c=i.elementContext,d=void 0===c?"popper":c,h=i.altBoundary,f=void 0!==h&&h,u=i.padding,p=void 0===u?0:u,g=Lt("number"!=typeof p?p:Ot(p,tt)),m="popper"===d?"reference":"popper",_=t.elements.reference,b=t.rects.popper,v=t.elements[f?m:d],y=function(t,e,i){var s="clippingParents"===e?function(t){var e=Wt(_t(t)),i=["absolute","fixed"].indexOf(pt(t).position)>=0&&at(t)?vt(t):t;return rt(i)?e.filter((function(t){return rt(t)&&ut(t,i)&&"body"!==nt(t)})):[]}(t):[].concat(e),n=[].concat(s,[i]),o=n[0],r=n.reduce((function(e,i){var s=$t(t,i);return e.top=wt(s.top,e.top),e.right=Et(s.right,e.right),e.bottom=Et(s.bottom,e.bottom),e.left=wt(s.left,e.left),e}),$t(t,o));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}(rt(v)?v:v.contextElement||mt(t.elements.popper),r,l),w=ht(_),E=zt({reference:w,element:b,strategy:"absolute",placement:n}),T=Ut(Object.assign({},b,E)),A="popper"===d?T:w,L={top:y.top-A.top+g.top,bottom:A.bottom-y.bottom+g.bottom,left:y.left-A.left+g.left,right:A.right-y.right+g.right},O=t.modifiersData.offset;if("popper"===d&&O){var k=O[n];Object.keys(L).forEach((function(t){var e=[Z,G].indexOf(t)>=0?1:-1,i=[Q,G].indexOf(t)>=0?"y":"x";L[t]+=k[i]*e}))}return L}function Yt(t,e){void 0===e&&(e={});var i=e,s=i.placement,n=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?it:l,d=Ft(s),h=d?a?et:et.filter((function(t){return Ft(t)===d})):tt,f=h.filter((function(t){return c.indexOf(t)>=0}));0===f.length&&(f=h);var u=f.reduce((function(e,i){return e[i]=Kt(t,{placement:i,boundary:n,rootBoundary:o,padding:r})[dt(i)],e}),{});return Object.keys(u).sort((function(t,e){return u[t]-u[e]}))}var qt={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var n=i.mainAxis,o=void 0===n||n,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,d=i.boundary,h=i.rootBoundary,f=i.altBoundary,u=i.flipVariations,p=void 0===u||u,g=i.allowedAutoPlacements,m=e.options.placement,_=dt(m),b=l||(_!==m&&p?function(t){if("auto"===dt(t))return[];var e=Pt(t);return[Mt(t),e,Mt(e)]}(m):[Pt(m)]),v=[m].concat(b).reduce((function(t,i){return t.concat("auto"===dt(i)?Yt(e,{placement:i,boundary:d,rootBoundary:h,padding:c,flipVariations:p,allowedAutoPlacements:g}):i)}),[]),y=e.rects.reference,w=e.rects.popper,E=new Map,T=!0,A=v[0],L=0;L<v.length;L++){var O=v[L],k=dt(O),D="start"===Ft(O),x=[Q,G].indexOf(k)>=0,C=x?"width":"height",S=Kt(e,{placement:O,boundary:d,rootBoundary:h,altBoundary:f,padding:c}),N=x?D?Z:J:D?G:Q;y[C]>w[C]&&(N=Pt(N));var j=Pt(N),P=[];if(o&&P.push(S[k]<=0),a&&P.push(S[N]<=0,S[j]<=0),P.every((function(t){return t}))){A=O,T=!1;break}E.set(O,P)}if(T)for(var I=function(t){var e=v.find((function(e){var i=E.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return A=e,"break"},M=p?3:1;M>0&&"break"!==I(M);M--);e.placement!==A&&(e.modifiersData[s]._skip=!0,e.placement=A,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Vt(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function Xt(t){return[Q,Z,G,J].some((function(e){return t[e]>=0}))}var Qt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,s=e.rects.reference,n=e.rects.popper,o=e.modifiersData.preventOverflow,r=Kt(e,{elementContext:"reference"}),a=Kt(e,{altBoundary:!0}),l=Vt(r,s),c=Vt(a,n,o),d=Xt(l),h=Xt(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":h})}},Gt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,s=t.name,n=i.offset,o=void 0===n?[0,0]:n,r=it.reduce((function(t,i){return t[i]=function(t,e,i){var s=dt(t),n=[J,Q].indexOf(s)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*n,[J,Z].indexOf(s)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[s]=r}},Zt={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=zt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},Jt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,s=t.name,n=i.mainAxis,o=void 0===n||n,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,d=i.altBoundary,h=i.padding,f=i.tether,u=void 0===f||f,p=i.tetherOffset,g=void 0===p?0:p,m=Kt(e,{boundary:l,rootBoundary:c,padding:h,altBoundary:d}),_=dt(e.placement),b=Ft(e.placement),v=!b,y=yt(_),w="x"===y?"y":"x",E=e.modifiersData.popperOffsets,T=e.rects.reference,A=e.rects.popper,L="function"==typeof g?g(Object.assign({},e.rects,{placement:e.placement})):g,O={x:0,y:0};if(E){if(o||a){var k="y"===y?Q:J,D="y"===y?G:Z,x="y"===y?"height":"width",C=E[y],S=E[y]+m[k],N=E[y]-m[D],j=u?-A[x]/2:0,P="start"===b?T[x]:A[x],I="start"===b?-A[x]:-T[x],M=e.elements.arrow,R=u&&M?ft(M):{width:0,height:0},B=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},H=B[k],W=B[D],U=At(0,T[x],R[x]),$=v?T[x]/2-j-U-H-L:P-U-H-L,F=v?-T[x]/2+j+U+W+L:I+U+W+L,z=e.elements.arrow&&vt(e.elements.arrow),K=z?"y"===y?z.clientTop||0:z.clientLeft||0:0,Y=e.modifiersData.offset?e.modifiersData.offset[e.placement][y]:0,q=E[y]+$-Y-K,V=E[y]+F-Y;if(o){var X=At(u?Et(S,q):S,C,u?wt(N,V):N);E[y]=X,O[y]=X-C}if(a){var tt="x"===y?Q:J,et="x"===y?G:Z,it=E[w],st=it+m[tt],nt=it-m[et],ot=At(u?Et(st,q):st,it,u?wt(nt,V):nt);E[w]=ot,O[w]=ot-it}}e.modifiersData[s]=O}},requiresIfExists:["offset"]};function te(t,e,i){void 0===i&&(i=!1);var s,n,o=mt(e),r=ht(t),a=at(e),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(a||!a&&!i)&&(("body"!==nt(e)||Ht(o))&&(l=(s=e)!==ot(s)&&at(s)?{scrollLeft:(n=s).scrollLeft,scrollTop:n.scrollTop}:Rt(s)),at(e)?((c=ht(e)).x+=e.clientLeft,c.y+=e.clientTop):o&&(c.x=Bt(o))),{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}var ee={placement:"bottom",modifiers:[],strategy:"absolute"};function ie(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function se(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,s=void 0===i?[]:i,n=e.defaultOptions,o=void 0===n?ee:n;return function(t,e,i){void 0===i&&(i=o);var n,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},ee,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,d={state:a,setOptions:function(i){h(),a.options=Object.assign({},o,a.options,i),a.scrollParents={reference:rt(t)?Wt(t):t.contextElement?Wt(t.contextElement):[],popper:Wt(e)};var n,r,c=function(t){var e=function(t){var e=new Map,i=new Set,s=[];return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||function t(n){i.add(n.name),[].concat(n.requires||[],n.requiresIfExists||[]).forEach((function(s){if(!i.has(s)){var n=e.get(s);n&&t(n)}})),s.push(n)}(t)})),s}(t);return st.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((n=[].concat(s,a.options.modifiers),r=n.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(r).map((function(t){return r[t]}))));return a.orderedModifiers=c.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,s=void 0===i?{}:i,n=t.effect;if("function"==typeof n){var o=n({state:a,name:e,instance:d,options:s});l.push(o||function(){})}})),d.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(ie(e,i)){a.rects={reference:te(e,vt(i),"fixed"===a.options.strategy),popper:ft(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var s=0;s<a.orderedModifiers.length;s++)if(!0!==a.reset){var n=a.orderedModifiers[s],o=n.fn,r=n.options,l=void 0===r?{}:r,h=n.name;"function"==typeof o&&(a=o({state:a,options:l,name:h,instance:d})||a)}else a.reset=!1,s=-1}}},update:(n=function(){return new Promise((function(t){d.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(n())}))}))),r}),destroy:function(){h(),c=!0}};if(!ie(t,e))return d;function h(){l.forEach((function(t){return t()})),l=[]}return d.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),d}}var ne=se(),oe=se({defaultModifiers:[Nt,Zt,Ct,ct]}),re=se({defaultModifiers:[Nt,Zt,Ct,ct,Gt,qt,Jt,kt,Qt]}),ae=Object.freeze({__proto__:null,popperGenerator:se,detectOverflow:Kt,createPopperBase:ne,createPopper:re,createPopperLite:oe,top:Q,bottom:G,right:Z,left:J,auto:"auto",basePlacements:tt,start:"start",end:"end",clippingParents:"clippingParents",viewport:"viewport",popper:"popper",reference:"reference",variationPlacements:et,placements:it,beforeRead:"beforeRead",read:"read",afterRead:"afterRead",beforeMain:"beforeMain",main:"main",afterMain:"afterMain",beforeWrite:"beforeWrite",write:"write",afterWrite:"afterWrite",modifierPhases:st,applyStyles:ct,arrow:kt,computeStyles:Ct,eventListeners:Nt,flip:qt,hide:Qt,offset:Gt,popperOffsets:Zt,preventOverflow:Jt});const le=new RegExp("ArrowUp|ArrowDown|Escape"),ce=g()?"top-end":"top-start",de=g()?"top-start":"top-end",he=g()?"bottom-end":"bottom-start",fe=g()?"bottom-start":"bottom-end",ue=g()?"left-start":"right-start",pe=g()?"right-start":"left-start",ge={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null},me={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)"};class _e extends j{constructor(t,e){super(t),this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}static get Default(){return ge}static get DefaultType(){return me}static get DATA_KEY(){return"bs.dropdown"}toggle(){if(this._element.disabled||this._element.classList.contains("disabled"))return;const t=this._element.classList.contains("show");_e.clearMenus(),t||this.show()}show(){if(this._element.disabled||this._element.classList.contains("disabled")||this._menu.classList.contains("show"))return;const t=_e.getParentFromElement(this._element),e={relatedTarget:this._element};if(!N.trigger(this._element,"show.bs.dropdown",e).defaultPrevented){if(this._inNavbar)B.setDataAttribute(this._menu,"popper","none");else{if(void 0===ae)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=t:r(this._config.reference)?(e=this._config.reference,void 0!==this._config.reference.jquery&&(e=this._config.reference[0])):"object"==typeof this._config.reference&&(e=this._config.reference);const i=this._getPopperConfig(),s=i.modifiers.find(t=>"applyStyles"===t.name&&!1===t.enabled);this._popper=re(e,this._menu,i),s&&B.setDataAttribute(this._menu,"popper","static")}"ontouchstart"in document.documentElement&&!t.closest(".navbar-nav")&&[].concat(...document.body.children).forEach(t=>N.on(t,"mouseover",null,(function(){}))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),N.trigger(this._element,"shown.bs.dropdown",e)}}hide(){if(this._element.disabled||this._element.classList.contains("disabled")||!this._menu.classList.contains("show"))return;const t={relatedTarget:this._element};N.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented||(this._popper&&this._popper.destroy(),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),B.removeDataAttribute(this._menu,"popper"),N.trigger(this._element,"hidden.bs.dropdown",t))}dispose(){N.off(this._element,".bs.dropdown"),this._menu=null,this._popper&&(this._popper.destroy(),this._popper=null),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_addEventListeners(){N.on(this._element,"click.bs.dropdown",t=>{t.preventDefault(),this.toggle()})}_getConfig(t){if(t={...this.constructor.Default,...B.getDataAttributes(this._element),...t},l("dropdown",t,this.constructor.DefaultType),"object"==typeof t.reference&&!r(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError("dropdown".toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return t}_getMenuElement(){return H.next(this._element,".dropdown-menu")[0]}_getPlacement(){const t=this._element.parentNode;if(t.classList.contains("dropend"))return ue;if(t.classList.contains("dropstart"))return pe;const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?de:ce:e?fe:he}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}static dropdownInterface(t,e){let i=b.get(t,"bs.dropdown");if(i||(i=new _e(t,"object"==typeof e?e:null)),"string"==typeof e){if(void 0===i[e])throw new TypeError(`No method named "${e}"`);i[e]()}}static jQueryInterface(t){return this.each((function(){_e.dropdownInterface(this,t)}))}static clearMenus(t){if(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;if(/input|select|textarea|form/i.test(t.target.tagName))return}const e=H.find('[data-bs-toggle="dropdown"]');for(let i=0,s=e.length;i<s;i++){const s=b.get(e[i],"bs.dropdown"),n={relatedTarget:e[i]};if(t&&"click"===t.type&&(n.clickEvent=t),!s)continue;const o=s._menu;if(e[i].classList.contains("show")){if(t){if([s._element].some(e=>t.composedPath().includes(e)))continue;if("keyup"===t.type&&"Tab"===t.key&&o.contains(t.target))continue}N.trigger(e[i],"hide.bs.dropdown",n).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>N.off(t,"mouseover",null,(function(){}))),e[i].setAttribute("aria-expanded","false"),s._popper&&s._popper.destroy(),o.classList.remove("show"),e[i].classList.remove("show"),B.removeDataAttribute(o,"popper"),N.trigger(e[i],"hidden.bs.dropdown",n))}}}static getParentFromElement(t){return s(t)||t.parentNode}static dataApiKeydownHandler(t){if(/input|textarea/i.test(t.target.tagName)?"Space"===t.key||"Escape"!==t.key&&("ArrowDown"!==t.key&&"ArrowUp"!==t.key||t.target.closest(".dropdown-menu")):!le.test(t.key))return;if(t.preventDefault(),t.stopPropagation(),this.disabled||this.classList.contains("disabled"))return;const e=_e.getParentFromElement(this),i=this.classList.contains("show");if("Escape"===t.key)return(this.matches('[data-bs-toggle="dropdown"]')?this:H.prev(this,'[data-bs-toggle="dropdown"]')[0]).focus(),void _e.clearMenus();if(!i&&("ArrowUp"===t.key||"ArrowDown"===t.key))return void(this.matches('[data-bs-toggle="dropdown"]')?this:H.prev(this,'[data-bs-toggle="dropdown"]')[0]).click();if(!i||"Space"===t.key)return void _e.clearMenus();const s=H.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",e).filter(c);if(!s.length)return;let n=s.indexOf(t.target);"ArrowUp"===t.key&&n>0&&n--,"ArrowDown"===t.key&&n<s.length-1&&n++,n=-1===n?0:n,s[n].focus()}}N.on(document,"keydown.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',_e.dataApiKeydownHandler),N.on(document,"keydown.bs.dropdown.data-api",".dropdown-menu",_e.dataApiKeydownHandler),N.on(document,"click.bs.dropdown.data-api",_e.clearMenus),N.on(document,"keyup.bs.dropdown.data-api",_e.clearMenus),N.on(document,"click.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',(function(t){t.preventDefault(),_e.dropdownInterface(this)})),m("dropdown",_e);const be={backdrop:!0,keyboard:!0,focus:!0},ve={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"};class ye extends j{constructor(t,e){super(t),this._config=this._getConfig(e),this._dialog=H.findOne(".modal-dialog",this._element),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}static get Default(){return be}static get DATA_KEY(){return"bs.modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;this._isAnimated()&&(this._isTransitioning=!0);const e=N.trigger(this._element,"show.bs.modal",{relatedTarget:t});this._isShown||e.defaultPrevented||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),N.on(this._element,"click.dismiss.bs.modal",'[data-bs-dismiss="modal"]',t=>this.hide(t)),N.on(this._dialog,"mousedown.dismiss.bs.modal",()=>{N.one(this._element,"mouseup.dismiss.bs.modal",t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(t)))}hide(t){if(t&&t.preventDefault(),!this._isShown||this._isTransitioning)return;if(N.trigger(this._element,"hide.bs.modal").defaultPrevented)return;this._isShown=!1;const e=this._isAnimated();if(e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),N.off(document,"focusin.bs.modal"),this._element.classList.remove("show"),N.off(this._element,"click.dismiss.bs.modal"),N.off(this._dialog,"mousedown.dismiss.bs.modal"),e){const t=n(this._element);N.one(this._element,"transitionend",t=>this._hideModal(t)),a(this._element,t)}else this._hideModal()}dispose(){[window,this._element,this._dialog].forEach(t=>N.off(t,".bs.modal")),super.dispose(),N.off(document,"focusin.bs.modal"),this._config=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null}handleUpdate(){this._adjustDialog()}_getConfig(t){return t={...be,...t},l("modal",t,ve),t}_showElement(t){const e=this._isAnimated(),i=H.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,i&&(i.scrollTop=0),e&&u(this._element),this._element.classList.add("show"),this._config.focus&&this._enforceFocus();const s=()=>{this._config.focus&&this._element.focus(),this._isTransitioning=!1,N.trigger(this._element,"shown.bs.modal",{relatedTarget:t})};if(e){const t=n(this._dialog);N.one(this._dialog,"transitionend",s),a(this._dialog,t)}else s()}_enforceFocus(){N.off(document,"focusin.bs.modal"),N.on(document,"focusin.bs.modal",t=>{document===t.target||this._element===t.target||this._element.contains(t.target)||this._element.focus()})}_setEscapeEvent(){this._isShown?N.on(this._element,"keydown.dismiss.bs.modal",t=>{this._config.keyboard&&"Escape"===t.key?(t.preventDefault(),this.hide()):this._config.keyboard||"Escape"!==t.key||this._triggerBackdropTransition()}):N.off(this._element,"keydown.dismiss.bs.modal")}_setResizeEvent(){this._isShown?N.on(window,"resize.bs.modal",()=>this._adjustDialog()):N.off(window,"resize.bs.modal")}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop(()=>{document.body.classList.remove("modal-open"),this._resetAdjustments(),this._resetScrollbar(),N.trigger(this._element,"hidden.bs.modal")})}_removeBackdrop(){this._backdrop.parentNode.removeChild(this._backdrop),this._backdrop=null}_showBackdrop(t){const e=this._isAnimated();if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",e&&this._backdrop.classList.add("fade"),document.body.appendChild(this._backdrop),N.on(this._element,"click.dismiss.bs.modal",t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===this._config.backdrop?this._triggerBackdropTransition():this.hide())}),e&&u(this._backdrop),this._backdrop.classList.add("show"),!e)return void t();const i=n(this._backdrop);N.one(this._backdrop,"transitionend",t),a(this._backdrop,i)}else if(!this._isShown&&this._backdrop){this._backdrop.classList.remove("show");const i=()=>{this._removeBackdrop(),t()};if(e){const t=n(this._backdrop);N.one(this._backdrop,"transitionend",i),a(this._backdrop,t)}else i()}else t()}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(N.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight;t||(this._element.style.overflowY="hidden"),this._element.classList.add("modal-static");const e=n(this._dialog);N.off(this._element,"transitionend"),N.one(this._element,"transitionend",()=>{this._element.classList.remove("modal-static"),t||(N.one(this._element,"transitionend",()=>{this._element.style.overflowY=""}),a(this._element,e))}),a(this._element,e),this._element.focus()}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight;(!this._isBodyOverflowing&&t&&!g()||this._isBodyOverflowing&&!t&&g())&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),(this._isBodyOverflowing&&!t&&!g()||!this._isBodyOverflowing&&t&&g())&&(this._element.style.paddingRight=this._scrollbarWidth+"px")}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}_checkScrollbar(){const t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()}_setScrollbar(){this._isBodyOverflowing&&(this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight",t=>t+this._scrollbarWidth),this._setElementAttributes(".sticky-top","marginRight",t=>t-this._scrollbarWidth),this._setElementAttributes("body","paddingRight",t=>t+this._scrollbarWidth)),document.body.classList.add("modal-open")}_setElementAttributes(t,e,i){H.find(t).forEach(t=>{if(t!==document.body&&window.innerWidth>t.clientWidth+this._scrollbarWidth)return;const s=t.style[e],n=window.getComputedStyle(t)[e];B.setDataAttribute(t,e,s),t.style[e]=i(Number.parseFloat(n))+"px"})}_resetScrollbar(){this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight"),this._resetElementAttributes(".sticky-top","marginRight"),this._resetElementAttributes("body","paddingRight")}_resetElementAttributes(t,e){H.find(t).forEach(t=>{const i=B.getDataAttribute(t,e);void 0===i&&t===document.body?t.style[e]="":(B.removeDataAttribute(t,e),t.style[e]=i)})}_getScrollbarWidth(){const t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e}static jQueryInterface(t,e){return this.each((function(){let i=b.get(this,"bs.modal");const s={...be,...B.getDataAttributes(this),..."object"==typeof t&&t?t:{}};if(i||(i=new ye(this,s)),"string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}N.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=s(this);"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault(),N.one(e,"show.bs.modal",t=>{t.defaultPrevented||N.one(e,"hidden.bs.modal",()=>{c(this)&&this.focus()})});let i=b.get(e,"bs.modal");if(!i){const t={...B.getDataAttributes(e),...B.getDataAttributes(this)};i=new ye(e,t)}i.toggle(this)})),m("modal",ye);const we=()=>{const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)},Ee=(t,e,i)=>{const s=we();H.find(t).forEach(t=>{if(t!==document.body&&window.innerWidth>t.clientWidth+s)return;const n=t.style[e],o=window.getComputedStyle(t)[e];B.setDataAttribute(t,e,n),t.style[e]=i(Number.parseFloat(o))+"px"})},Te=(t,e)=>{H.find(t).forEach(t=>{const i=B.getDataAttribute(t,e);void 0===i&&t===document.body?t.style.removeProperty(e):(B.removeDataAttribute(t,e),t.style[e]=i)})},Ae={backdrop:!0,keyboard:!0,scroll:!1},Le={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"};class Oe extends j{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._addEventListeners()}static get Default(){return Ae}static get DATA_KEY(){return"bs.offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||N.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._element.style.visibility="visible",this._config.backdrop&&document.body.classList.add("offcanvas-backdrop"),this._config.scroll||((t=we())=>{document.body.style.overflow="hidden",Ee(".fixed-top, .fixed-bottom, .is-fixed","paddingRight",e=>e+t),Ee(".sticky-top","marginRight",e=>e-t),Ee("body","paddingRight",e=>e+t)})(),this._element.classList.add("offcanvas-toggling"),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add("show"),setTimeout(()=>{this._element.classList.remove("offcanvas-toggling"),N.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t}),this._enforceFocusOnElement(this._element)},n(this._element)))}hide(){this._isShown&&(N.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._element.classList.add("offcanvas-toggling"),N.off(document,"focusin.bs.offcanvas"),this._element.blur(),this._isShown=!1,this._element.classList.remove("show"),setTimeout(()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.backdrop&&document.body.classList.remove("offcanvas-backdrop"),this._config.scroll||(document.body.style.overflow="auto",Te(".fixed-top, .fixed-bottom, .is-fixed","paddingRight"),Te(".sticky-top","marginRight"),Te("body","paddingRight")),N.trigger(this._element,"hidden.bs.offcanvas"),this._element.classList.remove("offcanvas-toggling")},n(this._element))))}_getConfig(t){return t={...Ae,...B.getDataAttributes(this._element),..."object"==typeof t?t:{}},l("offcanvas",t,Le),t}_enforceFocusOnElement(t){N.off(document,"focusin.bs.offcanvas"),N.on(document,"focusin.bs.offcanvas",e=>{document===e.target||t===e.target||t.contains(e.target)||t.focus()}),t.focus()}_addEventListeners(){N.on(this._element,"click.dismiss.bs.offcanvas",'[data-bs-dismiss="offcanvas"]',()=>this.hide()),N.on(document,"keydown",t=>{this._config.keyboard&&"Escape"===t.key&&this.hide()}),N.on(document,"click.bs.offcanvas.data-api",t=>{const e=H.findOne(i(t.target));this._element.contains(t.target)||e===this._element||this.hide()})}static jQueryInterface(t){return this.each((function(){const e=b.get(this,"bs.offcanvas")||new Oe(this,"object"==typeof t?t:{});if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}N.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=s(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),d(this))return;N.one(e,"hidden.bs.offcanvas",()=>{c(this)&&this.focus()});const i=H.findOne(".offcanvas.show, .offcanvas-toggling");i&&i!==e||(b.get(e,"bs.offcanvas")||new Oe(e)).toggle(this)})),N.on(window,"load.bs.offcanvas.data-api",()=>{H.find(".offcanvas.show").forEach(t=>(b.get(t,"bs.offcanvas")||new Oe(t)).show())}),m("offcanvas",Oe);const ke=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),De=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,xe=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Ce=(t,e)=>{const i=t.nodeName.toLowerCase();if(e.includes(i))return!ke.has(i)||Boolean(De.test(t.nodeValue)||xe.test(t.nodeValue));const s=e.filter(t=>t instanceof RegExp);for(let t=0,e=s.length;t<e;t++)if(s[t].test(i))return!0;return!1};function Se(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const s=(new window.DOMParser).parseFromString(t,"text/html"),n=Object.keys(e),o=[].concat(...s.body.querySelectorAll("*"));for(let t=0,i=o.length;t<i;t++){const i=o[t],s=i.nodeName.toLowerCase();if(!n.includes(s)){i.parentNode.removeChild(i);continue}const r=[].concat(...i.attributes),a=[].concat(e["*"]||[],e[s]||[]);r.forEach(t=>{Ce(t,a)||i.removeAttribute(t.nodeName)})}return s.body.innerHTML}const Ne=new RegExp("(^|\\s)bs-tooltip\\S+","g"),je=new Set(["sanitize","allowList","sanitizeFn"]),Pe={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Ie={AUTO:"auto",TOP:"top",RIGHT:g()?"left":"right",BOTTOM:"bottom",LEFT:g()?"right":"left"},Me={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},Re={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"};class Be extends j{constructor(t,e){if(void 0===ae)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.config=this._getConfig(e),this.tip=null,this._setListeners()}static get Default(){return Me}static get NAME(){return"tooltip"}static get DATA_KEY(){return"bs.tooltip"}static get Event(){return Re}static get EVENT_KEY(){return".bs.tooltip"}static get DefaultType(){return Pe}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains("show"))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),N.off(this._element,this.constructor.EVENT_KEY),N.off(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.parentNode&&this.tip.parentNode.removeChild(this.tip),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.config=null,this.tip=null,super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=N.trigger(this._element,this.constructor.Event.SHOW),i=h(this._element),s=null===i?this._element.ownerDocument.documentElement.contains(this._element):i.contains(this._element);if(e.defaultPrevented||!s)return;const o=this.getTipElement(),r=t(this.constructor.NAME);o.setAttribute("id",r),this._element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&o.classList.add("fade");const l="function"==typeof this.config.placement?this.config.placement.call(this,o,this._element):this.config.placement,c=this._getAttachment(l);this._addAttachmentClass(c);const d=this._getContainer();b.set(o,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(d.appendChild(o),N.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=re(this._element,o,this._getPopperConfig(c)),o.classList.add("show");const f="function"==typeof this.config.customClass?this.config.customClass():this.config.customClass;f&&o.classList.add(...f.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>{N.on(t,"mouseover",(function(){}))});const u=()=>{const t=this._hoverState;this._hoverState=null,N.trigger(this._element,this.constructor.Event.SHOWN),"out"===t&&this._leave(null,this)};if(this.tip.classList.contains("fade")){const t=n(this.tip);N.one(this.tip,"transitionend",u),a(this.tip,t)}else u()}hide(){if(!this._popper)return;const t=this.getTipElement(),e=()=>{this._isWithActiveTrigger()||("show"!==this._hoverState&&t.parentNode&&t.parentNode.removeChild(t),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),N.trigger(this._element,this.constructor.Event.HIDDEN),this._popper&&(this._popper.destroy(),this._popper=null))};if(!N.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented){if(t.classList.remove("show"),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>N.off(t,"mouseover",f)),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this.tip.classList.contains("fade")){const i=n(t);N.one(t,"transitionend",e),a(t,i)}else e();this._hoverState=""}}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");return t.innerHTML=this.config.template,this.tip=t.children[0],this.tip}setContent(){const t=this.getTipElement();this.setElementContent(H.findOne(".tooltip-inner",t),this.getTitle()),t.classList.remove("fade","show")}setElementContent(t,e){if(null!==t)return"object"==typeof e&&r(e)?(e.jquery&&(e=e[0]),void(this.config.html?e.parentNode!==t&&(t.innerHTML="",t.appendChild(e)):t.textContent=e.textContent)):void(this.config.html?(this.config.sanitize&&(e=Se(e,this.config.allowList,this.config.sanitizeFn)),t.innerHTML=e):t.textContent=e)}getTitle(){let t=this._element.getAttribute("data-bs-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this._element):this.config.title),t}updateAttachment(t){return"right"===t?"end":"left"===t?"start":t}_initializeOnDelegatedTarget(t,e){const i=this.constructor.DATA_KEY;return(e=e||b.get(t.delegateTarget,i))||(e=new this.constructor(t.delegateTarget,this._getDelegateConfig()),b.set(t.delegateTarget,i,e)),e}_getOffset(){const{offset:t}=this.config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{altBoundary:!0,fallbackPlacements:this.config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this.config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:t=>this._handlePopperPlacementChange(t)}],onFirstUpdate:t=>{t.options.placement!==t.placement&&this._handlePopperPlacementChange(t)}};return{...e,..."function"==typeof this.config.popperConfig?this.config.popperConfig(e):this.config.popperConfig}}_addAttachmentClass(t){this.getTipElement().classList.add("bs-tooltip-"+this.updateAttachment(t))}_getContainer(){return!1===this.config.container?document.body:r(this.config.container)?this.config.container:H.findOne(this.config.container)}_getAttachment(t){return Ie[t.toUpperCase()]}_setListeners(){this.config.trigger.split(" ").forEach(t=>{if("click"===t)N.on(this._element,this.constructor.Event.CLICK,this.config.selector,t=>this.toggle(t));else if("manual"!==t){const e="hover"===t?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,i="hover"===t?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;N.on(this._element,e,this.config.selector,t=>this._enter(t)),N.on(this._element,i,this.config.selector,t=>this._leave(t))}}),this._hideModalHandler=()=>{this._element&&this.hide()},N.on(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.config.selector?this.config={...this.config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))}_enter(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e.getTipElement().classList.contains("show")||"show"===e._hoverState?e._hoverState="show":(clearTimeout(e._timeout),e._hoverState="show",e.config.delay&&e.config.delay.show?e._timeout=setTimeout(()=>{"show"===e._hoverState&&e.show()},e.config.delay.show):e.show())}_leave(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?"focus":"hover"]=e._element.contains(t.relatedTarget)),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState="out",e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(()=>{"out"===e._hoverState&&e.hide()},e.config.delay.hide):e.hide())}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=B.getDataAttributes(this._element);return Object.keys(e).forEach(t=>{je.has(t)&&delete e[t]}),t&&"object"==typeof t.container&&t.container.jquery&&(t.container=t.container[0]),"number"==typeof(t={...this.constructor.Default,...e,..."object"==typeof t&&t?t:{}}).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),l("tooltip",t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.allowList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};if(this.config)for(const e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t}_cleanTipClass(){const t=this.getTipElement(),e=t.getAttribute("class").match(Ne);null!==e&&e.length>0&&e.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}_handlePopperPlacementChange(t){const{state:e}=t;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))}static jQueryInterface(t){return this.each((function(){let e=b.get(this,"bs.tooltip");const i="object"==typeof t&&t;if((e||!/dispose|hide/.test(t))&&(e||(e=new Be(this,i)),"string"==typeof t)){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m("tooltip",Be);const He=new RegExp("(^|\\s)bs-popover\\S+","g"),We={...Be.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},Ue={...Be.DefaultType,content:"(string|element|function)"},$e={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"};class Fe extends Be{static get Default(){return We}static get NAME(){return"popover"}static get DATA_KEY(){return"bs.popover"}static get Event(){return $e}static get EVENT_KEY(){return".bs.popover"}static get DefaultType(){return Ue}isWithContent(){return this.getTitle()||this._getContent()}setContent(){const t=this.getTipElement();this.setElementContent(H.findOne(".popover-header",t),this.getTitle());let e=this._getContent();"function"==typeof e&&(e=e.call(this._element)),this.setElementContent(H.findOne(".popover-body",t),e),t.classList.remove("fade","show")}_addAttachmentClass(t){this.getTipElement().classList.add("bs-popover-"+this.updateAttachment(t))}_getContent(){return this._element.getAttribute("data-bs-content")||this.config.content}_cleanTipClass(){const t=this.getTipElement(),e=t.getAttribute("class").match(He);null!==e&&e.length>0&&e.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}static jQueryInterface(t){return this.each((function(){let e=b.get(this,"bs.popover");const i="object"==typeof t?t:null;if((e||!/dispose|hide/.test(t))&&(e||(e=new Fe(this,i),b.set(this,"bs.popover",e)),"string"==typeof t)){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m("popover",Fe);const ze={offset:10,method:"auto",target:""},Ke={offset:"number",method:"string",target:"(string|element)"};class Ye extends j{constructor(t,e){super(t),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(e),this._selector=`${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,N.on(this._scrollElement,"scroll.bs.scrollspy",()=>this._process()),this.refresh(),this._process()}static get Default(){return ze}static get DATA_KEY(){return"bs.scrollspy"}refresh(){const t=this._scrollElement===this._scrollElement.window?"offset":"position",e="auto"===this._config.method?t:this._config.method,s="position"===e?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),H.find(this._selector).map(t=>{const n=i(t),o=n?H.findOne(n):null;if(o){const t=o.getBoundingClientRect();if(t.width||t.height)return[B[e](o).top+s,n]}return null}).filter(t=>t).sort((t,e)=>t[0]-e[0]).forEach(t=>{this._offsets.push(t[0]),this._targets.push(t[1])})}dispose(){super.dispose(),N.off(this._scrollElement,".bs.scrollspy"),this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null}_getConfig(e){if("string"!=typeof(e={...ze,..."object"==typeof e&&e?e:{}}).target&&r(e.target)){let{id:i}=e.target;i||(i=t("scrollspy"),e.target.id=i),e.target="#"+i}return l("scrollspy",e,Ke),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),i=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=i){const t=this._targets[this._targets.length-1];this._activeTarget!==t&&this._activate(t)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let e=this._offsets.length;e--;)this._activeTarget!==this._targets[e]&&t>=this._offsets[e]&&(void 0===this._offsets[e+1]||t<this._offsets[e+1])&&this._activate(this._targets[e])}}_activate(t){this._activeTarget=t,this._clear();const e=this._selector.split(",").map(e=>`${e}[data-bs-target="${t}"],${e}[href="${t}"]`),i=H.findOne(e.join(","));i.classList.contains("dropdown-item")?(H.findOne(".dropdown-toggle",i.closest(".dropdown")).classList.add("active"),i.classList.add("active")):(i.classList.add("active"),H.parents(i,".nav, .list-group").forEach(t=>{H.prev(t,".nav-link, .list-group-item").forEach(t=>t.classList.add("active")),H.prev(t,".nav-item").forEach(t=>{H.children(t,".nav-link").forEach(t=>t.classList.add("active"))})})),N.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:t})}_clear(){H.find(this._selector).filter(t=>t.classList.contains("active")).forEach(t=>t.classList.remove("active"))}static jQueryInterface(t){return this.each((function(){let e=b.get(this,"bs.scrollspy");if(e||(e=new Ye(this,"object"==typeof t&&t)),"string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(window,"load.bs.scrollspy.data-api",()=>{H.find('[data-bs-spy="scroll"]').forEach(t=>new Ye(t,B.getDataAttributes(t)))}),m("scrollspy",Ye);class qe extends j{static get DATA_KEY(){return"bs.tab"}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains("active")||d(this._element))return;let t;const e=s(this._element),i=this._element.closest(".nav, .list-group");if(i){const e="UL"===i.nodeName||"OL"===i.nodeName?":scope > li > .active":".active";t=H.find(e,i),t=t[t.length-1]}const n=t?N.trigger(t,"hide.bs.tab",{relatedTarget:this._element}):null;if(N.trigger(this._element,"show.bs.tab",{relatedTarget:t}).defaultPrevented||null!==n&&n.defaultPrevented)return;this._activate(this._element,i);const o=()=>{N.trigger(t,"hidden.bs.tab",{relatedTarget:this._element}),N.trigger(this._element,"shown.bs.tab",{relatedTarget:t})};e?this._activate(e,e.parentNode,o):o()}_activate(t,e,i){const s=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?H.children(e,".active"):H.find(":scope > li > .active",e))[0],o=i&&s&&s.classList.contains("fade"),r=()=>this._transitionComplete(t,s,i);if(s&&o){const t=n(s);s.classList.remove("show"),N.one(s,"transitionend",r),a(s,t)}else r()}_transitionComplete(t,e,i){if(e){e.classList.remove("active");const t=H.findOne(":scope > .dropdown-menu .active",e.parentNode);t&&t.classList.remove("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}t.classList.add("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),u(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&t.parentNode.classList.contains("dropdown-menu")&&(t.closest(".dropdown")&&H.find(".dropdown-toggle").forEach(t=>t.classList.add("active")),t.setAttribute("aria-expanded",!0)),i&&i()}static jQueryInterface(t){return this.each((function(){const e=b.get(this,"bs.tab")||new qe(this);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(t){t.preventDefault(),(b.get(this,"bs.tab")||new qe(this)).show()})),m("tab",qe);const Ve={animation:"boolean",autohide:"boolean",delay:"number"},Xe={animation:!0,autohide:!0,delay:5e3};class Qe extends j{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._setListeners()}static get DefaultType(){return Ve}static get Default(){return Xe}static get DATA_KEY(){return"bs.toast"}show(){if(N.trigger(this._element,"show.bs.toast").defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");const t=()=>{this._element.classList.remove("showing"),this._element.classList.add("show"),N.trigger(this._element,"shown.bs.toast"),this._config.autohide&&(this._timeout=setTimeout(()=>{this.hide()},this._config.delay))};if(this._element.classList.remove("hide"),u(this._element),this._element.classList.add("showing"),this._config.animation){const e=n(this._element);N.one(this._element,"transitionend",t),a(this._element,e)}else t()}hide(){if(!this._element.classList.contains("show"))return;if(N.trigger(this._element,"hide.bs.toast").defaultPrevented)return;const t=()=>{this._element.classList.add("hide"),N.trigger(this._element,"hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){const e=n(this._element);N.one(this._element,"transitionend",t),a(this._element,e)}else t()}dispose(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),N.off(this._element,"click.dismiss.bs.toast"),super.dispose(),this._config=null}_getConfig(t){return t={...Xe,...B.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}},l("toast",t,this.constructor.DefaultType),t}_setListeners(){N.on(this._element,"click.dismiss.bs.toast",'[data-bs-dismiss="toast"]',()=>this.hide())}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){let e=b.get(this,"bs.toast");if(e||(e=new Qe(this,"object"==typeof t&&t)),"string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return m("toast",Qe),{Alert:P,Button:I,Carousel:Y,Collapse:X,Dropdown:_e,Modal:ye,Offcanvas:Oe,Popover:Fe,ScrollSpy:Ye,Tab:qe,Toast:Qe,Tooltip:Be}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD is used - Register as an anonymous module.
        define(['jquery', 'jquery-validation'], factory);
    }
    else if (typeof exports === 'object') {
        factory(require('jquery'), require('jquery-validation'));
    }
    else {
        // Neither AMD nor CommonJS used. Use global variables.
        if (typeof jQuery === 'undefined') {
            throw 'multi-step-form-js requires jQuery to be loaded first';
        }
        if (typeof jQuery.validator === 'undefined') {
            throw 'multi-step-form-js requires requires jquery.validation.js to be loaded first';
        }
        factory(jQuery);
    }
}(function($) {
    'use strict';

    const msfCssClasses = {
        header: "msf-header",
        step: "msf-step",
        statuses: {
            stepComplete: "msf-step-complete",
            stepIncomplete: "msf-step-incomplete",
            stepActive: "msf-step-active"
        },
        content: "msf-content",
        view: "msf-view",
        navigation: "msf-navigation",
        navButton: "msf-nav-button"
    };

    const msfNavTypes = {
        back: "back",
        next: "next",
        submit: "submit"

    };

    const msfJqueryData = {
        validated: "msf-validated",
        visited: "msf-visited"
    };

    const msfEventTypes = {
        viewChanged: "msf:viewChanged"
    };

    $.fn.multiStepForm = function(options) {
        var form = this;

        var defaults = {
            activeIndex: 0,
            validate: {},
            hideBackButton: false,
            allowUnvalidatedStep: false,
            allowClickNavigation: false
        };

        var settings = $.extend({}, defaults, options);

        //find the msf-content object
        form.content = this.find("." + msfCssClasses.content).first();

        if (form.content.length === 0) {
            throw new Error('Multi-Step Form requires a child element of class \'' + msfCssClasses.content + '\'');
        }

        //find the msf-views within the content object
        form.views = $(this.content).find("." + msfCssClasses.view);

        if (form.views.length === 0) {
            throw new Error('Multi-Step Form\'s element of class \'' + msfCssClasses.content + '\' requires n elements of class \'' + msfCssClasses.view + '\'');
        }

        form.header = this.find("." + msfCssClasses.header).first();
        form.navigation = this.find("." + msfCssClasses.navigation).first();
        form.steps = [];
        //form.completedSteps = 0;

        form.getActiveView = function() {
            return form.views.filter(function() {
                return this.style && this.style.display !== '' && this.style.display !== 'none'
            });
        };

        form.setActiveView = function(index) {
            var previousView = form.getActiveView()[0];
            var previousIndex = form.views.index(previousView);

            $(previousView).hide();
            //if(previousView)
            //    previousView.hide();

            var view = form.views.eq(index);
            view.show();
            view.find(':input').first().focus();

            var completedSteps = 0;
            $.each(form.views, function(index, view) {
                if ($.data(view, msfJqueryData.validated)) {
                    completedSteps++;
                }
            });

            //trigger the 'view has changed' event
            form.trigger(msfEventTypes.viewChanged, {
                currentIndex: index,
                previousIndex: previousIndex,
                totalSteps: form.steps.length,
                completedSteps: completedSteps
            });
        }

        form.setStatusCssClass = function(step, cssClass) {
            $(step).removeClass(msfCssClasses.statuses.stepComplete);
            $(step).removeClass(msfCssClasses.statuses.stepIncomplete);

            $(step).addClass(cssClass);
        }

        form.tryNavigateToView = function(currentIndex, targetIndex) {
            if (targetIndex <= currentIndex) {

                form.validateView(form.views[currentIndex]);

                if(!settings.hideBackButton)
                    form.setActiveView(targetIndex);
                return;
            }

            if (!form.validateViews(currentIndex, targetIndex - currentIndex, function(i) {
                    if (!settings.allowUnvalidatedStep) {
                        form.setActiveView(i);
                        return false;
                    }

                    return true;
                })) {
                if (!settings.allowUnvalidatedStep) {
                    return;
                }
            }
            form.setActiveView(targetIndex);
        }

        form.init = function() {

            this.initHeader = function() {
                if (form.header.length === 0) {
                    form.header = $("<div/>", {
                        "class": msfCssClasses.header,
                        "display": "none"
                    });

                    $(form).prepend(form.header);
                }

                form.steps = $(form.header).find("." + msfCssClasses.step);

                this.initStep = function(index, view) {

                    //append steps to header if they do not exist
                    if (form.steps.length < index + 1) {
                        $(form.header).append($("<div/>", {
                            "class": msfCssClasses.step,
                            "display": "none"
                        }));
                    }

                    if (settings.allowClickNavigation) {
                        //bind the click event to the header step
                        $(form.steps[index]).click(function(e) {
                            var view = form.getActiveView()[0];
                            var currentIndex = form.views.index(view);
                            var targetIndex = form.steps.index($(e.target).closest("." + msfCssClasses.step)[0]);

                            form.tryNavigateToView(currentIndex, targetIndex);
                        });
                    }
                }

                $.each(form.views, this.initStep);

                form.steps = $(form.header).find("." + msfCssClasses.step);
            };


            this.initNavigation = function() {

                if (form.navigation.length === 0) {
                    form.navigation = $("<div/>", {
                        "class": msfCssClasses.navigation
                    });

                    $(form.content).after(form.navigation);
                }

                this.initNavButton = function(type) {
                    var element = this.navigation.find("button[data-type='" + type + "'], input[type='button']"),
                        type;
                    if (element.length === 0) {
                        element = $("<button/>", {
                            "class": msfCssClasses.navButton,
                            "data-type": type,
                            "html": type
                        });
                        element.appendTo(form.navigation);
                    }
                    return element;
                };

                form.backNavButton = this.initNavButton(msfNavTypes.back);
                form.nextNavButton = this.initNavButton(msfNavTypes.next);
                form.submitNavButton = this.initNavButton(msfNavTypes.submit);
            };

            this.initHeader();
            this.initNavigation();

            this.views.each(function(index, view) {

                $.data(view, msfJqueryData.validated, false);
                $.data(view, msfJqueryData.visited, false);

                //if this is not the last view do not allow the enter key to submit the form as it is not completed yet                  
                if (index !== form.views.length - 1) {
                    $(view).find(':input').not('textarea').keypress(function(e) {
                        if (e.which === 13) // Enter key = keycode 13
                        {
                            form.nextNavButton.click();
                            return false;
                        }
                    });
                }

                $(view).on('show', function(e) {
                    if (this !== e.target)
                        return;

                    var view = e.target;
                    $.data(view, msfJqueryData.visited, true);

                    var index = form.views.index(view);
                    var step = form.steps[index];

                    $(step).addClass(msfCssClasses.statuses.stepActive);
                    //form.setStatusCssClass(step, msfCssClasses.statuses.stepActive);

                    //choose which navigation buttons should be displayed based on index of view 
                    if (index > 0 && !settings.hideBackButton) {
                        form.backNavButton.show();
                    }

                    if (index == form.views.length - 1) {
                        form.nextNavButton.hide();
                        form.submitNavButton.show();
                    }
                    else {
                        form.submitNavButton.hide();
                        form.nextNavButton.show();
                    }
                });

                $(view).on('hide', function(e) {
                    if (this !== e.target)
                        return;

                    var index = form.views.index(e.target);
                    var step = form.steps[index];

                    $(step).removeClass(msfCssClasses.statuses.stepActive);

                    if ($.data(e.target, msfJqueryData.validated) && $.data(e.target, msfJqueryData.visited)) {
                        form.setStatusCssClass(step, msfCssClasses.statuses.stepComplete);
                    }
                    else if ($.data(e.target, msfJqueryData.visited)) {
                        form.setStatusCssClass(step, msfCssClasses.statuses.stepIncomplete);
                    }
                    else {
                        form.setStatusCssClass(step, "");
                    }

                    //hide all navigation buttons, display choices will be set on show event
                    form.backNavButton.hide();
                    form.nextNavButton.hide();
                    form.submitNavButton.hide();
                });

                //initially hide each view
                $(view).hide();
            });


            if (settings.activeIndex > 0) {
                $(form).ready(function() {
                    form.tryNavigateToView(0, settings.activeIndex);
                });
            }
            else {
                form.setActiveView(0);
            }

        };

        form.validateView = function(view) {
            var index = form.views.index(view);

            if (form.validate().subset(view)) {
                $.data(view, msfJqueryData.validated, true);
                form.setStatusCssClass(form.steps[index], msfCssClasses.statuses.stepComplete);
                return true;
            }
            else {
                $.data(view, msfJqueryData.validated, false);
                form.setStatusCssClass(form.steps[index], msfCssClasses.statuses.stepIncomplete);
                return false;
            }
        };

        form.validateViews = function(currentIndex, length, invalid) {
            currentIndex = typeof currentIndex === 'undefined' ? 0 : currentIndex;
            length = typeof length === 'undefined' ? form.views.length : length;


            var validationIgnore = ""; // Saving the existing validator ignore settings to reset them after validating multi-step form
            var isValid = true;

            //remember original validation setings for ignores
            if ($(form).data("validator")) {
                var formValidatorSettings = $(form).data("validator").settings;
                validationIgnore = formValidatorSettings.ignore;

                var currentValidationIgnoreSettingsArray = validationIgnore.split(",");
                if (currentValidationIgnoreSettingsArray.length >= 1) {
                    // Remove the ":hidden" selector from validator ignore settings as we want our hidden fieldsets/steps to be validated before final submit
                    var hiddenIndex = $.inArray(":hidden", currentValidationIgnoreSettingsArray);
                    currentValidationIgnoreSettingsArray.splice(hiddenIndex, 1);
                    $(form).data("validator").settings.ignore = currentValidationIgnoreSettingsArray.toString();
                }
            }

            for (var i = currentIndex; i < currentIndex + length; i++) {
                if (!form.validateView(form.views[i])) {
                    isValid = false;

                    if (!invalid(i)) {
                        break;
                    }
                }
            }

            if ($(form).data("validator")) {
                $(form).data("validator").settings.ignore = validationIgnore;
            }

            return isValid;
        }

        form.init();

        form.nextNavButton.click(function() {
            var view = form.getActiveView()[0];
            var index = form.views.index(view);

            if (form.validateView(view)) {
                form.setActiveView(index + 1);
            }
            else if (settings.allowUnvalidatedStep) {
                form.setActiveView(index + 1);
            }
        });

        form.backNavButton.click(function() {
            var view = form.getActiveView()[0];
            var index = form.views.index(view);

            form.validateView(view);

            form.setActiveView(index - 1);
        });

        form.submit(function(e) {
            var validationIgnore = "";

            form.validateViews(0, form.views.length, function() {
                e.preventDefault();
                return true;
            });
        });
        return form;
    };

    $.validator.prototype.subset = function(container) {
        var ok = true;
        var self = this;
        $(container).find(':input').each(function() {
            if (!self.element($(this))) ok = false;
        });
        return ok;
    };

    $.each(['show', 'hide'], function(i, ev) {
        var el = $.fn[ev];
        $.fn[ev] = function() {
            this.trigger(ev);
            return el.apply(this, arguments);
        };
    });
}));

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

var ua = navigator.userAgent,
	iPhone = /iphone/i.test(ua),
	chrome = /chrome/i.test(ua),
	android = /android/i.test(ua),
	caretTimeoutId;

$.mask = {
	//Predefined character definitions
	definitions: {
		'9': "[0-9]",
		'a': "[A-Za-z]",
		'*': "[A-Za-z0-9]"
	},
	autoclear: true,
	dataName: "rawMaskFn",
	placeholder: '_'
};

$.fn.extend({
	//Helper Function for Caret positioning
	caret: function(begin, end) {
		var range;

		if (this.length === 0 || this.is(":hidden") || this.get(0) !== document.activeElement) {
			return;
		}

		if (typeof begin == 'number') {
			end = (typeof end === 'number') ? end : begin;
			return this.each(function() {
				if (this.setSelectionRange) {
					this.setSelectionRange(begin, end);
				} else if (this.createTextRange) {
					range = this.createTextRange();
					range.collapse(true);
					range.moveEnd('character', end);
					range.moveStart('character', begin);
					range.select();
				}
			});
		} else {
			if (this[0].setSelectionRange) {
				begin = this[0].selectionStart;
				end = this[0].selectionEnd;
			} else if (document.selection && document.selection.createRange) {
				range = document.selection.createRange();
				begin = 0 - range.duplicate().moveStart('character', -100000);
				end = begin + range.text.length;
			}
			return { begin: begin, end: end };
		}
	},
	unmask: function() {
		return this.trigger("unmask");
	},
	mask: function(mask, settings) {
		var input,
			defs,
			tests,
			partialPosition,
			firstNonMaskPos,
            lastRequiredNonMaskPos,
            len,
            oldVal;

		if (!mask && this.length > 0) {
			input = $(this[0]);
            var fn = input.data($.mask.dataName)
			return fn?fn():undefined;
		}

		settings = $.extend({
			autoclear: $.mask.autoclear,
			placeholder: $.mask.placeholder, // Load default placeholder
			completed: null
		}, settings);


		defs = $.mask.definitions;
		tests = [];
		partialPosition = len = mask.length;
		firstNonMaskPos = null;

		mask = String(mask);

		$.each(mask.split(""), function(i, c) {
			if (c == '?') {
				len--;
				partialPosition = i;
			} else if (defs[c]) {
				tests.push(new RegExp(defs[c]));
				if (firstNonMaskPos === null) {
					firstNonMaskPos = tests.length - 1;
				}
                if(i < partialPosition){
                    lastRequiredNonMaskPos = tests.length - 1;
                }
			} else {
				tests.push(null);
			}
		});

		return this.trigger("unmask").each(function() {
			var input = $(this),
				buffer = $.map(
    				mask.split(""),
    				function(c, i) {
    					if (c != '?') {
    						return defs[c] ? getPlaceholder(i) : c;
    					}
    				}),
				defaultBuffer = buffer.join(''),
				focusText = input.val();

            function tryFireCompleted(){
                if (!settings.completed) {
                    return;
                }

                for (var i = firstNonMaskPos; i <= lastRequiredNonMaskPos; i++) {
                    if (tests[i] && buffer[i] === getPlaceholder(i)) {
                        return;
                    }
                }
                settings.completed.call(input);
            }

            function getPlaceholder(i){
                if(i < settings.placeholder.length)
                    return settings.placeholder.charAt(i);
                return settings.placeholder.charAt(0);
            }

			function seekNext(pos) {
				while (++pos < len && !tests[pos]);
				return pos;
			}

			function seekPrev(pos) {
				while (--pos >= 0 && !tests[pos]);
				return pos;
			}

			function shiftL(begin,end) {
				var i,
					j;

				if (begin<0) {
					return;
				}

				for (i = begin, j = seekNext(end); i < len; i++) {
					if (tests[i]) {
						if (j < len && tests[i].test(buffer[j])) {
							buffer[i] = buffer[j];
							buffer[j] = getPlaceholder(j);
						} else {
							break;
						}

						j = seekNext(j);
					}
				}
				writeBuffer();
				input.caret(Math.max(firstNonMaskPos, begin));
			}

			function shiftR(pos) {
				var i,
					c,
					j,
					t;

				for (i = pos, c = getPlaceholder(pos); i < len; i++) {
					if (tests[i]) {
						j = seekNext(i);
						t = buffer[i];
						buffer[i] = c;
						if (j < len && tests[j].test(t)) {
							c = t;
						} else {
							break;
						}
					}
				}
			}

			function androidInputEvent(e) {
				var curVal = input.val();
				var pos = input.caret();
				if (oldVal && oldVal.length && oldVal.length > curVal.length ) {
					// a deletion or backspace happened
					checkVal(true);
					while (pos.begin > 0 && !tests[pos.begin-1])
						pos.begin--;
					if (pos.begin === 0)
					{
						while (pos.begin < firstNonMaskPos && !tests[pos.begin])
							pos.begin++;
					}
					input.caret(pos.begin,pos.begin);
				} else {
					var pos2 = checkVal(true);
					var lastEnteredValue = curVal.charAt(pos.begin);
					if (pos.begin < len){
						if(!tests[pos.begin]){
							pos.begin++;
							if(tests[pos.begin].test(lastEnteredValue)){
								pos.begin++;
							}
						}else{
							if(tests[pos.begin].test(lastEnteredValue)){
								pos.begin++;
							}
						}
					}
					input.caret(pos.begin,pos.begin);
				}
				tryFireCompleted();
			}


			function blurEvent(e) {
                checkVal();

                if (input.val() != focusText)
                    input.change();
            }

			function keydownEvent(e) {
                if (input.prop("readonly")){
                    return;
                }

				var k = e.which || e.keyCode,
					pos,
					begin,
					end;
                    oldVal = input.val();
				//backspace, delete, and escape get special treatment
				if (k === 8 || k === 46 || (iPhone && k === 127)) {
					pos = input.caret();
					begin = pos.begin;
					end = pos.end;

					if (end - begin === 0) {
						begin=k!==46?seekPrev(begin):(end=seekNext(begin-1));
						end=k===46?seekNext(end):end;
					}
					clearBuffer(begin, end);
					shiftL(begin, end - 1);

					e.preventDefault();
				} else if( k === 13 ) { // enter
					blurEvent.call(this, e);
				} else if (k === 27) { // escape
					input.val(focusText);
					input.caret(0, checkVal());
					e.preventDefault();
				}
			}

			function keypressEvent(e) {
                if (input.prop("readonly")){
                    return;
                }

				var k = e.which || e.keyCode,
					pos = input.caret(),
					p,
					c,
					next;

				if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore
					return;
				} else if ( k && k !== 13 ) {
					if (pos.end - pos.begin !== 0){
						clearBuffer(pos.begin, pos.end);
						shiftL(pos.begin, pos.end-1);
					}

					p = seekNext(pos.begin - 1);
					if (p < len) {
						c = String.fromCharCode(k);
						if (tests[p].test(c)) {
							shiftR(p);

							buffer[p] = c;
							writeBuffer();
							next = seekNext(p);

							if(android){
								//Path for CSP Violation on FireFox OS 1.1
								var proxy = function() {
									$.proxy($.fn.caret,input,next)();
								};

								setTimeout(proxy,0);
							}else{
								input.caret(next);
							}
                            if(pos.begin <= lastRequiredNonMaskPos){
		                         tryFireCompleted();
                             }
						}
					}
					e.preventDefault();
				}
			}

			function clearBuffer(start, end) {
				var i;
				for (i = start; i < end && i < len; i++) {
					if (tests[i]) {
						buffer[i] = getPlaceholder(i);
					}
				}
			}

			function writeBuffer() { input.val(buffer.join('')); }

			function checkVal(allow) {
				//try to place characters where they belong
				var test = input.val(),
					lastMatch = -1,
					i,
					c,
					pos;

				for (i = 0, pos = 0; i < len; i++) {
					if (tests[i]) {
						buffer[i] = getPlaceholder(i);
						while (pos++ < test.length) {
							c = test.charAt(pos - 1);
							if (tests[i].test(c)) {
								buffer[i] = c;
								lastMatch = i;
								break;
							}
						}
						if (pos > test.length) {
							clearBuffer(i + 1, len);
							break;
						}
					} else {
                        if (buffer[i] === test.charAt(pos)) {
                            pos++;
                        }
                        if( i < partialPosition){
                            lastMatch = i;
                        }
					}
				}
				if (allow) {
					writeBuffer();
				} else if (lastMatch + 1 < partialPosition) {
					if (settings.autoclear || buffer.join('') === defaultBuffer) {
						// Invalid value. Remove it and replace it with the
						// mask, which is the default behavior.
						if(input.val()) input.val("");
						clearBuffer(0, len);
					} else {
						// Invalid value, but we opt to show the value to the
						// user and allow them to correct their mistake.
						writeBuffer();
					}
				} else {
					writeBuffer();
					input.val(input.val().substring(0, lastMatch + 1));
				}
				return (partialPosition ? i : firstNonMaskPos);
			}

			input.data($.mask.dataName,function(){
				return $.map(buffer, function(c, i) {
					return tests[i]&&c!=getPlaceholder(i) ? c : null;
				}).join('');
			});


			input
				.one("unmask", function() {
					input
						.off(".mask")
						.removeData($.mask.dataName);
				})
				.on("focus.mask", function() {
                    if (input.prop("readonly")){
                        return;
                    }

					clearTimeout(caretTimeoutId);
					var pos;

					focusText = input.val();

					pos = checkVal();

					caretTimeoutId = setTimeout(function(){
                        if(input.get(0) !== document.activeElement){
                            return;
                        }
						writeBuffer();
						if (pos == mask.replace("?","").length) {
							input.caret(0, pos);
						} else {
							input.caret(pos);
						}
					}, 10);
				})
				.on("blur.mask", blurEvent)
				.on("keydown.mask", keydownEvent)
				.on("keypress.mask", keypressEvent)
				.on("input.mask paste.mask", function() {
                    if (input.prop("readonly")){
                        return;
                    }

					setTimeout(function() {
						var pos=checkVal(true);
						input.caret(pos);
                        tryFireCompleted();
					}, 0);
				});
                if (chrome && android)
                {
                    input
                        .off('input.mask')
                        .on('input.mask', androidInputEvent);
                }
				checkVal(); //Perform initial check for existing values
		});
	}
});
}));

function pixelGlass() {

  'use strict';

  var doc = document;
  var controlsPanel;
  var bodyContentWrapper;
  var panelClass = 'controls-panel';
  var canBeDisabled = [];

  var prefix = 'pg';
  var filtersList = ['none', 'invert'];
  var statesList = ['off', 'on'];

  var currents = {
    state: getCurrent('state', statesList[1]),
    filter: getCurrent('filter', filtersList[0]),
    opacity: getCurrent('opacity', 0.5)
  };

  var targets = {
    state: {
      elem: doc.documentElement,
      attr: 'data'
    },
    filter: {
      elem: doc.body,
      attr: 'data'
    },
    opacity: {
      elem: doc.body,
      attr: 'style'
    }
  };

  // States switcher params
  var paramsStates = {
    elemTag: 'button',
    elemText: 'on',
    listName: 'states',
    itemName: 'state',
    target: targets.state,
    type: 'button',
    list: statesList,
    canDisableAll: true,
    attrs: {
      tabindex: 1,
    }
  };

  // Filters switcher params
  var paramsFilters = {
    elemTag: 'button',
    elemText: 'invert',
    listName: 'filters',
    itemName: 'filter',
    target: targets.filter,
    type: 'button',
    list: filtersList,
    attrs: {
      tabindex: 2,
    }
  };

  // Opacity range params
  var paramsOpacity = {
    itemName: 'opacity',
    type: 'number',
    target: targets.opacity,
    setAttr: 'style',
    attrs: {
      min: 0,
      max: 1,
      step: 0.1,
      tabindex: 3,
    }
  };

  //---------------------------------------------

  init();

  //---------------------------------------------

  function init() {
    createContolsPanel();
    applyCurrentData();

    if (currents.state === 'on'){
      applyCurrentStyles();
    }
  }

  //---------------------------------------------

  function createContolsPanel() {
    var targetElem = doc.documentElement;

    if ( hasData( doc.body, 'has-sticky-point' ) ) {
      var stickyPoint = doc.querySelector('.sticky-point');

      if( stickyPoint && !localStorage['pg-released'] ) {
        targetElem = stickyPoint;
      }
      // Override defaults for demo page
      currents.state = 'off';
    }

    controlsPanel = doc.createElement('div');
    controlsPanel.classList.add(panelClass);
    targetElem.appendChild(controlsPanel);
    var sides = ['top', 'right', 'bottom', 'left'];

    sides.forEach(function(item) {
      var itemVal = getCurrent(item, '');
      if ( itemVal ) {
        controlsPanel.style[ item ] = itemVal;
      }
    });

    initControls();
  }

  //---------------------------------------------

  function initControls() {
    createButton(paramsStates);
    createButton(paramsFilters);
    createInputNumber(paramsOpacity);

    createDragButton();
  }

  //---------------------------------------------

  function createButton(params) {
    var listName = params.listName;
    var itemName = params.itemName;
    var elemTag = params.elemTag;
    var elemText = params.elemText;
    var type = params.type;
    var list = params.list;
    var action = params.action;
    var currentVal = currents[itemName];
    var attrs = params.attrs;
    var currentNum = list.indexOf(currentVal);
    var canDisableAll = params.canDisableAll;

    var id = itemName;
    var input = doc.createElement(elemTag);
    setClasses( input, [
      panelClass + '__control',
      panelClass + '__control--' + type
    ]);
    input.setAttribute('type', type);
    input.setAttribute('id', id);
    setData( input, 'state-num', currentNum );

    if ( attrs ) {
      for (var attr in attrs) {
        input.setAttribute(attr, attrs[attr]);
      }
    }

    if (elemTag === 'button') {
      input.innerHTML = elemText;
    }

    if ( !canDisableAll ) {
      canBeDisabled.push(input);
    }

    controlsPanel.appendChild(input);

    input.onclick = function() {
      if (!params.target) {
        return;
      }

      currentNum = +!currentNum;
      currentVal = list[currentNum];

      setData( input, 'state-num', currentNum );
      setData( params.target.elem, itemName, currentVal );

      saveLocalStorage(itemName, currentVal);

      if (canDisableAll && canDisableAll === true) {
        if (currentVal === 'off'){
          removeCurrentStyles();
          disableInputs();
        }
        else {
          applyCurrentStyles();
          enableInputs();
        }
      }
    };
  }

  //---------------------------------------------

  function createInputNumber(params) {
    var itemName = params.itemName;
    var attrs = params.attrs;
    var type = params.type;
    var setAttr = params.setAttr;
    var canDisableAll = params.canDisableAll;

    var id = itemName;
    var input = doc.createElement('input');
    setClasses( input, [
      panelClass + '__control',
      panelClass + '__control--' + type
    ]);
    input.setAttribute('type', type);
    input.setAttribute('id', id);

    for (var attr in attrs) {
      input.setAttribute(attr, attrs[attr]);
    }
    input.setAttribute('value', currents[itemName]);

    if ( !canDisableAll ) {
      canBeDisabled.push(input);
    }

    controlsPanel.appendChild(input);

    input.oninput = function() {
      if (setAttr === 'style') {
        params.target.elem.style[itemName] = this.value;
        saveLocalStorage(itemName, this.value);
      }
    };
  }

  //---------------------------------------------

  function createDragButton() {
    var input = doc.createElement('button');
    setClasses( input, [
      panelClass + '__control',
      panelClass + '__control--drag-n-drop'
    ]);
    input.setAttribute('type', 'button');
    input.innerHTML = ' ';

    controlsPanel.appendChild(input);

    input.onmousedown = function () {
      //Place it here to get real sizes after
      // external styles has been loaded
      var offsetTop = this.offsetTop;
      var offsetLeft = controlsPanel.clientWidth - this.clientWidth;
      var styles = getComputedStyle(controlsPanel);

      controlsPanel.style.top = styles.top;
      controlsPanel.style.left = styles.left;
      controlsPanel.style.right = 'auto';
      controlsPanel.style.bottom = 'auto';

      doc.onmousemove = function ( ev ) {
        var x = (ev.clientX - offsetLeft ) + 'px';
        var y = (ev.clientY) + 'px';

        controlsPanel.style.left = x;
        controlsPanel.style.top = y;
      };
    };

    input.onmouseup = function () {
      var styles = getComputedStyle(controlsPanel);
      var left = +styles.left.replace(/px/,'');
      var right = +styles.right.replace(/px/,'');
      var top = +styles.top.replace(/px/,'');
      var bottom = +styles.bottom.replace(/px/,'');

      if ( left > right ) {
        saveLocalStorage('left', 'auto');
        saveLocalStorage('right', styles.right);

        controlsPanel.style.right = styles.right;
        controlsPanel.style.left = 'auto';
      }
      else {
        saveLocalStorage('left', styles.left);
        saveLocalStorage('right', 'auto'); //'auto' needs to override default position;
      }
      if ( top > bottom ) {
        saveLocalStorage('top', 'auto');
        saveLocalStorage('bottom', styles.bottom);

        controlsPanel.style.bottom = styles.bottom;
        controlsPanel.style.top = 'auto';
      }
      else {
        saveLocalStorage('top', styles.top);
        saveLocalStorage('bottom', 'auto');
      }

      doc.onmousemove = null;
    };
  }

  //---------------------------------------------

  function disableInputs() {
    canBeDisabled.forEach(function(item) {
      item.setAttribute('disabled', '');
    });
  }

  //---------------------------------------------

  function enableInputs() {
    canBeDisabled.forEach(function(item) {
      item.removeAttribute('disabled');
    });
  }

  //---------------------------------------------

  function getCurrent(name, defaultValue) {
    var itemName = [prefix, name].join('-');
    var localStorageVal = localStorage[ itemName ];
    return localStorageVal ? localStorageVal : defaultValue;
  }

  //---------------------------------------------

  function saveLocalStorage(name, value) {
    var itemName = [prefix, name].join('-');
    localStorage[itemName] = value;
  }

  //---------------------------------------------

  // Not used
  function getBodyOpacity() {
    var opacityStr = getComputedStyle(doc.body).opacity;
    return +opacityStr;
  }

  //---------------------------------------------

  // Not used
  function addExternalCSS() {
    var styleElem = doc.createElement('style');
    var cssLink = doc.createElement('link');
    cssLink.setAttribute('rel', 'stylesheet');
    cssLink.setAttribute('href', '../pixel-glass-js/styles.css');

    doc.head.appendChild(cssLink);
  }

  //---------------------------------------------

  function applyCurrentData() {
    for (var key in targets ) {
      var target = targets[ key ];
      var current = currents[ key ];

      if (target.attr === 'data') {
        setData( target.elem, key, current );
      }
    }

    if(currents.state === 'off') {
      disableInputs();
    }
  }
  //---------------------------------------------

  function applyCurrentStyles() {
    for (var key in targets ) {
      var target = targets[ key ];
      var current = currents[ key ];

      if (target.attr === 'style') {
        target.elem.style[ key ] = current;
      }
    }
  }

  //---------------------------------------------

  function removeCurrentStyles() {
    for (var key in targets ) {
      var target = targets[ key ];

      if (target.attr === 'style') {
        target.elem.style[ key ] = '';
      }
    }
  }

  //---------------------------------------------

  // Made for IE10, it doesn't support dataset

  function hasData( elem, dataName ) {
    if ( !elem ) {
      return false;
    }

    dataName = 'data-' + dataName;

    if ( elem.getAttribute( dataName) !== undefined && elem.getAttribute( dataName) !== null ) {
      return true;
    }

    return false;
  }

  //---------------------------------------------

  function setData( elem, dataName, dataVal ) {
    if ( !elem ) {
      return;
    }

    dataName = 'data-' + dataName;
    elem.setAttribute( dataName, dataVal );
  }

  //---------------------------------------------

  // Made for IE10, it doesn't support
  // multiply classes for classList.add

  function setClasses( elem, classes ) {
    if ( !elem ) {
      return;
    }

    if ( classes.length > 0 ) {
      classes.forEach( function ( className ) {
        elem.classList.add( className );
      });
    }
  }

  //---------------------------------------------
}

window.onload = function () {
  pixelGlass();
};

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
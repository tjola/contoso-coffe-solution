"use strict";
var AlbanianXrm;
(function(AlbanianXrm){
    var lead;
    (function(lead){
        var FormEvents;
        (function(FormEvents){
            /**
             * 
             * @param {Xrm.Events.EventContext} context 
             */
            function onLoad(context){
              var FormEventscontext = context.getFormContext();
              var creditLimitControl = formContext.getControl('creditlimit');
              var creditlimit = creditLimitControl.getAttribute().getValue();
            }
            FormEvents.onLoad = onLoad;
        })(FormEvents = lead.FormEvents || (lead.FormEvents = {}));
    })(lead = AlbanianXrm.account || (AlbanianXrm.lead = {}));
})(AlbanianXrm || (AlbanianXrm = {}));


AlbanianXrm.lead.FormEvents.onLoad()
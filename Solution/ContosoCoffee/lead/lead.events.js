"use strict";
var AlbanianXrm;
(function(AlbanianXrm){
    var lead;
    (function(lead){
        var FormEvents;
        (function(FormEvents){
            /**
             * 
             * @param {Xrm.Events.BoundEventContext<Xrm.Ext.Forms.Account.main.Information>} context 
             */
            function onLoad(context){
              var formContext = context.getFormContext();
              var LastName = formContext.getControl('creditlimit');
              var creditLimit = LastName.getAttribute().getValue();
              console.log(creditLimit);
            }
            FormEvents.onLoad = onLoad;
        })(FormEvents = lead.FormEvents || (lead.FormEvents = {}));
    })(lead = AlbanianXrm.account || (AlbanianXrm.lead = {}));
})(AlbanianXrm || (AlbanianXrm = {}));


AlbanianXrm.lead.FormEvents.onLoad()
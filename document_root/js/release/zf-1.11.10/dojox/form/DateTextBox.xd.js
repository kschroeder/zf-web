/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.form.DateTextBox"],["require","dojox.widget.Calendar"],["require","dojox.widget.CalendarViews"],["require","dijit.form._DateTimeTextBox"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.form.DateTextBox"]){_4._hasResource["dojox.form.DateTextBox"]=true;_4.provide("dojox.form.DateTextBox");_4.experimental("dojox.form.DateTextBox");_4.require("dojox.widget.Calendar");_4.require("dojox.widget.CalendarViews");_4.require("dijit.form._DateTimeTextBox");_4.declare("dojox.form.DateTextBox",_5.form._DateTimeTextBox,{popupClass:"dojox.widget.Calendar",_selector:"date",_open:function(){this.inherited(arguments);_4.style(this._picker.domNode.parentNode,"position","absolute");}});_4.declare("dojox.form.DayTextBox",_6.form.DateTextBox,{popupClass:"dojox.widget.DailyCalendar",parse:function(_7){return _7;},format:function(_8){return _8.getDate?_8.getDate():_8;},validator:function(_9){var _a=Number(_9);var _b=/(^-?\d\d*$)/.test(String(_9));return _9==""||_9==null||(_b&&_a>=1&&_a<=31);},_open:function(){this.inherited(arguments);this._picker.onValueSelected=_4.hitch(this,function(_c){this.focus();setTimeout(_4.hitch(this,"_close"),1);_5.form.TextBox.prototype._setValueAttr.call(this,String(_c.getDate()),true,String(_c.getDate()));});}});_4.declare("dojox.form.MonthTextBox",_6.form.DateTextBox,{popupClass:"dojox.widget.MonthlyCalendar",selector:"date",postMixInProperties:function(){this.inherited(arguments);this.constraints.datePattern="MM";},format:function(_d){return Number(_d)+1;},parse:function(_e,_f){return Number(_e)-1;},serialize:function(_10,_11){return String(_10);},validator:function(_12){var num=Number(_12);var _13=/(^-?\d\d*$)/.test(String(_12));return _12==""||_12==null||(_13&&num>=1&&num<=12);},_open:function(){this.inherited(arguments);this._picker.onValueSelected=_4.hitch(this,function(_14){this.focus();setTimeout(_4.hitch(this,"_close"),1);_5.form.TextBox.prototype._setValueAttr.call(this,_14,true,_14);});}});_4.declare("dojox.form.YearTextBox",_6.form.DateTextBox,{popupClass:"dojox.widget.YearlyCalendar",format:function(_15){if(typeof _15=="string"){return _15;}else{if(_15.getFullYear){return _15.getFullYear();}}return _15;},validator:function(_16){return _16==""||_16==null||/(^-?\d\d*$)/.test(String(_16));},_open:function(){this.inherited(arguments);this._picker.onValueSelected=_4.hitch(this,function(_17){this.focus();setTimeout(_4.hitch(this,"_close"),1);_5.form.TextBox.prototype._setValueAttr.call(this,_17,true,_17);});},parse:function(_18,_19){return _18||(this._isEmpty(_18)?null:undefined);},filter:function(val){if(val&&val.getFullYear){return val.getFullYear().toString();}return this.inherited(arguments);}});}}};});
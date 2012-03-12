/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dijit.tree._dndContainer"],["require","dojo.dnd.common"],["require","dojo.dnd.Container"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dijit.tree._dndContainer"]){_4._hasResource["dijit.tree._dndContainer"]=true;_4.provide("dijit.tree._dndContainer");_4.require("dojo.dnd.common");_4.require("dojo.dnd.Container");_4.declare("dijit.tree._dndContainer",null,{constructor:function(_7,_8){this.tree=_7;this.node=_7.domNode;_4.mixin(this,_8);this.map={};this.current=null;this.containerState="";_4.addClass(this.node,"dojoDndContainer");this.events=[_4.connect(this.node,"onmouseenter",this,"onOverEvent"),_4.connect(this.node,"onmouseleave",this,"onOutEvent"),_4.connect(this.tree,"_onNodeMouseEnter",this,"onMouseOver"),_4.connect(this.tree,"_onNodeMouseLeave",this,"onMouseOut"),_4.connect(this.node,"ondragstart",_4,"stopEvent"),_4.connect(this.node,"onselectstart",_4,"stopEvent")];},getItem:function(_9){var _a=this.selection[_9],_b={data:_5.getEnclosingWidget(_a),type:["treeNode"]};return _b;},destroy:function(){_4.forEach(this.events,_4.disconnect);this.node=this.parent=null;},onMouseOver:function(_c,_d){this.current=_c.rowNode;this.currentWidget=_c;},onMouseOut:function(_e,_f){this.current=null;this.currentWidget=null;},_changeState:function(_10,_11){var _12="dojoDnd"+_10;var _13=_10.toLowerCase()+"State";_4.removeClass(this.node,_12+this[_13]);_4.addClass(this.node,_12+_11);this[_13]=_11;},_addItemClass:function(_14,_15){_4.addClass(_14,"dojoDndItem"+_15);},_removeItemClass:function(_16,_17){_4.removeClass(_16,"dojoDndItem"+_17);},onOverEvent:function(){this._changeState("Container","Over");},onOutEvent:function(){this._changeState("Container","");}});}}};});
Ext.define('Myappses.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
	items:[{
	  xtype: 'panel',
      fullscreen: true, // don't want content to crunch against the borders
      layouts:'vbox',
	  defaultType : 'datefield',
      default:{
		  flex:2
	  },
	  items:[{
		  html:'user-form',
		  style:'background-color:white',
	  },{
		  html:'First-Name',
		  name:'firstname',
		  xtype:'textfield'
	  },{
		html:'Last-Name',
		name:'lastname',
		xtype:'textfield'
	  },{
		  html:'button',
		  xtype:'button',
		  Text:'submit',
		  handler:function(){
			  Ext.Msg.alert("Messge added");
		  }
	  }]

	}]

});

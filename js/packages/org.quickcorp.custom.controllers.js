'use strict';
Import ('installer');

Package('org.quickcorp.custom.controllers',[

	Class('MainController',Controller,{
	  dependencies:[],
	  component:null,
	  _new_:function (o){
	    this.__new__(o);
	    var controller=this;
	    //TODO: Implement
	  },
		done:function(){
			var controller = this;

		}
	}),
	Class('PWAController',Object,{
		component:null,
		_new_:function (o){
			logger.debug('PWAController Element Initialized');
			this.component = o.component;
		},
		done: function (){
			document.head.innerHTML+=this.component.body.innerHTML;
			this.component.body.innerHTML="";
		}
	}),
	Class('JExcelController',Controller,{
		component:null,
		spreadsheet:null,
	  _new_:function (o){
	    var controller=this;
			logger.debug('JExcelController Element Initialized');
	  },
		jexcelConfig:function (){
			var options = options = {
		    data:[[]],
		    minDimensions:[10,10],
			};

			this.spreadsheet = jexcel(this.component.body.subelements('#spreadsheet')[0], options);
		},
		done: function (){
			var controller = this;
			this.component.body.subelements('button')[0].addEventListener('click',function (){
				controller.insertRow();
			},false);

			controller.jexcelConfig();
		},
		insertRow:function (){
			this.spreadsheet.insertRow();
		}
	})
]);

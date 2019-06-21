'use strict';
Package('org.quickcorp.custom.components',[
  Class('Component1',Component,{
    name:'main',
    cached:false,
    controller:null,
    view:null
  }),
  Class('Component2',Component,{
    propertyName2:'propertyValue2',
  }),
]);

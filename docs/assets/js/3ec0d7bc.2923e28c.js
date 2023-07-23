"use strict";(self.webpackChunkhello_world=self.webpackChunkhello_world||[]).push([[792],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=p(n),d=o,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(g,a(a({ref:e},s),{},{components:n})):r.createElement(g,a({ref:e},s))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[m]="string"==typeof t?t:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4483:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Control Motor with Arduino",l={unversionedId:"programming-arduino/control-motor-with-arduino",id:"programming-arduino/control-motor-with-arduino",title:"Control Motor with Arduino",description:"In the previous tutorial we went over the wiring and introduced hello programs you can use to test your setup is correct. In this page we'll go over how to communicate with the arduino in order to tell it what power levels to run at.",source:"@site/docs/programming-arduino/control-motor-with-arduino.md",sourceDirName:"programming-arduino",slug:"/programming-arduino/control-motor-with-arduino",permalink:"/mindflow-web/docs/programming-arduino/control-motor-with-arduino",draft:!1,editUrl:"https://github.com/Chris0016/pZero/tree/main/docs/programming-arduino/control-motor-with-arduino.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Programming Arduino",permalink:"/mindflow-web/docs/category/programming-arduino"},next:{title:"Communication with Computer",permalink:"/mindflow-web/docs/programming-arduino/communication-with-computer"}},u={},p=[{value:"Control Motor with Arduino",id:"control-motor-with-arduino-1",level:2},{value:"Smoothen Transition to Target PWM",id:"smoothen-transition-to-target-pwm",level:2},{value:"FAQ",id:"faq",level:2}],s={toc:p},m="wrapper";function c(t){let{components:e,...n}=t;return(0,o.kt)(m,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"control-motor-with-arduino"},"Control Motor with Arduino"),(0,o.kt)("p",null,"In the previous tutorial we went over the wiring and introduced hello programs you can use to test your setup is correct. In this page we'll go over how to communicate with the arduino in order to tell it what power levels to run at."),(0,o.kt)("h2",{id:"control-motor-with-arduino-1"},"Control Motor with Arduino"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"const int MAGNET_1 = 9;\n\nvoid setup() {\n   pinMode(MAGNET_1, OUTPUT);\n}\n\nvoid loop() {\n    //play around with ths value and observe the different speeds of the motor. \n    int target_pwm = 100;\n    analogWrite(MAGNET_1, target_pwm);\n}\n\n\n")),(0,o.kt)("h2",{id:"smoothen-transition-to-target-pwm"},"Smoothen Transition to Target PWM"),(0,o.kt)("p",null,"We can  observe that our motor with tape starts and immediately reaches the target_pwm. We then change our program to make it go from 0 to target_pwm very smoothly by adding a delay and incrementing our values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"const int MAGNET_1 = 9;\nstatic int delay = 500; //play around with this value to change transitions between pwms. \nstatic int delay_before_next_loop = 3000; //Wait 3 seconds before repeating process\nunsigned long ts = millis();\n\n\nvoid setup() {\n   pinMode(MAGNET_1, OUTPUT);\n}\n\nvoid loop() {\n\n    int target_pwm = 255; //play around with ths value and observe the different speeds of the motor. \n    run_magnet(target_pwm);\n    ts = millis();\n    while ( (unsigned long)(millis() - ts) < delay_before_next_loop) {\n            //doNothing\n        }\n}\n\nvoid run_magnet(int target_pwm){\n    int curr_pwm = 0;\n    while(curr_pwm < target_pwm){\n        ts = millis();\n        analogWrite(curr_pwm);\n\n            while ( (unsigned long)(millis() - ts) < delay_value) {\n            //doNothing\n            }\n\n        curr_pwm++; \n    }\n\n}\n\n")),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/blog/understanding-static-in-arduino"},"What does static mean?")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/blog/fixing-millis-rollover"},"What does unsigned long mean and why use it?")))}c.isMDXComponent=!0}}]);
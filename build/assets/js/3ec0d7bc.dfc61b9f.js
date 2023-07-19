"use strict";(self.webpackChunkhello_world=self.webpackChunkhello_world||[]).push([[792],{3905:(t,n,e)=>{e.d(n,{Zo:()=>s,kt:()=>g});var o=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,o,r=function(t,n){if(null==t)return{};var e,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var u=o.createContext({}),p=function(t){var n=o.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},s=function(t){var n=p(t.components);return o.createElement(u.Provider,{value:n},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(t,n){var e=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=p(e),c=r,g=d["".concat(u,".").concat(c)]||d[c]||m[c]||i;return e?o.createElement(g,a(a({ref:n},s),{},{components:e})):o.createElement(g,a({ref:n},s))}));function g(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var i=e.length,a=new Array(i);a[0]=c;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=t,l[d]="string"==typeof t?t:r,a[1]=l;for(var p=2;p<i;p++)a[p]=e[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,e)}c.displayName="MDXCreateElement"},4483:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=e(7462),r=(e(7294),e(3905));const i={sidebar_position:1},a="Control Motor with Arduino",l={unversionedId:"programming-arduino/control-motor-with-arduino",id:"programming-arduino/control-motor-with-arduino",title:"Control Motor with Arduino",description:"In the previous tutorial we went over the wiring and introduced hello programs you can use to test your setup is correct. In this page we'll go over how to communicate with the arduino in order to tell it what power levels to run at.",source:"@site/docs/programming-arduino/control-motor-with-arduino.md",sourceDirName:"programming-arduino",slug:"/programming-arduino/control-motor-with-arduino",permalink:"/mindflow-web/docs/programming-arduino/control-motor-with-arduino",draft:!1,editUrl:"https://github.com/Chris0016/pZero/tree/main/docs/programming-arduino/control-motor-with-arduino.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Programming Arduino",permalink:"/mindflow-web/docs/category/programming-arduino"},next:{title:"Communication with Computer",permalink:"/mindflow-web/docs/programming-arduino/communication-with-computer"}},u={},p=[{value:"Arduino Setup Test Code",id:"arduino-setup-test-code",level:2},{value:"Control Motor with Arduino",id:"control-motor-with-arduino-1",level:2},{value:"Smoothen Transition to PWM",id:"smoothen-transition-to-pwm",level:2},{value:"FAQ",id:"faq",level:2}],s={toc:p},d="wrapper";function m(t){let{components:n,...e}=t;return(0,r.kt)(d,(0,o.Z)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"control-motor-with-arduino"},"Control Motor with Arduino"),(0,r.kt)("p",null,"In the previous tutorial we went over the wiring and introduced hello programs you can use to test your setup is correct. In this page we'll go over how to communicate with the arduino in order to tell it what power levels to run at."),(0,r.kt)("h2",{id:"arduino-setup-test-code"},"Arduino Setup Test Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"const int MAGNET_1 = 9;\n\nvoid setup() {\n   pinMode(MAGNET_1, OUTPUT);\n}\n\nvoid loop() {\n    run_for_5s();\n    exit(0);\n}\n\nvoid run_for_5s(){\n    _run_magnet(5_000, 255);\n}\n\nvoid _run_magnet(int duration, int max_pwm){\n  static int ts = millis();\n  analogWrite(MAGNET_1, max_pwm);\n  \n   while(millis() - ts < duration ){\n   //do nothing \n   }\n\n  analogWrite(MAGNET_1, 0);\n\n}\n")),(0,r.kt)("h2",{id:"control-motor-with-arduino-1"},"Control Motor with Arduino"),(0,r.kt)("p",null,"The first step is to have a function that takes in a target pwm as a parameter and tells the motor to run at that pwm."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"const int MAGNET_1 = 9;\n\nvoid setup() {\n   pinMode(MAGNET_1, OUTPUT);\n}\n\nvoid loop() {\n    //play around with ths value and observe the different speeds of the motor. \n    int target_pwm = 100;\n    run_magnet(target_pwm);\n}\n\nvoid run_magnet(int target_pwm){\n    analogWrite(target_pwm);\n}\n\n")),(0,r.kt)("h2",{id:"smoothen-transition-to-pwm"},"Smoothen Transition to PWM"),(0,r.kt)("p",null,"We can  observe that our motor with tape starts and immediately reaches the target_pwm. We then change our program to make it go from 0 to target_pwm very smoothly by adding a delay and incrementing our values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"const int MAGNET_1 = 9;\nstatic int delay = 500; //play around with this value to change transitions between pwms. \nstatic int delay_before_next_loop = 5000; //Wait 5 seconds before repeating process\nunsigned long ts = millis();\n\n\nvoid setup() {\n   pinMode(MAGNET_1, OUTPUT);\n}\n\nvoid loop() {\n\n    int target_pwm = 255; //play around with ths value and observe the different speeds of the motor. \n    run_magnet(target_pwm);\n\n    while ( (unsigned long)(millis() - ts) < delay_before_next_loop) {\n            //doNothing\n        }\n}\n\nvoid run_magnet(int target_pwm){\n    int curr_pwm = 0;\n    while(curr_pwm < target_pwm){\n        static int ts = millis();\n        analogWrite(curr_pwm);\n\n            while ( (unsigned long)(millis() - ts) < delay_value) {\n            //doNothing\n            }\n\n        curr_pwm++; \n    }\n\n}\n\n")),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/blog/understanding-static-in-arduino"},"What does static mean?")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/blog/fixing-millis-rollover"},"What does unsigned long mean and why use it?")))}m.isMDXComponent=!0}}]);
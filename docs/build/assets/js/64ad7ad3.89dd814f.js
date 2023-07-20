"use strict";(self.webpackChunkhello_world=self.webpackChunkhello_world||[]).push([[629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},i="Wiring Setup",l={unversionedId:"getting-started/wiring-setup",id:"getting-started/wiring-setup",title:"Wiring Setup",description:"Powerful electromagnets run hot and are expensive. A good way to get started quickly is to use a small motor with some tape attached. You can test your code hundreads of times without worrying about breaking an expensive electromagnet.",source:"@site/docs/getting-started/wiring-setup.md",sourceDirName:"getting-started",slug:"/getting-started/wiring-setup",permalink:"/mindflow-web/docs/getting-started/wiring-setup",draft:!1,editUrl:"https://github.com/Chris0016/pZero/tree/main/docs/getting-started/wiring-setup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Resources",permalink:"/mindflow-web/docs/getting-started/resources"},next:{title:"Programming Arduino",permalink:"/mindflow-web/docs/category/programming-arduino"}},s={},u=[{value:"Materials Required",id:"materials-required",level:2},{value:"Setup",id:"setup",level:2},{value:"Wiring",id:"wiring",level:3},{value:"Steps",id:"steps",level:2},{value:"Youtube Video",id:"youtube-video",level:3},{value:"MOSFET Setup",id:"mosfet-setup",level:3},{value:"Power Supply cable",id:"power-supply-cable",level:3},{value:"Terminal Bus",id:"terminal-bus",level:3},{value:"Wiring",id:"wiring-1",level:3},{value:"Progamming the Arduino",id:"progamming-the-arduino",level:2},{value:"FAQs",id:"faqs",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wiring-setup"},"Wiring Setup"),(0,a.kt)("p",null,"Powerful electromagnets run hot and are expensive. A good way to get started quickly is to use a small motor with some tape attached. You can test your code hundreads of times without worrying about breaking an expensive electromagnet."),(0,a.kt)("h2",{id:"materials-required"},"Materials Required"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://store.arduino.cc/products/arduino-uno-rev3"},"Arduino Uno R3")," (Any with pwm will work)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://store.arduino.cc/collections/cables-wires/products/usb-2-0-cable-type-ab"},"USB Arduino Coms cable")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.mouser.com/datasheet/2/149/FQP13N10L-107848.pdf"},"MOSFET Transistor")," (Any MOSFET with similar specs will work)"),(0,a.kt)("li",{parentName:"ul"},"Breadboard"),(0,a.kt)("li",{parentName:"ul"},"Jumper Wires(~5x male to female & ~5x female to female)"),(0,a.kt)("li",{parentName:"ul"},"Alligator Clips (2x)"),(0,a.kt)("li",{parentName:"ul"},"Power supply cable (12v 10A 120W 100V~240V AC to DC )"),(0,a.kt)("li",{parentName:"ul"},"DC motor (12v)")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"In this case our motor is replacing the electromagnet for development purposes. However, the goal is to be able to communicate with our 'electromagnet' and be able to vary the strength of the electromagnet. By changing the power of the electromagnet we achieve the pulsating effect of the ferrofluid seen ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=FKUgnO14eJ4"},"here"),"."),(0,a.kt)("p",null,"We can simulate giving the electromagnet less power through a technique called pwm(link me) instead of getting dedicated circuitry."),(0,a.kt)("p",null,"PWM stands for Pulse Width Modulation. If we send a constant stream of power to our motor it will run at full power. However, if our power stream pulsates between on and off, depending on the rate, we can make our device run at a lesser power. Moreover, by fine tunning the on and off rate we can have further control of at what percentage of speed/strength the device runs at."),(0,a.kt)("p",null,"The first step is to setup wirings to connect our motor, MOSFET Transistor, and Arduino."),(0,a.kt)("p",null,"We explore why a MOSFET and not a Relay in the FAQ below."),(0,a.kt)("h3",{id:"wiring"},"Wiring"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Diagram of schematics")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wiring Diagram",src:n(4010).Z,width:"698",height:"563"})),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("h3",{id:"youtube-video"},"Youtube Video"),(0,a.kt)("p",null,"Comming soon. "),(0,a.kt)("h3",{id:"mosfet-setup"},"MOSFET Setup"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1689873715953",src:n(6532).Z,width:"4032",height:"3024"})),(0,a.kt)("h3",{id:"power-supply-cable"},"Power Supply cable"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1689873890798",src:n(4887).Z,width:"4032",height:"3024"}),"\nCut off the top of the power supply cable and soder on a male to female connecter to each end. Alternatively you can use aligator clips to connect each fo the exposed wires and then connect these to the terminal bus setup. "),(0,a.kt)("h3",{id:"terminal-bus"},"Terminal Bus"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Terminal Bus",src:n(6001).Z,width:"4032",height:"3024"})),(0,a.kt)("p",null,"For the sake of scalability we setup a terminal bus that will allow us to distribute power to multiple electromagnets at the same time if we wised to do so.\nIf you would just rather have one electromagnet then you can just connect the power supply cables directly instead. "),(0,a.kt)("h3",{id:"wiring-1"},"Wiring"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wiring Setup",src:n(6361).Z,width:"2048",height:"1536"}),"\nThe final output should look something more or less like this. "),(0,a.kt)("p",null,"The project uses only one large magnet, however if you would like to use multiple magnets the wiring below also works since a terminal block is used to distribute power."),(0,a.kt)("p",null,"Make sure to put some tape on the motor so you can see if its moving."),(0,a.kt)("h2",{id:"progamming-the-arduino"},"Progamming the Arduino"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hello World Program")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'void setup() {\n  // put your setup code here, to run once:\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n  Serial.println("Hello World!");\n  delay(1000);\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Test Wiring")),(0,a.kt)("p",null,"A simple program that runs the motor at full power for 5 seconds. I recommend saving this program to test circuitry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"const int MAGNET_1 = 9;\n\n\nvoid setup() {\n   pinMode(MAGNET_1, OUTPUT);\n}\n\nvoid loop() {\n    run_for_5s();\n    exit(0);\n}\n\nvoid run_for_5s(){\n    _run_magnet(5_000, 255);\n}\n\nvoid _run_magnet(int duration, int max_pwm){\n  static int ts = millis();\n  analogWrite(MAGNET_1, max_pwm);\n  \n   while(millis() - ts < duration ){\n   //do nothing \n   }\n\n  analogWrite(MAGNET_1, 0);\n\n}\n")),(0,a.kt)("h2",{id:"faqs"},"FAQs"),(0,a.kt)("p",null,"Post to the discord channel any question's you may have and they'll be uploaded to the official documentation if need be."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Why a MOSFET Transistor and Not a Relay?")),(0,a.kt)("p",null,"In short, MOSFETs can switch between on and off much faster than traditional relays allowing us to do actual pwm.       Also because relays have an electromagnet inside they make a noticeable click every time it switches state. You can read more about the differences between Relays and MOSFET Transistors here(Link to personal page)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"I can't connect to my Arduino?")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Make sure Arduino is not on top of  a metal surface. Restart and try again.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Errors with the Output Device"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Linux Devices"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"-Permission denied error. Need to add sudo to Dialout group and tty")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'//Add your standard user to the group "dialout\'\n  sudo usermod -a -G dialout your-username\n\n//Add your standard user to the group "tty"\n  sudo usermod -a -G tty your-username\n\n//Logout/Login\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"-No device found error. Finding correct output. Should be /dev/ttyACM0 or /dev/ttyUSB0.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"//Run this command to find which port\ndmesg | grep tty\n\n//or \n//Remove Arduino usb plug\nls /dev\n\n//Reconnect usb device\nls /dev\n\n//See what new port appeared by comparing output of first command(when device wasn't plugged in) to output // of last command(when device was plugged in).  \n\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In Windows, the ports will be named ",(0,a.kt)("inlineCode",{parentName:"p"},"COM4"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"COM5"),", or something similar. In macOS or Linux, you may see something like ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/ttyACM0")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/ttyUSB0"),"."))))))}c.isMDXComponent=!0},6532:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1_breadboard_mosfet-7bd5e8c2aacd8f95bf1aae5a0c49afcc.png"},4887:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2_power_supply_cable_alligator-dd5fbfc9a1a6225eed0901a4b2ef8704.png"},6001:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/3_terminal_bus-8aecd4a39f71e5ebc16feeb5d04a037f.png"},6361:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/final_wiring-d9f1d0027048fe0b8bce321e72a6a84f.png"},4010:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wiriing-diagram-e02620c9ae27cf27be84c12be623a95d.png"}}]);
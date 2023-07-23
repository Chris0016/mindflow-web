"use strict";(self.webpackChunkhello_world=self.webpackChunkhello_world||[]).push([[429],{3905:(n,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>g});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),u=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},m=function(n){var e=u(n.components);return r.createElement(s.Provider,{value:e},n.children)},p="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,s=n.parentName,m=l(n,["components","mdxType","originalType","parentName"]),p=u(t),c=a,g=p["".concat(s,".").concat(c)]||p[c]||d[c]||i;return t?r.createElement(g,o(o({ref:e},m),{},{components:t})):r.createElement(g,o({ref:e},m))}));function g(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[p]="string"==typeof n?n:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6081:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:2},o="Communication with Computer",l={unversionedId:"programming-arduino/communication-with-computer",id:"programming-arduino/communication-with-computer",title:"Communication with Computer",description:"The next step is to send signals to the arduino through an external device like a laptop to tell it what the next target_pwm should be. We are sending two comma separated values to our arduino and the arduino is replying back to confirm.",source:"@site/docs/programming-arduino/communication-with-computer.md",sourceDirName:"programming-arduino",slug:"/programming-arduino/communication-with-computer",permalink:"/mindflow-web/docs/programming-arduino/communication-with-computer",draft:!1,editUrl:"https://github.com/Chris0016/pZero/tree/main/docs/programming-arduino/communication-with-computer.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Control Motor with Arduino",permalink:"/mindflow-web/docs/programming-arduino/control-motor-with-arduino"},next:{title:"OpenBCI Comms",permalink:"/mindflow-web/docs/programming-arduino/openbci-comms"}},s={},u=[{value:"Reading and Controlling Motor",id:"reading-and-controlling-motor",level:2},{value:"Transitioning Between PWM values",id:"transitioning-between-pwm-values",level:2},{value:"FAQ",id:"faq",level:2}],m={toc:u},p="wrapper";function d(n){let{components:e,...t}=n;return(0,a.kt)(p,(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"communication-with-computer"},"Communication with Computer"),(0,a.kt)("p",null,"The next step is to send signals to the arduino through an external device like a laptop to tell it what the next target_pwm should be. We are sending two comma separated values to our arduino and the arduino is replying back to confirm."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Arduino Code v1"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'const int MAGNET_1 = 9;\n\nunsigned long ts = millis();\n\n\nvoid setup() {\n  pinMode(MAGNET_1, OUTPUT);\n  Serial.begin(9600);\n \n}\n\nvoid loop(){\n\n    while (!Serial.available()) {\n  \n    }\n\n    // Signal that it can send the next values\n        Serial.println("Ready");\n\n    // Read the data \n        String values = Serial.readStringUntil(\'\\n\');\n        values.trim();\n\n\n        // Extract the two values\n        int commaIndex = values.indexOf(\',\');\n        String value1Str = values.substring(0, commaIndex);\n        String value2Str = values.substring(commaIndex + 1);\n\n    //Confirmation\n    Serial.out("value 1: " + value1Str );\n    Serial.out("value 2: " + value2Str );\n\n}\n\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Python Code(Stays the same throughout this tutorial)"))),(0,a.kt)("p",null,"To run the program in linux"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo python3 myOpenBCICode.py\n")),(0,a.kt)("p",null,"BEWARE: Python Serial communication requires sudo user permissions to run. ",(0,a.kt)("strong",{parentName:"p"},"If you install any other libraries through pip for this project make sure to install them as sudo"),"."),(0,a.kt)("p",null,"This is because libraries installed as default user are installed in a seperate folder from those installed as sudo. So when running as sudo, python will look in the sudo dir for libraries and not the regular user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\nimport serial\nimport time\n\n\n# Set up the serial connection\n\n# Change '/dev/ttyACM0' to the correct port for your Arduino\n# In Windows, the ports will be named `COM4`, `COM5`, or something similar.\n# In macOS or Linux, you may see something like `/dev/ttyACM0` or `/dev/ttyUSB0`.\nser = serial.Serial('/dev/ttyACM0', 9600, timeout=1)  \n\nser.reset_input_buffer()\nser.close()\nser.open()\n\n\n\n# Handshake signal from Arduino\ndef arduino_ready():\n    while True:\n        #print(\"waiting\")\n        if ser.in_waiting:\n            response = ser.readline().decode('utf-8').rstrip()\n            if response == \"Ready\":\n                return True\n            else:\n                print(\"\\n Received->>\", response)\n\n\nPWM_LOWER_LIMIT = 50\nPWM_UPPER_LIMIT = 255\nPWM_STEP = 5\n\ndef send_data():\n   \n    ## TESTING - Send a random number to the arduino\n    delay = 100\n    pwmTarget = randomMultiple(PWM_LOWER_LIMIT, PWM_UPPER_LIMIT, PWM_STEP)\n        #send values between PWM_LOWER_LIMIT (50) and PWM_UPPER_LIMIT (255) \n        #that are multiples of PWM_STEP (5)\n        #ex: 55, 100, 75, 250, 160, ... \n  \n\n    ##TESTING - Alternate between to numbers \n\n    # low = 15\n    # high = 50\n\n    # if(isAtHigh):\n    #     pwmTarget = low\n    # else:\n    #     pwmTarget = high\n  \n    ##TESTING - Send fixed values to the arduino\n\n    #delay = 150\n    #pwm_max = 255\n\n   print(\"Sent ->\", delay, \" \", pwmTarget)\n\n\n    # Send the values to Arduino\n    ser.write(str(delay).encode('utf-8'))\n    ser.write(b',')\n    ser.write(str(pwmTarget).encode('utf-8'))\n    ser.write(b'\\n')\n\n  \n\ndef randomMultiple(minimum, maximum, step):\n    return random.randint(math.ceil(minimum / step ), math.floor(maximum / step)) * step\n\n\n\ndef main():\n  time.sleep(3)\n  while True:\n        try:\n            # Wait for Arduino confirmation\n            if arduino_ready():\n                print(\"Arduino Ready\")\n                send_data()\n            else:\n                print(\"Waiting\")\n\n        except KeyboardInterrupt:\n            break\n\n    #Close the serial connection\n    ser.close()\n\nmain()\n")),(0,a.kt)("h2",{id:"reading-and-controlling-motor"},"Reading and Controlling Motor"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Arduino Code v2"))),(0,a.kt)("p",null,"We are now going to improve on our previous arduino code by using the input sent from our laptop or computer and using it to control the motor. To inplement this we'll be using a technique called finitie state machine."),(0,a.kt)("p",null,"We are receiving information information from the computer but also would like to control the motor at the same time. How can we achieve this? The solution is simple alternate between reading and controlling the motor very rapidly; so rapidly that it looks like its doing both at the same time to a human."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'const int MAGNET_1 = 9;\n\n\n//states\ntypedef enum state_t {\n  S_READ,          // 0\n  S_RUNNING,       // 1\n  S_HOLD_MAX_PWM,  // 2\n  S_PAUSE      // 3\n};\n\nstatic state_t state = S_READ;\nstatic int current_pwm = 0;\n//Having a delay as curr_pwm changes towards  target_pwm makes the transition between values smoother and more visible to the user(TO BE TESTED)\nstatic int delay_value = 100;\n\nunsigned long ts = millis();\n\nstatic int PAUSE_DURATON = 2000; \nstatic int TARGET_PWM_HOLD_DURATION = 3000;  \n\nvoid setup() {\n  pinMode(MAGNET_1, OUTPUT);\n \n\n analogWrite(MAGNET_1, 100); //Startup motor, for small first values it will not setup. \n delay(2000);\n \n Serial.begin(9600);\n \n}\n\nvoid loop() {\n\n  Serial.println("state " + String(state));\n\n\n  switch (state) {\n    case S_READ:\n      {\n    curr_pwm = 0; //reset current pwm\n\n        // Signal Computer that it can send the next values\n        Serial.println("Ready");\n\n   \n          while (!Serial.available()) {\n          }\n  \n\n        // Read the data \n        String values = Serial.readStringUntil(\'\\n\');\n        values.trim();\n\n\n        // Extract the two values\n        int commaIndex = values.indexOf(\',\');\n        String value1Str = values.substring(0, commaIndex);\n        String value2Str = values.substring(commaIndex + 1);\n\n\n  \n        delay_value = value1Str.toInt();  \n        curr_pwm_target = value2Str.toInt();\n\n        state = S_RUNNING;\n   \n        //Cannot set first timer for delay within the S_RUNNING case\n        ts = millis();\n      }\n      break;\n\n    case S_RUNNING:\n      {\n\n        analogWrite(MAGNET_1, curr_pwm);\n        while ( (unsigned long)(millis() - ts) < delay_value) {\n        }\n\n        curr_pwm += 1;\n\n        if ((curr_pwm_target == curr_pwm) {\n          state = S_HOLD_MAX_PWM;\n        }\n\n        ts = millis();\n      }\n      break;\n\n    case S_HOLD_MAX_PWM:\n      {\n  \n        analogWrite(MAGNET_1, curr_pwm);\n        if ( (unsigned long)(millis() - ts) > TARGET_PWM_HOLD_DURATION) {\n          state = S_READ; \n  \n          ts = millis(); \n        }\n        break;\n      }\n    case S_PAUSE:\n    {\n        analowWrite(MAGNET_1, 0);\n        if ( (unsigned long)(millis() - ts) > PAUSE_DURATION) {\n                state = S_READ; \n  \n             ts = millis(); \n             }\n            break;\n    }\n  \n    default:\n      {\n        state = S_RUNNING;\n  \n      }\n      break;\n  }\n\n  Serial.print(delay_value);\n  Serial.print(",");\n  Serial.print(curr_pwm_target);\n  Serial.print(",");\n  Serial.println(curr_pwm);\n  \n}\n\n\n')),(0,a.kt)("h2",{id:"transitioning-between-pwm-values"},"Transitioning Between PWM values"),(0,a.kt)("p",null,"If you notice the code above goes from 0 to a random pwm and then back down zero and to the new target pwm. In our scenarion we don't want to start again from zero instead there should be a smooth transition between the current target pwm value and the next target pwm."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Arduino Code v3"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'const int MAGNET_1 = 9;\n\n//states\n\ntypedef enum state_t {\n  S_READ,          // 0\n  S_RUNNING,       // 1\n  S_HOLD_MAX_PWM,  // 2\n  S_PAUSE,          //3\n\n};\n\nstatic state_t state = S_READ;\n\n//Having a delay as curr_pwm changes towards  target_pwm makes the transition between values smoother and more visible to the user(TO BE TESTED)\nstatic int delay_value = 100;\n\nstatic int prev_pwm_target = 0;\nstatic int curr_pwm_target = 0;\nstatic int curr_pwm = 0;\n\nstatic int flag = 1;  //Used for either moving up or down in pwm\n\nstatic int TARGET_PWM_HOLD_DURATION = 3000;  //Milliseconds, subject to change TODO tunning\nstatic int PAUSE_DURATION = 3000; //TESTING\n\nunsigned long ts = millis();\n\n\n\nvoid setup() {\n  pinMode(MAGNET_1, OUTPUT);\n  analogWrite(MAGNET_1, 100); //Startup motor, for small first values it will not setup. \n  delay(2000);\n  Serial.begin(9600);\n \n}\n\nvoid loop() {\n\n  //Serial.println("state " + String(state));\n\n\n  switch (state) {\n    case S_READ:\n      {\n        // Signal Raspberry Pi that it can send the next values\n        Serial.println("Ready");\n\n  \n          while (!Serial.available()) {\n          }\n   \n\n        // Read the data from Raspberry Pi\n        String values = Serial.readStringUntil(\'\\n\');\n        values.trim();\n\n\n        // Extract the two values\n        int commaIndex = values.indexOf(\',\');\n        String value1Str = values.substring(0, commaIndex);\n        String value2Str = values.substring(commaIndex + 1);\n\n\n   \n        prev_pwm_target = curr_pwm_target;\n        delay_value = value1Str.toInt();  \n        curr_pwm_target = value2Str.toInt();\n\n\n        state = S_RUNNING;\n        int diff = curr_pwm_target - prev_pwm_target;\n\n        if (diff > 0)\n          flag = 1;\n        else if (diff < 0)\n          flag = -1;\n        else\n          state = S_HOLD_MAX_PWM;\n\n        //Cannot set first timer for delay within the S_RUNNING case\n        ts = millis();\n      }\n      break;\n\n    case S_RUNNING:\n      {\n\n        analogWrite(MAGNET_1, curr_pwm);\n        while ( (unsigned long)(millis() - ts) < delay_value) {\n        }\n\n        curr_pwm += flag;\n\n        if ((curr_pwm_target == curr_pwm && flag == 1) || (curr_pwm_target == curr_pwm && flag == -1)) {\n          state = S_HOLD_MAX_PWM;\n        }\n\n        ts = millis();\n      }\n      break;\n\n    case S_HOLD_MAX_PWM:\n      {\n        //Serial.println("STATE HOLD");\n        analogWrite(MAGNET_1, curr_pwm);\n        if ( (unsigned long)(millis() - ts) > TARGET_PWM_HOLD_DURATION) {\n          state = S_READ; //S_PAUSE for testing \n  \n          ts = millis();  \n        }\n        break;\n      }\n    case S_PAUSE:\n      {\n        analogWrite(MAGNET_1, 0);\n        while (  (unsigned long) (millis() - ts) < IDLE_DURATION) {\n          //do nothing\n        }\n        ts = millis();\n        state = S_READ;\n      }\n      break;\n    default:\n      {\n        state = S_RUNNING;\n  \n      }\n      break;\n  }\n\n  Serial.print(delay_value);\n  Serial.print(",");\n  Serial.print(curr_pwm_target);\n  Serial.print(",");\n  Serial.print(curr_pwm);\n  Serial.print(",");\n  Serial.println(String(flag));\n\n}\n\n\n')),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("p",null,"Motor doesnt start on the first pwm value?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"Given pwm value is to small to power on motor. Start motor warm.\n")))}d.isMDXComponent=!0}}]);
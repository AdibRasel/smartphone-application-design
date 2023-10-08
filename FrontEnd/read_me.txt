========================front_end.jks file create start========================

C:\Program Files\Java\jdk1.8.0_241\bin>keytool -genkey -v -keystore front_end.jks -keyalg RSA -keysize 2048 -validity 10000 -alias front_end
Enter keystore password:
Re-enter new password:
What is your first and last name?
  [Unknown]:  front_end
What is the name of your organizational unit?
  [Unknown]:  uis_android
What is the name of your organization?
  [Unknown]:  uis
What is the name of your City or Locality?
  [Unknown]:  dhaka
What is the name of your State or Province?
  [Unknown]:  dhaka
What is the two-letter country code for this unit?
  [Unknown]:  bd
Is CN=front_end, OU=uis_android, O=uis, L=dhaka, ST=dhaka, C=bd correct?
  [no]:  y

Generating 2,048 bit RSA key pair and self-signed certificate (SHA256withRSA) with a validity of 10,000 days
        for: CN=front_end, OU=uis_android, O=uis, L=dhaka, ST=dhaka, C=bd
Enter key password for <front_end>
        (RETURN if same as keystore password):
Re-enter new password:
[Storing front_end.jks]

Warning:
The JKS keystore uses a proprietary format. It is recommended to migrate to PKCS12 which is an industry standard format using "keytool -importkeystore -srckeystore front_end.jks -destkeystore front_end.jks -deststoretype pkcs12".

========================front_end.jks file create end========================
========================front_end.keystore file create start========================

C:\Program Files\Java\jdk1.8.0_241\bin>keytool -genkey -v -keystore front_end.keystore -alias front_end -keyalg RSA -keysize 2048 -validity 10000
Enter keystore password:
Re-enter new password:
What is your first and last name?
  [Unknown]:  front_end
What is the name of your organizational unit?
  [Unknown]:  uis_android
What is the name of your organization?
  [Unknown]:  uis
What is the name of your City or Locality?
  [Unknown]:  dhaka
What is the name of your State or Province?
  [Unknown]:  dhaka
What is the two-letter country code for this unit?
  [Unknown]:  bd
Is CN=front_end, OU=uis_android, O=uis, L=dhaka, ST=dhaka, C=bd correct?
  [no]:  y

Generating 2,048 bit RSA key pair and self-signed certificate (SHA256withRSA) with a validity of 10,000 days
        for: CN=front_end, OU=uis_android, O=uis, L=dhaka, ST=dhaka, C=bd
Enter key password for <front_end>
        (RETURN if same as keystore password):
Re-enter new password:
[Storing front_end.keystore]

Warning:
The JKS keystore uses a proprietary format. It is recommended to migrate to PKCS12 which is an industry standard format using "keytool -importkeystore -srckeystore front_end.keystore -destkeystore front_end.keystore -deststoretype pkcs12".

========================front_end.keystore file create end========================

========================front_end.apk file build using command in one line start========================
ionic cordova build android --prod --release && cd /d C:\Program Files\Java\jdk1.8.0_241\bin && call jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore front_end.jks D:\ionic\ionic-5\quick-sms\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk front_end -storepass "android" -keypass "android" && cd /d C:\Users\ismail\AppData\Local\Android\Sdk\build-tools\30.0.3 && call zipalign -f -v 4 D:\ionic\ionic-5\quick-sms\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk D:\ionic\ionic-5\quick-sms\platforms\android\app\build\outputs\apk\release\front_end.apk && apksigner  verify D:\ionic\ionic-5\quick-sms\platforms\android\app\build\outputs\apk\release\front_end.apk
========================front_end.apk file build using command in one line end========================

========================front_end.apk file build using command in multiple line start========================

ionic cordova build android --prod --release 
call cd /d C:\Program Files\Java\jdk1.8.0_241\bin
call jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore front_end.jks D:\ionic\ionic-5\quick-sms\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk front_end -storepass "android" -keypass "android"
call cd /d C:\Users\ismail\AppData\Local\Android\Sdk\build-tools\30.0.3
call zipalign -f -v 4 D:\ionic\ionic-5\quick-sms\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk D:\ionic\ionic-5\quick-sms\platforms\android\app\build\outputs\apk\release\front_end.apk
call apksigner  verify D:\ionic\ionic-5\quick-sms\platforms\android\app\build\outputs\apk\release\front_end.apk

========================front_end.apk file build using command in multiple line end========================

npm install @ionic-native/core

ionic cordova plugin add cordova-plugin-androidx-adapter
ionic cordova plugin add cordova-plugin-androidx

npm install bootstrap@4.5 --save
npm install jquery --save
npm install highcharts --save

npm install file-saver --save

npm uninstall @ionic/storage@2.0.0

npm install xlsx

ionic cordova plugin add cordova-android-support-gradle-release

ionic cordova plugin add cordova-plugin-contacts
npm install @ionic-native/contacts
Example: https://github.com/AndrewJBateman/ionic-angular-contacts
https://snyk.io/advisor/npm-package/@ionic-native/contacts/example
https://www.javascripttuts.com/making-phone-calls-to-contacts-with-ionic-in-one-go/


sms_api
=======
http://apismpp.ajuratech.com/sendtext?apikey=622bfee8efc9ff53&secretkey=3395555e&callerID=8809611677250&toUser=1-4259365522&messageContent=$text

http://smpp.ajuratech.com:7788/getstatus?apikey=622bfee8efc9ff53&secretkey=3395555e&messageid=35206728











1 > npm init @capacitor/app

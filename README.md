# Dashboard Score
Copyright (c) SmartEye, 2018

Dashboard Score adalah aplikasi web untuk menampilkan data score user dari setiap aplikasi VR SmartEye.

## Pre-requisites:
- [NodeJS] (https://nodejs.org/en/download/)
- [NPM] (https://nodejs.org/en/download/)
- [MongoDB] (https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-windows/)

## How to setup the environment:
1. Install dependency yang diperlukan: NodeJS, NPM, dan MongoDB Community Edition
2. Jalankan command berikut untuk mengetes instalasi NodeJS dan NPM:  
`node -v`  
`npm -v`  
3. Jalankan command berikut untuk menyalakan process MongoDB dan masuk ke mongo console untuk memastikan MongoDB sudah running:  
`mongod`  
`mongo`  


## How to run the app:
1. Masuk ke directory project. Install dependency app dengan:  
`npm install`
2. Ubah nama file `example.env` menjadi `.env`.
3. Jalankan aplikasi dengan command `node app.js`
4. Buka browser, masuk ke localhost:3000/index

### Author:
- Fahmi Rahmadani
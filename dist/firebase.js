"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addDoc", {
  enumerable: true,
  get: function get() {
    return _firestore2.addDoc;
  }
});
Object.defineProperty(exports, "collection", {
  enumerable: true,
  get: function get() {
    return _firestore2.collection;
  }
});
exports.db = void 0;
var _app = require("firebase/app");
var _firestore = require("firebase/firestore");
var _firestore2 = require("@firebase/firestore");
// Perbarui ini

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB-lfUt1adpQ0KYcFFW_oAWTJVfHDOOZy8",
  authDomain: "portofolio-web-3e8e8.firebaseapp.com",
  projectId: "portofolio-web-3e8e8",
  storageBucket: "portofolio-web-3e8e8.appspot.com",
  messagingSenderId: "25195509306",
  appId: "1:25195509306:web:2b635dcf997137bf612703"
};

// Initialize Firebase
var app = (0, _app.initializeApp)(firebaseConfig);
var db = exports.db = (0, _firestore.getFirestore)(app);
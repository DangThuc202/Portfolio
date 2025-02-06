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
exports.storage = exports.db = void 0;
var _app = require("firebase/app");
var _firestore = require("firebase/firestore");
var _storage = require("firebase/storage");
var _firestore2 = require("@firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyDJPq9a0YPoQYkpQ-Uaw7aXQRXzzqOKzFA",
  authDomain: "web-kelas-tes.firebaseapp.com",
  projectId: "web-kelas-tes",
  storageBucket: "web-kelas-tes.appspot.com",
  messagingSenderId: "890817433268",
  appId: "1:890817433268:web:11e5258f8864a6174c11e1"
};

// Initialize with a unique name
var app = (0, _app.initializeApp)(firebaseConfig, 'comments-app');
var db = exports.db = (0, _firestore.getFirestore)(app);
var storage = exports.storage = (0, _storage.getStorage)(app);
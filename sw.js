"use strict";
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="WebWorker" />
/// <reference lib="dom" />
var sw = self;
sw.addEventListener('fetch', function (event) {
    console.log("sw fetch event");
});

import React, { Component } from 'react';
import "babel-polyfill";
import {observable} from 'mobx';

export class AppStore {
var appState = observable({
    test: 0
});
}

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// var inputElement = document.querySelector('input[name=name1]');\n// var btnElement = document.querySelector('button.button1');\n// btnElement.onclick = function() {\n//   var text = inputElement.value;\n//   // The only problema is that I don't know how to pass \"text\" outside the function...\n//   const color = text;\n//   if (color === 'blue') {\n//     // console.log (color + ' is my favorite color');\n//     // alert(color + ' is my favorite color');\n//     document.open();\n//     document.write(color + ' is my favorite color');\n//     document.close();\n// } else {\n//     // console.log ('I like ' + color + `, but it isn't my favorite color`);\n//     // alert('I like ' + color + ' but it isn`t my favorite color');\n//     document.open();\n//     document.write('I like ' + color + ' but it isn`t my favorite color');\n//     document.close();\n// }\n//   alert(color);\n// }\n// O objetivo inicial agora é apenas testar e focar nos workflows do Node e do NPM no Github Actions\nconsole.log('Testes iniciais'); // Ok, rodou isso, então quero já montar o pacote para depois ir melhorando e acompanhando o fluxo\n// Evitar usar o yarn, pois o package-lock.json gerado pelo NPM é necessário no Github Actions\n// Executar npm install sem nenhum argumento após o install para resolver esta questõa do package-lock antes de fazer um novo git push para o Actions\n// Configurarei abaixo o teste exemplo oficial do Jest para que finalmente consiga executar o workflow completo sem erros e então ter uma \"estrutura mínima\" pronta para me concentrar na programação de algo útil de forma organizada seguindo as boas práticas.\n// Exemplo padrão para o Jest\n\nfunction sum(a, b) {\n  return a + b;\n}\n\nmodule.exports = sum;\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });
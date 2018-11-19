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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
/******/ })
/************************************************************************/
/******/ ({

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(79);


/***/ }),

/***/ 79:
/***/ (function(module, exports) {

//----------------------------------------------
//                    Colors
//----------------------------------------------

$('.Select-Colors').chosen({
    placeholder_text_multiple: 'Seleccione los colores',
    // max_selected_options: 3,
    search_contains: true,
    no_results_text: 'No se ha encontrado el color'
});

//----------------------------------------------
//                     Tags
//----------------------------------------------
$('.Select-Tags').chosen({
    placeholder_text_multiple: 'Seleccione las etiquetas',
    // max_selected_options: 3,
    search_contains: true,
    no_results_text: 'No se ha encontrado la etiqueta'
});

$('.Select-Atribute').chosen({
    placeholder_text_multiple: 'Seleccionar',
    // max_selected_options: 3,
    search_contains: true,
    no_results_text: 'No se ha encontrado'
});

$('.Select-Category').chosen({
    placeholder_text_single: 'Seleccione una categoría'
});

$('.Select-Chosen').chosen({
    placeholder_text_single: 'Seleccione una categoría'
});

//----------------------------------------------
//              Slug creator
//----------------------------------------------

$(".SlugInput").keyup(function () {
    var Text = $(this).val();
    Text = Text.toLowerCase();
    var regExp = /\s+/g;
    Text = Text.replace(/[&\/\\#,¡!´#+()$~%.'":*?<>{}]/g, '');
    Text = Text.replace(regExp, '-');
    Text = Text.replace('ñ', 'n');
    Text = Text.replace('á', 'a');
    Text = Text.replace('é', 'e');
    Text = Text.replace('í', 'i');
    Text = Text.replace('ó', 'o');
    Text = Text.replace('ú', 'u');

    $(".SlugInput").val(Text);
});

// Slug AutoFillnput from title 

$("#TitleInput").keyup(function (event) {
    var stt = $(this).val();
    var Text = $(this).val();
    Text = Text.toLowerCase();
    var regExp = /\s+/g;
    Text = Text.replace(/[&\/\\#,¡!´#+()$~%.'":*?<>{}]/g, '');
    Text = Text.replace(regExp, '-');
    Text = Text.replace('ñ', 'n');
    Text = Text.replace('á', 'a');
    Text = Text.replace('é', 'e');
    Text = Text.replace('í', 'i');
    Text = Text.replace('ó', 'o');
    Text = Text.replace('ú', 'u');
    $(".SlugInput").val(Text);
});

//----------------------------------------------
//      CREATE FORM
//----------------------------------------------

// Show Notes Text Area
$('.ShowNotesTextArea').click(function () {
    var notes = $('.NotesTextArea');
    if (notes.hasClass('Hidden')) {
        notes.removeClass('Hidden');
    } else {
        notes.addClass('Hidden');
    }
});

// Add Another Address
$('.AddAnotherAddressBtn').click(function () {
    var addressInput = "<input class='form-control' placeholder='Ingrese otro teléfono' name='deliveryaddress[]' type='text' style='margin-top:5px'>";
    var locInput = "<input class='form-control' placeholder='Ingrese otro teléfono' name='deliveryaddress[]' type='text' style='margin-top:5px'>";

    $('.AnotherAddress').append(addressInput);
    $('.AnotherLoc').append(locInput);
});

//----------------------------------------------
//     CREATE ARTICLE VARIANTS
//----------------------------------------------
window.checkVariants = function (data) {
    var obj = JSON.parse(data);
    // let data2 = JSON.stringify(data);
    console.log(obj);
    // let existingVariantsContainer = $('#ExistingVariants');

    // let variantRow = "<tr>" +
    //                         "<td class='Combination' data-combination="+ value['color'] +"/" + value['size'] + ">"+ value['color'] +"/" + value['size'] + "</td>" +
    //                         "<td><input name='variant["+value['combination']+"][color]' value="+ value['color'] +" type='hidden' class='form-control'></td>" +
    //                         "<td><input name='variant["+value['combination']+"][size]' value="+ value['size'] +" type='hidden' class='form-control'></td>" +
    //                         "<td><input name='variant["+value['combination']+"][stock]' value='10' type='number' min='0' class='form-control'></td>" +
    //                         "<td><input name='variant["+value['combination']+"][price]' value='100' type='number' min='0' class='form-control'></td>" +
    //                         "<td><input name='variant["+value['combination']+"][discount]' value='10' type='number' min='0' class='form-control'></td>" +
    //                         "<td><i class='fa fa-trash'></i></td>" +
    //                      "</tr>";
};

window.makeVariants = function () {
    var variantsContainer = $('#ArticleVariants');
    var variantSize = $('.VariantSize');
    var variantColor = $('.VariantColor');

    var colors = [];
    var sizes = [];

    $.each(variantSize, function () {
        if ($(this).is(':checked')) {
            size = {};
            size['id'] = $(this).val();
            size['name'] = $(this).data('name');
            sizes.push(size);
        }
    });

    $.each(variantColor, function () {
        if ($(this).is(':checked')) {
            color = {};
            color['id'] = $(this).val();
            color['name'] = $(this).data('name');
            colors.push(color);
        }
    });

    // let existingCombinations = [];
    // setTimeout(function(){
    //     $(".Combination").each(function(){
    //         existingCombination = {};
    //         existingCombination['combination'] = $(this).data('combination');
    //         existingCombinations.push(existingCombination);
    //     });
    //     console.log("Existing combinations");   
    //     console.log(existingCombinations);
    //     addNewCombinations(existingCombinations);
    // }, 1000);


    var combinations = [];

    $.each(colors, function (index, color) {
        $.each(sizes, function (index, size) {
            var item = {};
            item['combination'] = color['name'] + "/" + size['name'];
            item['color'] = color['name'];
            item['color_id'] = color['id'];
            item['size'] = size['name'];
            item['size_id'] = size['id'];
            combinations.push(item);
        });
    });

    $.each(combinations, function (index, value) {

        var variantRow = "<tr>" + "<td class='Combination' data-combination=" + value['color'] + "/" + value['size'] + ">" + value['color'] + "/" + value['size'] + "</td>" + "<td><input name='variants[" + value['combination'] + "][color]' value=" + value['color'] + " type='hidden' class='form-control'></td>" + "<td><input name='variants[" + value['combination'] + "][size]' value=" + value['size'] + " type='hidden' class='form-control'></td>" + "<td><input name='variants[" + value['combination'] + "][stock]' value='10' type='number' min='0' class='form-control'></td>" + "<td><input name='variants[" + value['combination'] + "][price]' value='100' type='number' min='0' class='form-control'></td>" + "<td><input name='variants[" + value['combination'] + "][discount]' value='10' type='number' min='0' class='form-control'></td>" + "<td><i class='fa fa-trash'></i></td>" + "</tr>";

        variantsContainer.append(variantRow);
    });
};

//----------------------------------------------
//   EDITORS AND FIELDS 
//----------------------------------------------

// $('#Multi_Images').fileuploader({
//     extensions: ['jpg', 'jpeg', 'png', 'gif'],
//     limit: null,
//     addMore: true,
//     // Peso máximo de todas las imágenes
//     maxSize: 5,
//     // Peso máximo por imágen
//     fileMaxSize: 2,
//     theme: 'thumbnails',
//     enableApi: true,
//     captions: {
//         button: function(options) { return 'Seleccionar ' + (options.limit == 1 ? 'Imágenes' : 'Imágen'); },
//         feedback: function(options) { return 'Haga click para agregar...'; },
//         feedback2: function(options) { return options.length + ' ' + (options.length > 1 ? ' imágenes seleccionadas' : ' imágen seleccionada'); },
//         drop: 'Arrastre las imágenes aquí',
//         paste: '<div class="fileuploader-pending-loader"><div class="left-half" style="animation-duration: ${ms}s"></div><div class="spinner" style="animation-duration: ${ms}s"></div><div class="right-half" style="animation-duration: ${ms}s"></div></div> Pasting a file, click here to cancel.',
//         removeConfirmation: 'Eliminar?',
//         errors: {
//             filesLimit: 'Solo es posible subir ${limit} imágen.',
//             filesType: 'Solo se aceptan los formatos: ${extensions}.',
//             fileSize: '${name} es muy grandes! Seleccione una de ${fileMaxSize}MB. como máximo',
//             filesSizeAll: '${name} son muy grandes! Seleccione unas de ${fileMaxSize}MB. como máximo',
//             fileName: 'La imágen con el nombre ${name} ya está seleccionada.',
//             folderUpload: 'No está permitido subir carpetas.'
//         },
//         dialogs: {
//             // alert dialog
//             alert: function(text) {
//                 return alert_confirm(text);
//             },
//             // confirm dialog
//             confirm: function(text, callback) {
//                 'confirm(text) ? callback() : null;'
//             }
//         },
//     }
// });

$('#Single_Image').fileuploader({
    extensions: ['jpg', 'jpeg', 'png', 'gif'],
    limit: 1,
    addMore: false,
    fileMaxSize: 2,
    captions: {
        button: function button(options) {
            return 'Seleccionar ' + (options.limit == 1 ? 'Imágen' : 'Imágen');
        },
        feedback: function feedback(options) {
            return 'Agregar imágenes...';
        },
        feedback2: function feedback2(options) {
            return options.length + ' ' + (options.length > 1 ? ' imágenes seleccionadas' : ' imágen seleccionada');
        },
        drop: 'Arrastre las imágenes aquí',
        paste: '<div class="fileuploader-pending-loader"><div class="left-half" style="animation-duration: ${ms}s"></div><div class="spinner" style="animation-duration: ${ms}s"></div><div class="right-half" style="animation-duration: ${ms}s"></div></div> Pasting a file, click here to cancel.',
        removeConfirmation: 'Eliminar?',
        errors: {
            filesLimit: 'Solo es posible subir ${limit} imágen.',
            filesType: 'Solo se aceptan los formatos: ${extensions}.',
            fileSize: 'La imágen pesa mucho! Elija una de ${fileMaxSize}MB como máximo.',
            fileName: 'La imágen con ese nombre ya ha sido elegida',
            folderUpload: 'No está permitido subir carpetas.'
        },
        dialogs: {
            // alert dialog
            alert: function (_alert) {
                function alert(_x) {
                    return _alert.apply(this, arguments);
                }

                alert.toString = function () {
                    return _alert.toString();
                };

                return alert;
            }(function (text) {
                return alert(text);
            }),
            // confirm dialog
            confirm: function confirm(text, callback) {
                'confirm(text) ? callback() : null;';
            }
        }
    }
});

$('#Multi_Images').fileuploader({
    extensions: ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
    changeInput: ' ',
    theme: 'thumbnails',
    enableApi: true,
    addMore: true,
    thumbnails: {
        box: '<div class="fileuploader-items">' + '<ul class="fileuploader-items-list">' + '<li class="fileuploader-thumbnails-input"><div class="fileuploader-thumbnails-input-inner">+</div></li>' + '</ul>' + '</div>',
        item: '<li class="fileuploader-item">' + '<div class="fileuploader-item-inner">' + '<div class="thumbnail-holder">${image}</div>' + '<div class="actions-holder">' + '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i class="remove"></i></a>' + '<span class="fileuploader-action-popup"></span>' + '</div>' + '<div class="progress-holder">${progressBar}</div>' + '</div>' + '</li>',
        item2: '<li class="fileuploader-item">' + '<div class="fileuploader-item-inner">' + '<div class="thumbnail-holder">${image}</div>' + '<div class="actions-holder">' + '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i class="remove"></i></a>' + '<span class="fileuploader-action-popup"></span>' + '</div>' + '</div>' + '</li>',
        startImageRenderer: true,
        canvasImage: false,
        _selectors: {
            list: '.fileuploader-items-list',
            item: '.fileuploader-item',
            start: '.fileuploader-action-start',
            retry: '.fileuploader-action-retry',
            remove: '.fileuploader-action-remove'
        },
        onItemShow: function onItemShow(item, listEl, parentEl, newInputEl, inputEl) {
            var plusInput = listEl.find('.fileuploader-thumbnails-input'),
                api = $.fileuploader.getInstance(inputEl.get(0));

            plusInput.insertAfter(item.html)[api.getOptions().limit && api.getChoosedFiles().length >= api.getOptions().limit ? 'hide' : 'show']();

            if (item.format == 'image') {
                item.html.find('.fileuploader-item-icon').hide();
            }
        }
    },
    afterRender: function afterRender(listEl, parentEl, newInputEl, inputEl) {
        var plusInput = listEl.find('.fileuploader-thumbnails-input'),
            api = $.fileuploader.getInstance(inputEl.get(0));

        plusInput.on('click', function () {
            api.open();
        });
    },
    onRemove: function onRemove(item, listEl, parentEl, newInputEl, inputEl) {
        var plusInput = listEl.find('.fileuploader-thumbnails-input'),
            api = $.fileuploader.getInstance(inputEl.get(0));

        if (api.getOptions().limit && api.getChoosedFiles().length - 1 < api.getOptions().limit) plusInput.show();
    }
    /*
    // while using upload option, please set
    // startImageRenderer: false
    // for a better effect
    upload: {
        url: './php/upload_file.php',
        data: null,
        type: 'POST',
        enctype: 'multipart/form-data',
        start: true,
        synchron: true,
        beforeSend: null,
        onSuccess: function(data, item) {
            setTimeout(function() {
                item.html.find('.progress-holder').hide();
                item.renderThumbnail();
            }, 400);
        },
        onError: function(item) {
            item.html.find('.progress-holder').hide();
            item.html.find('.fileuploader-item-icon i').text('Failed!');
        },
        onProgress: function(data, item) {
            var progressBar = item.html.find('.progress-holder');
            
            if(progressBar.length > 0) {
                progressBar.show();
                progressBar.find('.fileuploader-progressbar .bar').width(data.percentage + "%");
            }
        }
    },
    dragDrop: {
        container: '.fileuploader-thumbnails-input'
    },
    onRemove: function(item) {
        $.post('php/upload_remove.php', {
            file: item.name
        });
    },
    */
});

$('.Display-Input-Modificable').click(function () {
    $(this).removeClass('display-input-disabled');
});

// ---- Modificable input text
// Html element
//<p data-editable class="SlugInput">{{ $article->slug }}</p>   

$('body').on('click', '[data-editable]', function () {

    var $el = $(this);

    var $input = $('<input/>').val($el.text());
    $el.replaceWith($input);

    var save = function save() {
        var $p = $('<p data-editable />').text($input.val());
        $input.replaceWith($p);
    };

    /**
      We're defining the callback with `one`, because we know that
      the element will be gone just after that, and we don't want 
      any callbacks leftovers take memory. 
      Next time `p` turns into `input` this single callback 
      will be applied again.
    */
    $input.one('blur', save).focus();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDVhZjg2MTVlNTlmZmQ0OTUxMzkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92YWRtaW4tZm9ybXMuanMiXSwibmFtZXMiOlsiJCIsImNob3NlbiIsInBsYWNlaG9sZGVyX3RleHRfbXVsdGlwbGUiLCJzZWFyY2hfY29udGFpbnMiLCJub19yZXN1bHRzX3RleHQiLCJwbGFjZWhvbGRlcl90ZXh0X3NpbmdsZSIsImtleXVwIiwiVGV4dCIsInZhbCIsInRvTG93ZXJDYXNlIiwicmVnRXhwIiwicmVwbGFjZSIsImV2ZW50Iiwic3R0IiwiY2xpY2siLCJub3RlcyIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImFkZHJlc3NJbnB1dCIsImxvY0lucHV0IiwiYXBwZW5kIiwid2luZG93IiwiY2hlY2tWYXJpYW50cyIsImRhdGEiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwibWFrZVZhcmlhbnRzIiwidmFyaWFudHNDb250YWluZXIiLCJ2YXJpYW50U2l6ZSIsInZhcmlhbnRDb2xvciIsImNvbG9ycyIsInNpemVzIiwiZWFjaCIsImlzIiwic2l6ZSIsInB1c2giLCJjb2xvciIsImNvbWJpbmF0aW9ucyIsImluZGV4IiwiaXRlbSIsInZhbHVlIiwidmFyaWFudFJvdyIsImZpbGV1cGxvYWRlciIsImV4dGVuc2lvbnMiLCJsaW1pdCIsImFkZE1vcmUiLCJmaWxlTWF4U2l6ZSIsImNhcHRpb25zIiwiYnV0dG9uIiwib3B0aW9ucyIsImZlZWRiYWNrIiwiZmVlZGJhY2syIiwibGVuZ3RoIiwiZHJvcCIsInBhc3RlIiwicmVtb3ZlQ29uZmlybWF0aW9uIiwiZXJyb3JzIiwiZmlsZXNMaW1pdCIsImZpbGVzVHlwZSIsImZpbGVTaXplIiwiZmlsZU5hbWUiLCJmb2xkZXJVcGxvYWQiLCJkaWFsb2dzIiwiYWxlcnQiLCJ0ZXh0IiwiY29uZmlybSIsImNhbGxiYWNrIiwiY2hhbmdlSW5wdXQiLCJ0aGVtZSIsImVuYWJsZUFwaSIsInRodW1ibmFpbHMiLCJib3giLCJpdGVtMiIsInN0YXJ0SW1hZ2VSZW5kZXJlciIsImNhbnZhc0ltYWdlIiwiX3NlbGVjdG9ycyIsImxpc3QiLCJzdGFydCIsInJldHJ5IiwicmVtb3ZlIiwib25JdGVtU2hvdyIsImxpc3RFbCIsInBhcmVudEVsIiwibmV3SW5wdXRFbCIsImlucHV0RWwiLCJwbHVzSW5wdXQiLCJmaW5kIiwiYXBpIiwiZ2V0SW5zdGFuY2UiLCJnZXQiLCJpbnNlcnRBZnRlciIsImh0bWwiLCJnZXRPcHRpb25zIiwiZ2V0Q2hvb3NlZEZpbGVzIiwiZm9ybWF0IiwiaGlkZSIsImFmdGVyUmVuZGVyIiwib24iLCJvcGVuIiwib25SZW1vdmUiLCJzaG93IiwiJGVsIiwiJGlucHV0IiwicmVwbGFjZVdpdGgiLCJzYXZlIiwiJHAiLCJvbmUiLCJmb2N1cyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTs7QUFFQUEsRUFBRSxnQkFBRixFQUFvQkMsTUFBcEIsQ0FBMkI7QUFDdkJDLCtCQUEyQix3QkFESjtBQUV2QjtBQUNBQyxxQkFBaUIsSUFITTtBQUl2QkMscUJBQWlCO0FBSk0sQ0FBM0I7O0FBT0E7QUFDQTtBQUNBO0FBQ0FKLEVB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RCxNQUFqQjs7QUFFQSxRQUFJRSxPQUFPLFNBQVBBLElBQU8sR0FBVTtBQUNuQixZQUFJQyxLQUFLN0csRUFBRSxxQkFBRixFQUF5Qm9FLElBQXpCLENBQStCc0MsT0FBT2xHLEdBQVAsRUFBL0IsQ0FBVDtBQUNBa0csZUFBT0MsV0FBUCxDQUFvQkUsRUFBcEI7QUFDRCxLQUhEOztBQUtBOzs7Ozs7O0FBT0FILFdBQU9JLEdBQVAsQ0FBVyxNQUFYLEVBQW1CRixJQUFuQixFQUF5QkcsS0FBekI7QUFFRCxDQXJCSCxFIiwiZmlsZSI6Ii9qcy92YWRtaW4tZm9ybXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ1YWY4NjE1ZTU5ZmZkNDk1MTM5IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAgICAgICAgICAgICAgICAgICBDb2xvcnNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kKCcuU2VsZWN0LUNvbG9ycycpLmNob3Nlbih7XHJcbiAgICBwbGFjZWhvbGRlcl90ZXh0X211bHRpcGxlOiAnU2VsZWNjaW9uZSBsb3MgY29sb3JlcycsXHJcbiAgICAvLyBtYXhfc2VsZWN0ZWRfb3B0aW9uczogMyxcclxuICAgIHNlYXJjaF9jb250YWluczogdHJ1ZSxcclxuICAgIG5vX3Jlc3VsdHNfdGV4dDogJ05vIHNlIGhhIGVuY29udHJhZG8gZWwgY29sb3InXHJcbn0pO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAgICAgICAgICAgICAgICAgICAgVGFnc1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJCgnLlNlbGVjdC1UYWdzJykuY2hvc2VuKHtcclxuICAgIHBsYWNlaG9sZGVyX3RleHRfbXVsdGlwbGU6ICdTZWxlY2Npb25lIGxhcyBldGlxdWV0YXMnLFxyXG4gICAgLy8gbWF4X3NlbGVjdGVkX29wdGlvbnM6IDMsXHJcbiAgICBzZWFyY2hfY29udGFpbnM6IHRydWUsXHJcbiAgICBub19yZXN1bHRzX3RleHQ6ICdObyBzZSBoYSBlbmNvbnRyYWRvIGxhIGV0aXF1ZXRhJ1xyXG59KTtcclxuXHJcbiQoJy5TZWxlY3QtQXRyaWJ1dGUnKS5jaG9zZW4oe1xyXG4gICAgcGxhY2Vob2xkZXJfdGV4dF9tdWx0aXBsZTogJ1NlbGVjY2lvbmFyJyxcclxuICAgIC8vIG1heF9zZWxlY3RlZF9vcHRpb25zOiAzLFxyXG4gICAgc2VhcmNoX2NvbnRhaW5zOiB0cnVlLFxyXG4gICAgbm9fcmVzdWx0c190ZXh0OiAnTm8gc2UgaGEgZW5jb250cmFkbydcclxufSk7XHJcblxyXG4kKCcuU2VsZWN0LUNhdGVnb3J5JykuY2hvc2VuKHtcclxuICAgIHBsYWNlaG9sZGVyX3RleHRfc2luZ2xlOiAnU2VsZWNjaW9uZSB1bmEgY2F0ZWdvcsOtYScsXHJcbn0pO1xyXG5cclxuJCgnLlNlbGVjdC1DaG9zZW4nKS5jaG9zZW4oe1xyXG4gICAgcGxhY2Vob2xkZXJfdGV4dF9zaW5nbGU6ICdTZWxlY2Npb25lIHVuYSBjYXRlZ29yw61hJyxcclxufSk7XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAgICAgICAgICAgICBTbHVnIGNyZWF0b3JcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kKFwiLlNsdWdJbnB1dFwiKS5rZXl1cChmdW5jdGlvbigpe1xyXG4gICAgdmFyIFRleHQgICAgID0gJCh0aGlzKS52YWwoKTtcclxuICAgIFRleHQgICAgICAgICA9IFRleHQudG9Mb3dlckNhc2UoKTtcclxuICAgIHZhciByZWdFeHAgICA9IC9cXHMrL2c7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoL1smXFwvXFxcXCMswqEhwrQjKygpJH4lLidcIjoqPzw+e31dL2csJycpO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKHJlZ0V4cCwnLScpO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDsScsICduJykgO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDoScsICdhJykgO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDqScsICdlJykgO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDrScsICdpJykgO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDsycsICdvJykgO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDuicsICd1JykgO1xyXG4gICAgXHJcbiAgICAkKFwiLlNsdWdJbnB1dFwiKS52YWwoVGV4dCk7ICAgXHJcbn0pO1xyXG5cclxuLy8gU2x1ZyBBdXRvRmlsbG5wdXQgZnJvbSB0aXRsZSBcclxuXHJcbiQoXCIjVGl0bGVJbnB1dFwiKS5rZXl1cChmdW5jdGlvbihldmVudCkge1xyXG4gICAgdmFyIHN0dCA9ICQodGhpcykudmFsKCk7XHJcbiAgICB2YXIgVGV4dCAgICAgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdmFyIHJlZ0V4cCAgID0gL1xccysvZztcclxuICAgIFRleHQgICAgICAgICA9IFRleHQucmVwbGFjZSgvWyZcXC9cXFxcIyzCoSHCtCMrKCkkfiUuJ1wiOio/PD57fV0vZywnJyk7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UocmVnRXhwLCctJyk7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OxJywgJ24nKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OhJywgJ2EnKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OpJywgJ2UnKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OtJywgJ2knKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OzJywgJ28nKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8O6JywgJ3UnKSA7XHJcbiAgICAkKFwiLlNsdWdJbnB1dFwiKS52YWwoVGV4dCk7ICAgXHJcbn0pO1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgICAgIENSRUFURSBGT1JNXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gU2hvdyBOb3RlcyBUZXh0IEFyZWFcclxuJCgnLlNob3dOb3Rlc1RleHRBcmVhJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIHZhciBub3RlcyA9ICQoJy5Ob3Rlc1RleHRBcmVhJyk7XHJcbiAgICBpZiAobm90ZXMuaGFzQ2xhc3MoJ0hpZGRlbicpKXtcclxuICAgICAgICBub3Rlcy5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vdGVzLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBBZGQgQW5vdGhlciBBZGRyZXNzXHJcbiQoJy5BZGRBbm90aGVyQWRkcmVzc0J0bicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgYWRkcmVzc0lucHV0ID0gXCI8aW5wdXQgY2xhc3M9J2Zvcm0tY29udHJvbCcgcGxhY2Vob2xkZXI9J0luZ3Jlc2Ugb3RybyB0ZWzDqWZvbm8nIG5hbWU9J2RlbGl2ZXJ5YWRkcmVzc1tdJyB0eXBlPSd0ZXh0JyBzdHlsZT0nbWFyZ2luLXRvcDo1cHgnPlwiO1xyXG4gICAgdmFyIGxvY0lucHV0ICAgICA9IFwiPGlucHV0IGNsYXNzPSdmb3JtLWNvbnRyb2wnIHBsYWNlaG9sZGVyPSdJbmdyZXNlIG90cm8gdGVsw6lmb25vJyBuYW1lPSdkZWxpdmVyeWFkZHJlc3NbXScgdHlwZT0ndGV4dCcgc3R5bGU9J21hcmdpbi10b3A6NXB4Jz5cIjtcclxuXHJcbiAgICAkKCcuQW5vdGhlckFkZHJlc3MnKS5hcHBlbmQoYWRkcmVzc0lucHV0KTtcclxuICAgICQoJy5Bbm90aGVyTG9jJykuYXBwZW5kKGxvY0lucHV0KTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgIENSRUFURSBBUlRJQ0xFIFZBUklBTlRTXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG53aW5kb3cuY2hlY2tWYXJpYW50cyA9IGZ1bmN0aW9uKGRhdGEpXHJcbntcclxuICAgIHZhciBvYmogPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgLy8gbGV0IGRhdGEyID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhvYmopO1xyXG4gICAgLy8gbGV0IGV4aXN0aW5nVmFyaWFudHNDb250YWluZXIgPSAkKCcjRXhpc3RpbmdWYXJpYW50cycpO1xyXG5cclxuICAgIC8vIGxldCB2YXJpYW50Um93ID0gXCI8dHI+XCIgK1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCI8dGQgY2xhc3M9J0NvbWJpbmF0aW9uJyBkYXRhLWNvbWJpbmF0aW9uPVwiKyB2YWx1ZVsnY29sb3InXSArXCIvXCIgKyB2YWx1ZVsnc2l6ZSddICsgXCI+XCIrIHZhbHVlWydjb2xvciddICtcIi9cIiArIHZhbHVlWydzaXplJ10gKyBcIjwvdGQ+XCIgK1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCI8dGQ+PGlucHV0IG5hbWU9J3ZhcmlhbnRbXCIrdmFsdWVbJ2NvbWJpbmF0aW9uJ10rXCJdW2NvbG9yXScgdmFsdWU9XCIrIHZhbHVlWydjb2xvciddICtcIiB0eXBlPSdoaWRkZW4nIGNsYXNzPSdmb3JtLWNvbnRyb2wnPjwvdGQ+XCIgK1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCI8dGQ+PGlucHV0IG5hbWU9J3ZhcmlhbnRbXCIrdmFsdWVbJ2NvbWJpbmF0aW9uJ10rXCJdW3NpemVdJyB2YWx1ZT1cIisgdmFsdWVbJ3NpemUnXSArXCIgdHlwZT0naGlkZGVuJyBjbGFzcz0nZm9ybS1jb250cm9sJz48L3RkPlwiICtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIFwiPHRkPjxpbnB1dCBuYW1lPSd2YXJpYW50W1wiK3ZhbHVlWydjb21iaW5hdGlvbiddK1wiXVtzdG9ja10nIHZhbHVlPScxMCcgdHlwZT0nbnVtYmVyJyBtaW49JzAnIGNsYXNzPSdmb3JtLWNvbnRyb2wnPjwvdGQ+XCIgK1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCI8dGQ+PGlucHV0IG5hbWU9J3ZhcmlhbnRbXCIrdmFsdWVbJ2NvbWJpbmF0aW9uJ10rXCJdW3ByaWNlXScgdmFsdWU9JzEwMCcgdHlwZT0nbnVtYmVyJyBtaW49JzAnIGNsYXNzPSdmb3JtLWNvbnRyb2wnPjwvdGQ+XCIgK1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCI8dGQ+PGlucHV0IG5hbWU9J3ZhcmlhbnRbXCIrdmFsdWVbJ2NvbWJpbmF0aW9uJ10rXCJdW2Rpc2NvdW50XScgdmFsdWU9JzEwJyB0eXBlPSdudW1iZXInIG1pbj0nMCcgY2xhc3M9J2Zvcm0tY29udHJvbCc+PC90ZD5cIiArXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBcIjx0ZD48aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT48L3RkPlwiICtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgIFwiPC90cj5cIjtcclxufVxyXG5cclxuXHJcblxyXG53aW5kb3cubWFrZVZhcmlhbnRzID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBjb25zdCB2YXJpYW50c0NvbnRhaW5lciA9ICQoJyNBcnRpY2xlVmFyaWFudHMnKTtcclxuICAgIGNvbnN0IHZhcmlhbnRTaXplID0gJCgnLlZhcmlhbnRTaXplJyk7XHJcbiAgICBjb25zdCB2YXJpYW50Q29sb3IgPSAkKCcuVmFyaWFudENvbG9yJyk7XHJcbiAgICBcclxuICAgIGxldCBjb2xvcnMgPSBbXTtcclxuICAgIGxldCBzaXplcyA9IFtdO1xyXG5cclxuICAgICQuZWFjaCh2YXJpYW50U2l6ZSwgZnVuY3Rpb24oKXtcclxuICAgICAgICBpZigkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKVxyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgc2l6ZSA9IHt9O1xyXG4gICAgICAgICAgICBzaXplWydpZCddID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgc2l6ZVsnbmFtZSddID0gJCh0aGlzKS5kYXRhKCduYW1lJyk7XHJcbiAgICAgICAgICAgIHNpemVzLnB1c2goc2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQuZWFjaCh2YXJpYW50Q29sb3IsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSlcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIGNvbG9yID0ge307XHJcbiAgICAgICAgICAgIGNvbG9yWydpZCddID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgY29sb3JbJ25hbWUnXSA9ICQodGhpcykuZGF0YSgnbmFtZScpO1xyXG4gICAgICAgICAgICBjb2xvcnMucHVzaChjb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIGxldCBleGlzdGluZ0NvbWJpbmF0aW9ucyA9IFtdO1xyXG4gICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgICQoXCIuQ29tYmluYXRpb25cIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgICAgICBleGlzdGluZ0NvbWJpbmF0aW9uID0ge307XHJcbiAgICAvLyAgICAgICAgIGV4aXN0aW5nQ29tYmluYXRpb25bJ2NvbWJpbmF0aW9uJ10gPSAkKHRoaXMpLmRhdGEoJ2NvbWJpbmF0aW9uJyk7XHJcbiAgICAvLyAgICAgICAgIGV4aXN0aW5nQ29tYmluYXRpb25zLnB1c2goZXhpc3RpbmdDb21iaW5hdGlvbik7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJFeGlzdGluZyBjb21iaW5hdGlvbnNcIik7ICAgXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXhpc3RpbmdDb21iaW5hdGlvbnMpO1xyXG4gICAgLy8gICAgIGFkZE5ld0NvbWJpbmF0aW9ucyhleGlzdGluZ0NvbWJpbmF0aW9ucyk7XHJcbiAgICAvLyB9LCAxMDAwKTtcclxuXHJcbiAgICBcclxuICAgIHZhciBjb21iaW5hdGlvbnMgPSBbXTtcclxuXHJcbiAgICAkLmVhY2goY29sb3JzLCBmdW5jdGlvbihpbmRleCwgY29sb3Ipe1xyXG4gICAgICAgICQuZWFjaChzaXplcywgIGZ1bmN0aW9uKGluZGV4LCBzaXplKXtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB7fTsgXHJcbiAgICAgICAgICAgIGl0ZW1bJ2NvbWJpbmF0aW9uJ10gPSBjb2xvclsnbmFtZSddK1wiL1wiK3NpemVbJ25hbWUnXTtcclxuICAgICAgICAgICAgaXRlbVsnY29sb3InXSA9IGNvbG9yWyduYW1lJ107XHJcbiAgICAgICAgICAgIGl0ZW1bJ2NvbG9yX2lkJ10gPSBjb2xvclsnaWQnXTtcclxuICAgICAgICAgICAgaXRlbVsnc2l6ZSddID0gc2l6ZVsnbmFtZSddO1xyXG4gICAgICAgICAgICBpdGVtWydzaXplX2lkJ10gPSBzaXplWydpZCddO1xyXG4gICAgICAgICAgICBjb21iaW5hdGlvbnMucHVzaChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkLmVhY2goY29tYmluYXRpb25zLCBmdW5jdGlvbihpbmRleCwgdmFsdWUpXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHZhcmlhbnRSb3cgPSBcIjx0cj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjx0ZCBjbGFzcz0nQ29tYmluYXRpb24nIGRhdGEtY29tYmluYXRpb249XCIrIHZhbHVlWydjb2xvciddICtcIi9cIiArIHZhbHVlWydzaXplJ10gKyBcIj5cIisgdmFsdWVbJ2NvbG9yJ10gK1wiL1wiICsgdmFsdWVbJ3NpemUnXSArIFwiPC90ZD5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjx0ZD48aW5wdXQgbmFtZT0ndmFyaWFudHNbXCIrdmFsdWVbJ2NvbWJpbmF0aW9uJ10rXCJdW2NvbG9yXScgdmFsdWU9XCIrIHZhbHVlWydjb2xvciddICtcIiB0eXBlPSdoaWRkZW4nIGNsYXNzPSdmb3JtLWNvbnRyb2wnPjwvdGQ+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8dGQ+PGlucHV0IG5hbWU9J3ZhcmlhbnRzW1wiK3ZhbHVlWydjb21iaW5hdGlvbiddK1wiXVtzaXplXScgdmFsdWU9XCIrIHZhbHVlWydzaXplJ10gK1wiIHR5cGU9J2hpZGRlbicgY2xhc3M9J2Zvcm0tY29udHJvbCc+PC90ZD5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjx0ZD48aW5wdXQgbmFtZT0ndmFyaWFudHNbXCIrdmFsdWVbJ2NvbWJpbmF0aW9uJ10rXCJdW3N0b2NrXScgdmFsdWU9JzEwJyB0eXBlPSdudW1iZXInIG1pbj0nMCcgY2xhc3M9J2Zvcm0tY29udHJvbCc+PC90ZD5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjx0ZD48aW5wdXQgbmFtZT0ndmFyaWFudHNbXCIrdmFsdWVbJ2NvbWJpbmF0aW9uJ10rXCJdW3ByaWNlXScgdmFsdWU9JzEwMCcgdHlwZT0nbnVtYmVyJyBtaW49JzAnIGNsYXNzPSdmb3JtLWNvbnRyb2wnPjwvdGQ+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8dGQ+PGlucHV0IG5hbWU9J3ZhcmlhbnRzW1wiK3ZhbHVlWydjb21iaW5hdGlvbiddK1wiXVtkaXNjb3VudF0nIHZhbHVlPScxMCcgdHlwZT0nbnVtYmVyJyBtaW49JzAnIGNsYXNzPSdmb3JtLWNvbnRyb2wnPjwvdGQ+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8dGQ+PGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+PC90ZD5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvdHI+XCI7XHJcblxyXG4gICAgICAgIHZhcmlhbnRzQ29udGFpbmVyLmFwcGVuZCh2YXJpYW50Um93KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAgRURJVE9SUyBBTkQgRklFTERTIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vICQoJyNNdWx0aV9JbWFnZXMnKS5maWxldXBsb2FkZXIoe1xyXG4vLyAgICAgZXh0ZW5zaW9uczogWydqcGcnLCAnanBlZycsICdwbmcnLCAnZ2lmJ10sXHJcbi8vICAgICBsaW1pdDogbnVsbCxcclxuLy8gICAgIGFkZE1vcmU6IHRydWUsXHJcbi8vICAgICAvLyBQZXNvIG3DoXhpbW8gZGUgdG9kYXMgbGFzIGltw6FnZW5lc1xyXG4vLyAgICAgbWF4U2l6ZTogNSxcclxuLy8gICAgIC8vIFBlc28gbcOheGltbyBwb3IgaW3DoWdlblxyXG4vLyAgICAgZmlsZU1heFNpemU6IDIsXHJcbi8vICAgICB0aGVtZTogJ3RodW1ibmFpbHMnLFxyXG4vLyAgICAgZW5hYmxlQXBpOiB0cnVlLFxyXG4vLyAgICAgY2FwdGlvbnM6IHtcclxuLy8gICAgICAgICBidXR0b246IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuICdTZWxlY2Npb25hciAnICsgKG9wdGlvbnMubGltaXQgPT0gMSA/ICdJbcOhZ2VuZXMnIDogJ0ltw6FnZW4nKTsgfSxcclxuLy8gICAgICAgICBmZWVkYmFjazogZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gJ0hhZ2EgY2xpY2sgcGFyYSBhZ3JlZ2FyLi4uJzsgfSxcclxuLy8gICAgICAgICBmZWVkYmFjazI6IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIG9wdGlvbnMubGVuZ3RoICsgJyAnICsgKG9wdGlvbnMubGVuZ3RoID4gMSA/ICcgaW3DoWdlbmVzIHNlbGVjY2lvbmFkYXMnIDogJyBpbcOhZ2VuIHNlbGVjY2lvbmFkYScpOyB9LFxyXG4vLyAgICAgICAgIGRyb3A6ICdBcnJhc3RyZSBsYXMgaW3DoWdlbmVzIGFxdcOtJyxcclxuLy8gICAgICAgICBwYXN0ZTogJzxkaXYgY2xhc3M9XCJmaWxldXBsb2FkZXItcGVuZGluZy1sb2FkZXJcIj48ZGl2IGNsYXNzPVwibGVmdC1oYWxmXCIgc3R5bGU9XCJhbmltYXRpb24tZHVyYXRpb246ICR7bXN9c1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJzcGlubmVyXCIgc3R5bGU9XCJhbmltYXRpb24tZHVyYXRpb246ICR7bXN9c1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJyaWdodC1oYWxmXCIgc3R5bGU9XCJhbmltYXRpb24tZHVyYXRpb246ICR7bXN9c1wiPjwvZGl2PjwvZGl2PiBQYXN0aW5nIGEgZmlsZSwgY2xpY2sgaGVyZSB0byBjYW5jZWwuJyxcclxuLy8gICAgICAgICByZW1vdmVDb25maXJtYXRpb246ICdFbGltaW5hcj8nLFxyXG4vLyAgICAgICAgIGVycm9yczoge1xyXG4vLyAgICAgICAgICAgICBmaWxlc0xpbWl0OiAnU29sbyBlcyBwb3NpYmxlIHN1YmlyICR7bGltaXR9IGltw6FnZW4uJyxcclxuLy8gICAgICAgICAgICAgZmlsZXNUeXBlOiAnU29sbyBzZSBhY2VwdGFuIGxvcyBmb3JtYXRvczogJHtleHRlbnNpb25zfS4nLFxyXG4vLyAgICAgICAgICAgICBmaWxlU2l6ZTogJyR7bmFtZX0gZXMgbXV5IGdyYW5kZXMhIFNlbGVjY2lvbmUgdW5hIGRlICR7ZmlsZU1heFNpemV9TUIuIGNvbW8gbcOheGltbycsXHJcbi8vICAgICAgICAgICAgIGZpbGVzU2l6ZUFsbDogJyR7bmFtZX0gc29uIG11eSBncmFuZGVzISBTZWxlY2Npb25lIHVuYXMgZGUgJHtmaWxlTWF4U2l6ZX1NQi4gY29tbyBtw6F4aW1vJyxcclxuLy8gICAgICAgICAgICAgZmlsZU5hbWU6ICdMYSBpbcOhZ2VuIGNvbiBlbCBub21icmUgJHtuYW1lfSB5YSBlc3TDoSBzZWxlY2Npb25hZGEuJyxcclxuLy8gICAgICAgICAgICAgZm9sZGVyVXBsb2FkOiAnTm8gZXN0w6EgcGVybWl0aWRvIHN1YmlyIGNhcnBldGFzLidcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGRpYWxvZ3M6IHtcclxuLy8gICAgICAgICAgICAgLy8gYWxlcnQgZGlhbG9nXHJcbi8vICAgICAgICAgICAgIGFsZXJ0OiBmdW5jdGlvbih0ZXh0KSB7XHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnRfY29uZmlybSh0ZXh0KTtcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgLy8gY29uZmlybSBkaWFsb2dcclxuLy8gICAgICAgICAgICAgY29uZmlybTogZnVuY3Rpb24odGV4dCwgY2FsbGJhY2spIHtcclxuLy8gICAgICAgICAgICAgICAgICdjb25maXJtKHRleHQpID8gY2FsbGJhY2soKSA6IG51bGw7J1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgIH1cclxuLy8gfSk7XHJcblxyXG4kKCcjU2luZ2xlX0ltYWdlJykuZmlsZXVwbG9hZGVyKHtcclxuICAgIGV4dGVuc2lvbnM6IFsnanBnJywgJ2pwZWcnLCAncG5nJywgJ2dpZiddLFxyXG4gICAgbGltaXQ6IDEsXHJcbiAgICBhZGRNb3JlOiBmYWxzZSxcclxuICAgIGZpbGVNYXhTaXplOiAyLFxyXG4gICAgY2FwdGlvbnM6IHtcclxuICAgICAgICBidXR0b246IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuICdTZWxlY2Npb25hciAnICsgKG9wdGlvbnMubGltaXQgPT0gMSA/ICdJbcOhZ2VuJyA6ICdJbcOhZ2VuJyk7IH0sXHJcbiAgICAgICAgZmVlZGJhY2s6IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuICdBZ3JlZ2FyIGltw6FnZW5lcy4uLic7IH0sXHJcbiAgICAgICAgZmVlZGJhY2syOiBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBvcHRpb25zLmxlbmd0aCArICcgJyArIChvcHRpb25zLmxlbmd0aCA+IDEgPyAnIGltw6FnZW5lcyBzZWxlY2Npb25hZGFzJyA6ICcgaW3DoWdlbiBzZWxlY2Npb25hZGEnKTsgfSxcclxuICAgICAgICBkcm9wOiAnQXJyYXN0cmUgbGFzIGltw6FnZW5lcyBhcXXDrScsXHJcbiAgICAgICAgcGFzdGU6ICc8ZGl2IGNsYXNzPVwiZmlsZXVwbG9hZGVyLXBlbmRpbmctbG9hZGVyXCI+PGRpdiBjbGFzcz1cImxlZnQtaGFsZlwiIHN0eWxlPVwiYW5pbWF0aW9uLWR1cmF0aW9uOiAke21zfXNcIj48L2Rpdj48ZGl2IGNsYXNzPVwic3Bpbm5lclwiIHN0eWxlPVwiYW5pbWF0aW9uLWR1cmF0aW9uOiAke21zfXNcIj48L2Rpdj48ZGl2IGNsYXNzPVwicmlnaHQtaGFsZlwiIHN0eWxlPVwiYW5pbWF0aW9uLWR1cmF0aW9uOiAke21zfXNcIj48L2Rpdj48L2Rpdj4gUGFzdGluZyBhIGZpbGUsIGNsaWNrIGhlcmUgdG8gY2FuY2VsLicsXHJcbiAgICAgICAgcmVtb3ZlQ29uZmlybWF0aW9uOiAnRWxpbWluYXI/JyxcclxuICAgICAgICBlcnJvcnM6IHtcclxuICAgICAgICAgICAgZmlsZXNMaW1pdDogJ1NvbG8gZXMgcG9zaWJsZSBzdWJpciAke2xpbWl0fSBpbcOhZ2VuLicsXHJcbiAgICAgICAgICAgIGZpbGVzVHlwZTogJ1NvbG8gc2UgYWNlcHRhbiBsb3MgZm9ybWF0b3M6ICR7ZXh0ZW5zaW9uc30uJyxcclxuICAgICAgICAgICAgZmlsZVNpemU6ICdMYSBpbcOhZ2VuIHBlc2EgbXVjaG8hIEVsaWphIHVuYSBkZSAke2ZpbGVNYXhTaXplfU1CIGNvbW8gbcOheGltby4nLFxyXG4gICAgICAgICAgICBmaWxlTmFtZTogJ0xhIGltw6FnZW4gY29uIGVzZSBub21icmUgeWEgaGEgc2lkbyBlbGVnaWRhJyxcclxuICAgICAgICAgICAgZm9sZGVyVXBsb2FkOiAnTm8gZXN0w6EgcGVybWl0aWRvIHN1YmlyIGNhcnBldGFzLicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaWFsb2dzOiB7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0IGRpYWxvZ1xyXG4gICAgICAgICAgICBhbGVydDogZnVuY3Rpb24odGV4dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KHRleHQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBjb25maXJtIGRpYWxvZ1xyXG4gICAgICAgICAgICBjb25maXJtOiBmdW5jdGlvbih0ZXh0LCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgJ2NvbmZpcm0odGV4dCkgPyBjYWxsYmFjaygpIDogbnVsbDsnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4kKCcjTXVsdGlfSW1hZ2VzJykuZmlsZXVwbG9hZGVyKHtcclxuICAgIGV4dGVuc2lvbnM6IFsnanBnJywgJ2pwZWcnLCAncG5nJywgJ2dpZicsICdibXAnXSxcclxuICAgIGNoYW5nZUlucHV0OiAnICcsXHJcbiAgICB0aGVtZTogJ3RodW1ibmFpbHMnLFxyXG4gICAgZW5hYmxlQXBpOiB0cnVlLFxyXG4gICAgYWRkTW9yZTogdHJ1ZSxcclxuICAgIHRodW1ibmFpbHM6IHtcclxuICAgICAgICBib3g6ICc8ZGl2IGNsYXNzPVwiZmlsZXVwbG9hZGVyLWl0ZW1zXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICc8dWwgY2xhc3M9XCJmaWxldXBsb2FkZXItaXRlbXMtbGlzdFwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgJzxsaSBjbGFzcz1cImZpbGV1cGxvYWRlci10aHVtYm5haWxzLWlucHV0XCI+PGRpdiBjbGFzcz1cImZpbGV1cGxvYWRlci10aHVtYm5haWxzLWlucHV0LWlubmVyXCI+KzwvZGl2PjwvbGk+JyArXHJcbiAgICAgICAgICAgICAgICAgICc8L3VsPicgK1xyXG4gICAgICAgICAgICAgICc8L2Rpdj4nLFxyXG4gICAgICAgIGl0ZW06ICc8bGkgY2xhc3M9XCJmaWxldXBsb2FkZXItaXRlbVwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJmaWxldXBsb2FkZXItaXRlbS1pbm5lclwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGh1bWJuYWlsLWhvbGRlclwiPiR7aW1hZ2V9PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJhY3Rpb25zLWhvbGRlclwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGEgY2xhc3M9XCJmaWxldXBsb2FkZXItYWN0aW9uIGZpbGV1cGxvYWRlci1hY3Rpb24tcmVtb3ZlXCIgdGl0bGU9XCIke2NhcHRpb25zLnJlbW92ZX1cIj48aSBjbGFzcz1cInJlbW92ZVwiPjwvaT48L2E+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImZpbGV1cGxvYWRlci1hY3Rpb24tcG9wdXBcIj48L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtaG9sZGVyXCI+JHtwcm9ncmVzc0Jhcn08L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgJzwvbGk+JyxcclxuICAgICAgICBpdGVtMjogJzxsaSBjbGFzcz1cImZpbGV1cGxvYWRlci1pdGVtXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImZpbGV1cGxvYWRlci1pdGVtLWlubmVyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0aHVtYm5haWwtaG9sZGVyXCI+JHtpbWFnZX08L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImFjdGlvbnMtaG9sZGVyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YSBjbGFzcz1cImZpbGV1cGxvYWRlci1hY3Rpb24gZmlsZXVwbG9hZGVyLWFjdGlvbi1yZW1vdmVcIiB0aXRsZT1cIiR7Y2FwdGlvbnMucmVtb3ZlfVwiPjxpIGNsYXNzPVwicmVtb3ZlXCI+PC9pPjwvYT4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZmlsZXVwbG9hZGVyLWFjdGlvbi1wb3B1cFwiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICc8L2xpPicsXHJcbiAgICAgICAgc3RhcnRJbWFnZVJlbmRlcmVyOiB0cnVlLFxyXG4gICAgICAgIGNhbnZhc0ltYWdlOiBmYWxzZSxcclxuICAgICAgICBfc2VsZWN0b3JzOiB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICcuZmlsZXVwbG9hZGVyLWl0ZW1zLWxpc3QnLFxyXG4gICAgICAgICAgICBpdGVtOiAnLmZpbGV1cGxvYWRlci1pdGVtJyxcclxuICAgICAgICAgICAgc3RhcnQ6ICcuZmlsZXVwbG9hZGVyLWFjdGlvbi1zdGFydCcsXHJcbiAgICAgICAgICAgIHJldHJ5OiAnLmZpbGV1cGxvYWRlci1hY3Rpb24tcmV0cnknLFxyXG4gICAgICAgICAgICByZW1vdmU6ICcuZmlsZXVwbG9hZGVyLWFjdGlvbi1yZW1vdmUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkl0ZW1TaG93OiBmdW5jdGlvbihpdGVtLCBsaXN0RWwsIHBhcmVudEVsLCBuZXdJbnB1dEVsLCBpbnB1dEVsKSB7XHJcbiAgICAgICAgICAgIHZhciBwbHVzSW5wdXQgPSBsaXN0RWwuZmluZCgnLmZpbGV1cGxvYWRlci10aHVtYm5haWxzLWlucHV0JyksXHJcbiAgICAgICAgICAgICAgICBhcGkgPSAkLmZpbGV1cGxvYWRlci5nZXRJbnN0YW5jZShpbnB1dEVsLmdldCgwKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwbHVzSW5wdXQuaW5zZXJ0QWZ0ZXIoaXRlbS5odG1sKVthcGkuZ2V0T3B0aW9ucygpLmxpbWl0ICYmIGFwaS5nZXRDaG9vc2VkRmlsZXMoKS5sZW5ndGggPj0gYXBpLmdldE9wdGlvbnMoKS5saW1pdCA/ICdoaWRlJyA6ICdzaG93J10oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGl0ZW0uZm9ybWF0ID09ICdpbWFnZScpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uaHRtbC5maW5kKCcuZmlsZXVwbG9hZGVyLWl0ZW0taWNvbicpLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24obGlzdEVsLCBwYXJlbnRFbCwgbmV3SW5wdXRFbCwgaW5wdXRFbCkge1xyXG4gICAgICAgIHZhciBwbHVzSW5wdXQgPSBsaXN0RWwuZmluZCgnLmZpbGV1cGxvYWRlci10aHVtYm5haWxzLWlucHV0JyksXHJcbiAgICAgICAgICAgIGFwaSA9ICQuZmlsZXVwbG9hZGVyLmdldEluc3RhbmNlKGlucHV0RWwuZ2V0KDApKTtcclxuICAgIFxyXG4gICAgICAgIHBsdXNJbnB1dC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYXBpLm9wZW4oKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvblJlbW92ZTogZnVuY3Rpb24oaXRlbSwgbGlzdEVsLCBwYXJlbnRFbCwgbmV3SW5wdXRFbCwgaW5wdXRFbCkge1xyXG4gICAgICAgIHZhciBwbHVzSW5wdXQgPSBsaXN0RWwuZmluZCgnLmZpbGV1cGxvYWRlci10aHVtYm5haWxzLWlucHV0JyksXHJcbiAgICAgICAgICAgIGFwaSA9ICQuZmlsZXVwbG9hZGVyLmdldEluc3RhbmNlKGlucHV0RWwuZ2V0KDApKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChhcGkuZ2V0T3B0aW9ucygpLmxpbWl0ICYmIGFwaS5nZXRDaG9vc2VkRmlsZXMoKS5sZW5ndGggLSAxIDwgYXBpLmdldE9wdGlvbnMoKS5saW1pdClcclxuICAgICAgICAgICAgcGx1c0lucHV0LnNob3coKTtcclxuICAgIH0sXHJcbiAgICAvKlxyXG4gICAgLy8gd2hpbGUgdXNpbmcgdXBsb2FkIG9wdGlvbiwgcGxlYXNlIHNldFxyXG4gICAgLy8gc3RhcnRJbWFnZVJlbmRlcmVyOiBmYWxzZVxyXG4gICAgLy8gZm9yIGEgYmV0dGVyIGVmZmVjdFxyXG4gICAgdXBsb2FkOiB7XHJcbiAgICAgICAgdXJsOiAnLi9waHAvdXBsb2FkX2ZpbGUucGhwJyxcclxuICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBlbmN0eXBlOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcbiAgICAgICAgc3RhcnQ6IHRydWUsXHJcbiAgICAgICAgc3luY2hyb246IHRydWUsXHJcbiAgICAgICAgYmVmb3JlU2VuZDogbnVsbCxcclxuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIGl0ZW0pIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uaHRtbC5maW5kKCcucHJvZ3Jlc3MtaG9sZGVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5yZW5kZXJUaHVtYm5haWwoKTtcclxuICAgICAgICAgICAgfSwgNDAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5odG1sLmZpbmQoJy5wcm9ncmVzcy1ob2xkZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIGl0ZW0uaHRtbC5maW5kKCcuZmlsZXVwbG9hZGVyLWl0ZW0taWNvbiBpJykudGV4dCgnRmFpbGVkIScpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Qcm9ncmVzczogZnVuY3Rpb24oZGF0YSwgaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3NCYXIgPSBpdGVtLmh0bWwuZmluZCgnLnByb2dyZXNzLWhvbGRlcicpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYocHJvZ3Jlc3NCYXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuZmluZCgnLmZpbGV1cGxvYWRlci1wcm9ncmVzc2JhciAuYmFyJykud2lkdGgoZGF0YS5wZXJjZW50YWdlICsgXCIlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRyYWdEcm9wOiB7XHJcbiAgICAgICAgY29udGFpbmVyOiAnLmZpbGV1cGxvYWRlci10aHVtYm5haWxzLWlucHV0J1xyXG4gICAgfSxcclxuICAgIG9uUmVtb3ZlOiBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgJC5wb3N0KCdwaHAvdXBsb2FkX3JlbW92ZS5waHAnLCB7XHJcbiAgICAgICAgICAgIGZpbGU6IGl0ZW0ubmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgICovXHJcbn0pO1xyXG5cclxuXHJcbiQoJy5EaXNwbGF5LUlucHV0LU1vZGlmaWNhYmxlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXktaW5wdXQtZGlzYWJsZWQnKTsgXHJcbn0pO1xyXG5cclxuXHJcbi8vIC0tLS0gTW9kaWZpY2FibGUgaW5wdXQgdGV4dFxyXG4vLyBIdG1sIGVsZW1lbnRcclxuLy88cCBkYXRhLWVkaXRhYmxlIGNsYXNzPVwiU2x1Z0lucHV0XCI+e3sgJGFydGljbGUtPnNsdWcgfX08L3A+ICAgXHJcblxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWVkaXRhYmxlXScsIGZ1bmN0aW9uKCl7XHJcbiAgXHJcbiAgICB2YXIgJGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgdmFyICRpbnB1dCA9ICQoJzxpbnB1dC8+JykudmFsKCAkZWwudGV4dCgpICk7XHJcbiAgICAkZWwucmVwbGFjZVdpdGgoICRpbnB1dCApO1xyXG4gICAgXHJcbiAgICB2YXIgc2F2ZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciAkcCA9ICQoJzxwIGRhdGEtZWRpdGFibGUgLz4nKS50ZXh0KCAkaW5wdXQudmFsKCkgKTtcclxuICAgICAgJGlucHV0LnJlcGxhY2VXaXRoKCAkcCApO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgIFdlJ3JlIGRlZmluaW5nIHRoZSBjYWxsYmFjayB3aXRoIGBvbmVgLCBiZWNhdXNlIHdlIGtub3cgdGhhdFxyXG4gICAgICB0aGUgZWxlbWVudCB3aWxsIGJlIGdvbmUganVzdCBhZnRlciB0aGF0LCBhbmQgd2UgZG9uJ3Qgd2FudCBcclxuICAgICAgYW55IGNhbGxiYWNrcyBsZWZ0b3ZlcnMgdGFrZSBtZW1vcnkuIFxyXG4gICAgICBOZXh0IHRpbWUgYHBgIHR1cm5zIGludG8gYGlucHV0YCB0aGlzIHNpbmdsZSBjYWxsYmFjayBcclxuICAgICAgd2lsbCBiZSBhcHBsaWVkIGFnYWluLlxyXG4gICAgKi9cclxuICAgICRpbnB1dC5vbmUoJ2JsdXInLCBzYXZlKS5mb2N1cygpO1xyXG4gICAgXHJcbiAgfSk7XHJcbiAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92YWRtaW4tZm9ybXMuanMiXSwic291cmNlUm9vdCI6IiJ9
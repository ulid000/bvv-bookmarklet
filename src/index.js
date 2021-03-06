import bvvbookmarklet from '../dist_bookmarklet/bvvbookmarklet.bookmarklet';

// based on https://gist.github.com/Chalarangelo/4ff1e8c0ec03d9294628efbae49216db
// and https://stackoverflow.com/a/34046084
// and https://gist.github.com/rproenca/64781c6a1329b48a455b645d361a9aa3
export function copyToClipboard(str) {
    var el = document.createElement('textarea');
    el.value = str;
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);

    if (navigator.userAgent.match(/ipad|iphone/i)) {
        el.readonly = false; // needed on iOS 
        el.contenteditable = true; // needed on iOS    
        var range = document.createRange();
        range.selectNodeContents(el);
        // console.log(el.value);
        // console.log(range);
        var s = window.getSelection();
        s.removeAllRanges();
        s.addRange(range);
        el.setSelectionRange(0, 999999);
        // console.log(s);
    } else {
        el.select();
    }

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy ' + err);
    }
    document.body.removeChild(el);
};

var bookmarkletlink = document.getElementById('bookmarkletlink')
bookmarkletlink.href = bvvbookmarklet;

// FIXME: export copyToClipboard to library
var bookmarkletcopy = document.getElementById('bookmarkletcopy');
bookmarkletcopy.href = "javascript:clipboard.copyToClipboard(document.getElementById('bookmarkletlink').href)";




import bookmarklet from '../dist_bookmarklet/bvvbookmarklet.bookmarklet';
var a = document.createElement('a');
a.href = bookmarklet;
a.innerHTML = "Install Bookmarklet!";
document.body.appendChild(a);
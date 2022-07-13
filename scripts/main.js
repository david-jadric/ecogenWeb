let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ini.png'){
        myImage.setAttribute('src','images/logo.svg');
    } else {
        myImage.setAttribute('src','images/ini.png');
    }
}


const inputText = document.getElementById('inputtext');
const generateButton = document.getElementById('generatebutton');
const qrcodeContainer = document.getElementById('qrcodecontainer');

generateButton.addEventListener('click', generateQRCode);

function generateQRCode(){
    const text = inputText.value.trim();
    if(text){
        const qr = new QRious({
            value: text,
            size: 200,
            background: '#ffffff',
            foreground: '#000000',
        });
        qrcodeContainer.innerHTML = '';
        qrcodeContainer.appendChild(qr.canvas);
    }
    else{
        qrcodeContainer.innerHTML = '';
    }
}
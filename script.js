function generateQRCode(){
    const qrDataInput=document.getElementById('qrData')
    const qrCodeDiv=document.getElementById('qr-code')
    const qrData=qrDataInput?.value.trim();
    if (!qrData){
        alert('Please enter data to generate QR Code');
        return;
    } 
    //Clear Previous QR Code
    qrCodeDiv.innerHTML= '' ;

    //create QR Code image element

    const qrCodeImg=document.createElement('img')
    qrCodeImg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
    qrCodeImg.alt='QR Code';

    //Append the QR Code to the container
    qrCodeDiv.appendChild(qrCodeImg)

}
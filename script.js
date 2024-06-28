document.getElementById("predictBtn").addEventListener("click", function() {
    var predictions = [
        "Belum keluar malam ini Fergusoo!!! Jangan diperiksa",
        "Siap-siap begadang malam, muncul malam ini deck!",
        "Indeksnya ngga bakal muncul, haha",
        "Mending cari ayang saja daripada nungguin",
        "Lho, masih refresh SIX kamu?",
        "Kenapa malah pencet, takut tidak lulus ya daspronya huhu",
        "SIX asix SIX asix nunggu dirinya, ngga muncul dek",
        "OMG MUNCUL DASPRO A!!!... BERCYANDA",
        "Yakali mau kasih, kan kalau kalian ngerjain tubes deadliner, kami jugalah",
        "Kayaknya kamu A deh mas/mbak, cek dulu SIX nya!!!"
    ];
    
    var randomIndex = Math.floor(Math.random() * predictions.length);
    var predictionElement = document.getElementById("prediction");
    
    // Play sound
    var bellSound = document.getElementById("bellSound");
    bellSound.play();

    // Show prediction with animation
    predictionElement.classList.remove("show");
    predictionElement.classList.add("hide");
    
    setTimeout(function() {
        predictionElement.innerText = predictions[randomIndex];
        predictionElement.classList.remove("hide");
        predictionElement.classList.add("show");
    }, 300);
});

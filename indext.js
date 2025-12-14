let sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(element => {

    // প্রতিটি সাউন্ডের জন্য বাটন তৈরী,-----------
    let btnCreat = document.createElement('button')
    document.getElementById('buttons').appendChild(btnCreat)
    btnCreat.classList.add('btn')
    btnCreat.innerText = element


    // তৈরীকৃত বাটনে ক্লিক হলে সাউন্ড বাজানো,----------

    btnCreat.addEventListener('click', () => {
        stopSongs()
        document.getElementById(element).play()
    })

})

function stopSongs() {
    sounds.forEach(element => {
        document.getElementById(element)
        document.getElementById(element).pause()
        document.getElementById(element).currentTime = 0;
    })
}
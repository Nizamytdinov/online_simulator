let how_to_use_open = document.getElementById('how_to_use_open')
let modal = document.getElementById('how_use_modal')
let close_how_use = document.getElementById('close_how_use')

let modal_value = false

how_to_use_open.addEventListener('click', () => {
    if(!modal_value) {
        modal_value = true
        modal.style.display = 'flex'
    }
})

close_how_use.addEventListener('click', () => {
    if(modal_value) {
        modal_value = false
        modal.style.display = 'none'
    }
})
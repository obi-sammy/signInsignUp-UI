const largerBox = document.querySelector('.largerBox')
const smallerBox = document.querySelector('.smallerBox')


document.getElementById('signInBtn').addEventListener('click', () => {
    smallerBox.classList.add('slideLeft', 'borderRadius')
    largerBox.classList.add('slideRight')

})

document.getElementById('signUpBtn').addEventListener('click', () => {
    smallerBox.classList.remove('slideLeft', 'borderRadius')
    largerBox.classList.remove('slideRight')
})
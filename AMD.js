//element.addeventlistener('event',function)

const ButtonFiveOne = document.querySelector('.b-5-1')

const dummy = document.querySelector('.dummy')

function revealContent()
{
    if(dummy.classList.contains('b-5-1'))
    {
        dummy.classList.remove('b-5-1')
    }

    else{
        dummy.classList.add('b-5-1')
    }
}

ButtonFiveOne.addEventListener('click',revealContent)


const Subscribe = document.querySelector('.subscribe')

const dummyone = document.querySelector('.dummy-1')

function revealContentnext()
{
    if(dummyone.classList.contains('subscribe'))
    {
        dummyone.classList.remove('subscribe')
    }

    else{
        dummyone.classList.add('subscribe')
    }
}

Subscribe.addEventListener('click',revealContentnext)
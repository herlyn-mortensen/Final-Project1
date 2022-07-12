window.addEventListener('load', function () {
    let url = window.location.hash.replace('#','')
    console.log(url)
    if (url !== undefined) {
        const btn = document.getElementById(url);
        btn.click()
    }
})

document.querySelector('#Symptoms').addEventListener("click", function(){;
    let allPages = document.querySelectorAll('.page');
    for (let page of allPages){
        page.classList.add('hidden');
        page.classList.remove('show');
    }

    let symptoms = document.querySelector('#second-fold');
    symptoms.classList.add('show');
    symptoms.classList.remove('hidden');
})

document.querySelector('#Prevention').addEventListener("click", function(){;
    let allPages = document.querySelectorAll('.page');
    for (let page of allPages){
        page.classList.add('hidden');
        page.classList.remove('show');
    }

    let symptoms = document.querySelector('#third-fold');
    symptoms.classList.add('show');
    symptoms.classList.remove('hidden');
})


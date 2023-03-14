const DogruCevap =['8', '10','3','15'];
const form=document.querySelector('.question-form');
const result=document.querySelector('.result')

form.addEventListener('submit', e=>{
    e.preventDefault();

    let sonuc=0;
    const userAnsers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value]

    userAnsers.forEach((answer,index) =>{
        if(answer === DogruCevap[index])
        {
            sonuc +=25;
        }
    });
    if(sonuc==100)
    {
        successMessage.classList.remove('d-none');
        alert('TEBRİKLER 100 PUAN ALDINIZ')
    }

    result.classList.remove('d-none')
    let puan=0;
    const bastir = setInterval(() => {
        result.querySelector('span').textContent = `${puan}`;
        if (puan==sonuc)
        {
            clearInterval(bastir);
        }
        else
        {
            puan++;
        }

    }, 10);
    
})
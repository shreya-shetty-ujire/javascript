const form = document.getElementById("form")


form.addEventListener("submit", function(event){
    event.preventDefault()

    const height= parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)
    const results= document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = "Please give a valid height";
    } else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight";
    }else{

        const bmi=(weight/((height*height)/10000)).toFixed(2)

        results.innerHTML = `<span> 
        BMI= ${bmi}
        ${bmi < 18.6 ? `<p>Under weight</p>`:
            bmi<= 24.9 ? `<p>Normal weight</p>`:
            `<p>Over weight</p>`

        }
        </span>`;
    }
})
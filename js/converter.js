const inputField = document.getElementById('input-temp');
const fromUnitField = document.getElementById('input-unit');
const toUnitField = document.getElementById('output-unit');
const outputField = document.getElementById('output-temp');
const form = document.getElementById('converter');

function convertTemp(value,fromUnit, toUnit){
    /**
     * CONVERTIR DE CELCIUS A FARENHEIT O KELVIN
     */
    if(fromUnit=== 'c'){
        if(toUnit=== 'f'){
            return value * 9 /5+32;
        }else if(toUnit === 'k'){
            return value + 273.15;
        }
        return value;
    }

    /**
     * CONVERTIR DE FARENHEIT A CELSIUS O KELVIN
     */
    if(fromUnit=== 'f'){
        if(toUnit === 'c'){
            return (value-32)*5/9;
        }else if(toUnit === 'k'){
            return (value + 459.67) *5 /9;
        }
        return value;
    }

    /**
     * CONVERTIR DE KELVIN A FARENHEIT O CELSIUS
     */

    if(fromUnit=== 'k'){
        if(toUnit === 'c'){
            return value-273.15;
        }else if(toUnit === 'f'){
            return (value - 273.15) * 9/5 + 32;
        }
        return value;
    }
    throw new Error('Unidad de Temperatura Invalida');
}

form.addEventListener('input',()=> {
    const inputTemp = parseFloat(inputField.value);
    const fromUnit = fromUnitField.value;
    const toUnit = toUnitField.value;
    const outputTemp = converTemp(inputTemp, fromUnit, toUnit);

    outputField.value = (Math.round(outputTemp * 100)/1000) + ' '+ toUnit.toUpperCase();
});

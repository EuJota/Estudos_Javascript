function makeClass() {
        class Thermostat{
            constructor(Fahrenheit){
                this._Fahrenheit = Fahrenheit;
            }
            get temperature(){
                return ((5/9) * (this._Fahrenheit - 32));
            }
            set temperature(updatedTemperature){
                this._Fahrenheit = updatedTemperature;
            }  
        }  
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); 
let temp = thermos.temperature; 
thermos.temperature = 26;
temp = thermos.temperature;
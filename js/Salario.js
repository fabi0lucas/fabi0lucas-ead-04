class Salario{
    /**
     * @param {number} pSalarioBruto 
     */
    constructor(pSalarioBruto){

        this._salarioBruto = undefined;
        this._valorIRPF = undefined;
        this._descontoINSS = undefined;

        this._validarSalario(pSalarioBruto);
        this._calcularINSS(pSalarioBruto);
        this._calcularIRPF(this._baseIRPF);
        this._congelar();

        this._baseIRPF = this._salarioBruto - this._descontoINSS;
        this._totalDescontos = this._valorIRPF + this._descontoINSS;
        this._salarioLiquido = this._salarioBruto - this._totalDescontos;
        
    }

     /*
    Faz as validacoes e mostra mensagem de erro
    */

    _validarSalario(pSalarioBruto){
        if (typeof pSalarioBruto !== 'number')
            throw new Error('O SALARIO TEM QUE CONTER NUMERO VALIDO...');

             if (pSalarioBruto <= 0)
                 throw new Error('O SALARIO BRUTO TEM QUE SER MAIOR QUE ZERO!');

                 return this._salarioBruto = pSalarioBruto;
    }

     /*
    Faz o calculo do INSS
    */

    _calcularINSS(){
        if (this._salarioBruto <= 1693.72){
            return this._descontoINSS = (this._salarioBruto * 8) / 100;
            }   
                else if (this._salarioBruto > 1693.72 && this._salarioBruto <= 2822.90){
                return this._descontoINSS = (this._salarioBruto * 9) / 100;
                     } 
                        else if (this._salarioBruto > 2822.90 && this._salarioBruto <= 5645.80){
                        return this._descontoINSS = (this._salarioBruto * 11) / 100;
                            }
                                else {
                                return this._descontoINSS = 621.04;
                                        }
    }
    

    /*
    Faz o calculo do IRPF
    */

    _calcularIRPF(){
        if (this._baseIRPF <= 1903.98){
            return this._valorIRPF = 0;
                }
                    else if (this._salarioBruto > 1903.98 && this._salarioBruto <= 2826.65){
                    return this._valorIRPF = ((this._baseIRPF - 142.80) * 7.5 / 100);
                        }
                            else if (this._salarioBruto > 2826.65 && this._salarioBruto <= 3751.05){
                            return this._valorIRPF = ((this._baseIRPF - 354.80) * 15 / 100);
                                }
                                    else if (this._salarioBruto > 3751.05 && this._salarioBruto <= 4664.68){
                                    return this._valorIRPF = ((this._baseIRPF - 636.13) * 22.5 / 100);
                                        }
                                            else {
                                            return this._valorIRPF = ((this._baseIRPF - 869.36) * 27.5 / 100);
                                                }  
    }



     /*
    Retorna os valores
    */

    get totalDescontos(){
        return this._totalDescontos;
    }
    get salarioBruto(){
        return this._salarioBruto;
    }
    get salarioLiquido(){
        return this._salarioLiquido;
    }
    get descontoINSS(){
        return this._descontoINSS;
    }
    _congelar() {
        Object.freeze(this);
      }

}
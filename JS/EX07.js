var idade, sexo, v=false
var hvelho=0, hnovo=101, hmaior=0, hmenor=0
var mvelha=0, mnova=101, mmaior=0, mmenor=0

for(var cont=1; cont<=5; cont++){
    idade=parseInt(prompt("informe a idade(5 a 100):"))
    sexo=prompt("informe o sexo(M ou F):")

    if((idade<=100 && idade>=5)&& (sexo=="M" || sexo=="F")){
        v=true
        if(sexo=="M"){
            if(idade>=18){
                hmaior++
            }
            else{
                hmenor++
            }
            if(idade>=hvelho){
                hvelho=idade
            }
            if(idade<=hnovo){
                hnovo=idade
            }

        }
        else{
            if(idade>=18){
                mmaior++
            }
            else{
                mmenor++
            }
            if(idade>=mvelha){
                mvelha=idade
            }
            if(idade<=mnova){
                mnova=idade
            }
        }

    }
    else{
        v=false
        cont=0
    }
}
if(v==true){
    alert(""+(hmaior+hmenor)+": é a quantidade de homens e:\n"+(mmaior+mmenor)+": é a quantidade de mulheres e\n"+(hmaior+mmaior)+": é a quantidade de pessoas maiores de idade e:\n"+(hmenor+mmenor)+": é de pessoas menores de idade")

    if((hmaior+hmenor)!=0){
        alert("o homem mais velho possui:"+hvelho+":de idade e o homem mais novo possui:"+hnovo+":de idade. \n a quantidade de homens maiores de idade é:"+hmaior)
    }
    else{
        alert("nao existem homens nesse grupo")
    }
    if((mmaior+mmenor)!=0){
        alert("a mulher mais velha possui:"+mvelha+":de idade e a mulher mais nova possui:"+mnova+":de idade. \n a quantidade de mulheres maiores de idade é:"+mmaior)
    }
    else{
        alert("nao existem mulheres nesse grupo")
    }
}
else{
    alert("erro, valores digitados incorretos")
}
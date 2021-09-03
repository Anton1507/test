function calcul ([...arg])
{
    let a=arg[0];
    let b=arg[2];
    if (arg[1]==='+'){
        return a+b
    }
    if(arg[1]==='-'){
        return a-b
    }
    if(arg[1]==='*'){
        return a*b
    }
    if(arg[1]=="/"){
        return a/b
    }

}
// const  calcul= (a,b)=> a+b;



module.exports = calcul;


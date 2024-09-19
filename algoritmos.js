

// algoritmo de cuadrados medios
const al_cu_me = function(semilla, num, digito = 4) {
    let sem = semilla;
    for(let m = 0; m < num; m++) {
        let calculo = sem ** 2;
        let cuadrado = calculo.toString();
        let inicio;
        let medio = [];
        console.log(`y${m}: `, cuadrado);
        console.log("dc: ", cuadrado.length);

        if((cuadrado.length%2)==0 && (digito%2)==0){
            inicio = (cuadrado.length / 2) - (digito / 2);
        } else if ((cuadrado.length%2)!=0 && (digito%2)==0) {
            inicio = parseInt(cuadrado.length / 2) - (digito / 2);
        } else if ((cuadrado.length%2)!=0 && (digito%2)!=0) {
            inicio = parseInt(cuadrado.length / 2) - parseInt(digito / 2);
        } else {
            inicio = (cuadrado.length / 2) - parseInt(digito / 2 + 1);
        }
        for(let i = inicio; i < (inicio + digito); i++){
            medio.push(cuadrado[i]);
        }
        let medioInt = parseInt(medio.join(''));
        console.log(`r${m + 1}: `, (medioInt / (10**digito)));
        sem = medioInt;
    }
}



// algoritmo de productos medios
const alg_pro_med = function(semilla1, semilla2, num, digito = 4) {
    let sem1 = semilla1;
    let sem2 = semilla2;
    for(let m = 0; m < num; m++) {
        let calculo = sem1*sem2;
        let cuadrado = calculo.toString();
        let inicio;
        let medio = [];
        console.log(`y${m}: `, cuadrado);
        console.log("dc: ", cuadrado.length);

        if((cuadrado.length%2)==0 && (digito%2)==0){
            inicio = (cuadrado.length / 2) - (digito / 2);
        } else if ((cuadrado.length%2)!=0 && (digito%2)==0) {
            inicio = parseInt(cuadrado.length / 2) - (digito / 2);
        } else if ((cuadrado.length%2)!=0 && (digito%2)!=0) {
            inicio = parseInt(cuadrado.length / 2) - parseInt(digito / 2);
        } else {
            inicio = (cuadrado.length / 2) - parseInt(digito / 2 + 1);
        }
        for(let i = inicio; i < (inicio + digito); i++){
            medio.push(cuadrado[i]);
        }
        let medioInt = parseInt(medio.join(''));
        console.log(`r${m + 1}: `, (medioInt / (10**digito)));
        sem1 = sem2;
        sem2 = medioInt;
    }
}


// algoritmo multiplicativo constante
const alg_mult_const = function(semilla, constante, num, digito = 4) {
    let sem = semilla;
    let fijo = constante;
    for(let m = 0; m < num; m++) {
        let calculo = fijo*sem;
        let cuadrado = calculo.toString();
        let inicio;
        let medio = [];
        console.log(`y${m}: `, cuadrado);
        console.log("dc: ", cuadrado.length);

        if((cuadrado.length%2)==0 && (digito%2)==0){
            inicio = (cuadrado.length / 2) - (digito / 2);
        } else if ((cuadrado.length%2)!=0 && (digito%2)==0) {
            inicio = parseInt(cuadrado.length / 2) - (digito / 2);
        } else if ((cuadrado.length%2)!=0 && (digito%2)!=0) {
            inicio = parseInt(cuadrado.length / 2) - parseInt(digito / 2);
        } else {
            inicio = (cuadrado.length / 2) - parseInt(digito / 2 + 1);
        }
        for(let i = inicio; i < (inicio + digito); i++){
            medio.push(cuadrado[i]);
        }
        let medioInt = parseInt(medio.join(''));
        console.log(`r${m + 1}: `, (medioInt / (10**digito)));
        sem = medioInt;
    }
}

// algoritmo lineal
const alg_lineal = function(a, x, c, m, d=4) {
    let tem = x;
    for(let i = 0; i<m; i++) {
        let res = (a * tem + c) % m;
        let r = m-1;
        console.log(`x${i+1}: `,res);
        console.log(`r${i+1}: `,res/r);
        tem = res;
    }
    
}

// algoritmo congruencial multiplicativo
const alg_cong_mult = function(a, x, m, N, d=4) {
    let tem = x;
    for(let i = 0; i<N; i++) {
        let res = (a * tem) % m;
        let r = m-1;
        console.log(`x${i+1}: `,res);
        console.log(`r${i+1}: `,res/r);
        tem = res;
    }
    
}


// algorito congruencial aditivo
const alg_cong_aditivo = function(secuencia, n, m, iter, d=4) {
    let x_i = secuencia.length - 1;
    let x_n = secuencia.length - n;
    let caja = secuencia;

    for(let i = 0; i < iter; i++) {
        let res = (caja[x_i] + caja[x_n]) % m;
        console.log(`x${i+n+1}: `,res);
        let r = m-1;
        console.log(`r${i+1}: `, res/r);
        caja.push(res);
        x_i++;
        x_n++;
    }
}

// algoritmo congruencial no lineal
const alg_cong_no_lineal = function(semilla, a, b, c, m, d=4) {
    let x = semilla;
    for(let i = 0; i < m; i++) {
        let res = ((a*(x**2)) + (b*x) + c) % m;
        console.log(`x${i+1}: `, res);
        let r = m - 1;
        console.log(`r${i+1}: `, res/r);
        x = res;
    }
}

alg_cong_no_lineal(13,26,27,27,8);
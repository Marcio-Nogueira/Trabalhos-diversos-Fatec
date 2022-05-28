#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <locale.h>



     /*          MÁRCIO NOGUEIRA DE SOUSA           */
     /*          CÁLCULO - ADS - NOITE              */


    /******************** FUNÇÃO *********************/
    double f1(double x, double k) {
    return (k*pow(x,(k-1)));
    }
    double f2(double x) {
    return(1/x);
    }
    double f3(double x) {
    return(pow((1/cos(x)),2));
    }
    /**************** CÓDIGO PRINCIPAL ****************/
    int main(void)
    {
        setlocale(LC_ALL, "Portuguese");
        int a;
        double x;
        double k;
        double resultado;

            printf("Escolha uma função para obter f'(valor):\n");
            printf("1.. f(x) = x^k \n");
            printf("2.. f(x) = ln(x)\n");
            printf("3.. f(x) = tg(x)\n");
            printf("9.. Sair\n");
        while (a!=9) {
                printf("\nSua escolha: \t");
                scanf("%d", &a);

            switch (a) {
            case 1:
                printf("Digite o valor de x\n");
                scanf("%lf", &x);
                printf("Digite o valor de k\n");
                scanf("%lf", &k);
                resultado=f1(x, k);
                printf("O resultado de f(%.2lf) = %.4lf\n", x, resultado);
                break;
            case 2:
                printf("Digite o valor de x\n");
                scanf("%lf", &x);
                resultado = f2(x);
                if (x == 0) {
                    printf("Resultado indeterminado\n");
                } else {
                printf("O resultado de f(%.2lf) = %.4lf\n", x, resultado);
                }
                break;
            case 3:
                printf("Digite o valor de x\n");
                scanf("%lf", &x);
                resultado = f3(x);
                printf("O resultado de f(%.2lf) = %.4lf\n", x, resultado);
                break;
            case 9:
                printf("Até mais\n");
                break;
            default:
                printf("Digite uma opção valida\n");
                break;
            }
        }


        return 0;
    }

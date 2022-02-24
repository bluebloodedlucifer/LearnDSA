import java.util.Scanner;

public class IsANumberPrime {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();

        while(n-->0){
            int num = input.nextInt();
            isPrime(num);
        }
        input.close();
    }
    static void isPrime(int num){
        for(int i = 2; i*i <= num; i++){
            if(num % i == 0){
                System.out.println("not prime");
                return;
            }
        }
        System.out.println("prime");
    }
}

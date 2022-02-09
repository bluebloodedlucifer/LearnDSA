import java.util.Scanner;

public class PrimeFactorizationOfANumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num = input.nextInt();

        for(int i = 2; i*i <= num; i++){
            while(num % i == 0){
                System.out.print(i + " ");
                num /= i;
            }
        }
        if(num != 1) System.out.print(num);
        input.close();
    }

}

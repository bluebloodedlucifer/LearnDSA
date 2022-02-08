import java.util.Scanner;

public class RotateANumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int k = input.nextInt();

        int digits = NumOfDigits(n);
        k %= digits;
        if(k<0) k = digits+k;
        while(k>0){
            int rem = n%10;
            n /= 10;
            n = n + (int)Math.pow(10, digits-1)*rem;
            k--;
        }
        System.out.println(n);
        input.close();
    }

    static int NumOfDigits(int n){
        if(n == 0) return 1;
        else return (int)Math.floor((Math.log10(Math.abs(n))+1));
    }
}

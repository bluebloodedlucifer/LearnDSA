import java.util.Scanner;

public class GCDandLCM {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num1 = input.nextInt(), num2 = input.nextInt();
        int gcd = GCD(num1, num2);
        int lcm = num1*num2/gcd;
        System.out.println(gcd);
        System.out.println(lcm);

        input.close();
    }

    static int GCD(int a, int b){
        if(b == 0) return a;
        return GCD(b, a%b);
    }
}
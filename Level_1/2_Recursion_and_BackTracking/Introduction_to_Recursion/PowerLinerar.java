import java.util.Scanner;

public class PowerLinerar {
    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner input = new Scanner(System.in);
        int x = input.nextInt();
        int n = input.nextInt();
        System.out.println(power(x, n));
        input.close();
    }

    public static int power(int x, int n){
        if(n == 0) return 1;
        return x*power(x, n-1);
    }
}

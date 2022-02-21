import java.util.Scanner;

public class PowerLograthmic {
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
        int res = power(x, n/2);
        res = res*res;
        if(n%2 == 0){
            return res;
        }
        return res*x;
    }
}

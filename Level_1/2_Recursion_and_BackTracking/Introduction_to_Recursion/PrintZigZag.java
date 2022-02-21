import java.util.Scanner;

public class PrintZigZag {
    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner input = new Scanner(System.in);
        int num = input.nextInt();
        pzz(num);
        input.close();
    }

    public static void pzz(int n){
        if(n == 0) return;
        System.out.print(n+" ");
        pzz(n-1);
        System.out.print(n+" ");
        pzz(n-1);
        System.out.print(n+" ");
    }
}

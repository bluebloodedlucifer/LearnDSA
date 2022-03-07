import java.util.Scanner;

public class PrintStairPaths {
    public static void main(String[] args) throws Exception {   
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        String op = "";
        printStairPaths(n, op);
        input.close();
    }

    public static void printStairPaths(int n, String op) {
        if(n == 0){
            System.out.println(op);
        }
        if(n > 0) printStairPaths(n-1, op+"1");
        if(n > 1) printStairPaths(n-2, op+"2");
        if(n > 2) printStairPaths(n-3, op+"3");
    }
}
